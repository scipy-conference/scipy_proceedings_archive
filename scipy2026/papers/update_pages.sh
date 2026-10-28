#!/bin/bash

# Check for required commands
if ! command -v pdftk &> /dev/null; then
    echo "Error: 'pdftk' is required but it's not installed."
    exit 1
fi

# Usage: ./update_pages.sh <start_page> <directory_path_1> <directory_path_2> ... <directory_path_n>
#
# Changes from the 2025 version:
# - Counts pages from full_text.pdf only, so other PDFs in a paper folder are ignored
# - Inserts first_page/last_page under `project:` when the keys are missing

current_page=$1  # First argument is the start page
shift            # Shift to remove the first argument, so now $@ contains the list of directories

# Set or insert a `key: value` line directly under `project:` in a myst.yml
set_project_key() {
    local yaml_file=$1 key=$2 value=$3
    if grep -q "^  $key:" "$yaml_file"; then
        sed -i.bak "s/^  $key: .*/  $key: $value/" "$yaml_file"
    else
        awk -v line="  $key: $value" '{ print } /^project:/ && !done { print line; done = 1 }' \
            "$yaml_file" > "$yaml_file.tmp" && mv "$yaml_file.tmp" "$yaml_file"
    fi
}

# Iterate over all provided base directories
for BASE_DIR in "$@"; do
    # Check if the base directory exists
    if [ ! -d "$BASE_DIR" ]; then
        echo "Base directory '$BASE_DIR' not found. Skipping."
        continue
    fi

    folder="${BASE_DIR%/}/"
    yaml_file="${folder}myst.yml"
    pdf_file="${folder}full_text.pdf"

    # Check if the YAML file exists in the current folder
    if [ ! -f "$yaml_file" ]; then
        echo "YAML file '$yaml_file' not found in folder '$folder'. Skipping."
        continue
    fi

    if ! grep -q "^project:" "$yaml_file"; then
        echo "Error: no top-level 'project:' in '$yaml_file'. Skipping."
        continue
    fi

    if [ ! -f "$pdf_file" ]; then
        echo "Error: '$pdf_file' not found. Build the PDF first. Skipping."
        continue
    fi

    # Get the number of pages in the PDF using pdftk
    num_pages=$(pdftk "$pdf_file" dump_data | grep NumberOfPages | awk '{print $2}')

    if [ -z "$num_pages" ]; then
        echo "Error counting pages in $pdf_file."
        continue
    fi

    # Calculate first and last page
    first_page=$current_page
    last_page=$((current_page + num_pages - 1))
    current_page=$((current_page + num_pages))

    echo "Processing $pdf_file in $yaml_file: first_page=$first_page, last_page=$last_page"

    # Insert last_page first so first_page ends up above it
    set_project_key "$yaml_file" last_page "$last_page"
    set_project_key "$yaml_file" first_page "$first_page"

    echo "YAML file '$yaml_file' in folder '$folder' updated successfully!"
done
