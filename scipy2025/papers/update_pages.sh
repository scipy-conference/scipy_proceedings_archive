#!/bin/bash

# Check for required commands
if ! command -v pdftk &> /dev/null; then
    echo "Error: 'pdftk' is required but it's not installed."
    exit 1
fi

# Usage: ./update_pages.sh <start_page> <directory_path_1> <directory_path_2> ... <directory_path_n>

current_page=$1  # First argument is the start page
shift            # Shift to remove the first argument, so now $@ contains the list of directories

# Iterate over all provided base directories
for BASE_DIR in "$@"; do
    # Check if the base directory exists
    if [ ! -d "$BASE_DIR" ]; then
        echo "Base directory '$BASE_DIR' not found. Skipping."
        continue
    fi

    echo "Processing base directory: $BASE_DIR"

    # Iterate over all subdirectories in the base directory
    for folder in "$BASE_DIR"/; do
        yaml_file="${folder}myst.yml"

        # Check if the YAML file exists in the current folder
        if [ ! -f "$yaml_file" ]; then
            echo "YAML file '$yaml_file' not found in folder '$folder'. Skipping."
            continue
        fi

        # Find PDF files in the current folder
        pdf_files=("$folder"*.pdf)

        # Check if there are no PDFs or multiple PDFs
        if [ ${#pdf_files[@]} -eq 0 ]; then
            echo "No PDF files found in folder '$folder'. Skipping."
            continue
        elif [ ${#pdf_files[@]} -gt 1 ]; then
            echo "Error: Multiple PDF files found in folder '$folder'. Only one PDF is allowed. Skipping."
            continue
        fi

        # Get the single PDF file
        pdf_file="${pdf_files[0]}"

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

        # Update first_page and last_page if they exist in the YAML
        echo "Processing $pdf_file in $yaml_file: first_page=$first_page, last_page=$last_page"

        # Update last_page only if it exists
        if grep -q "last_page:" "$yaml_file"; then
            sed -i.bak "s/last_page: [0-9]*/last_page: $last_page/" $yaml_file
       fi

        # Update first_page only if it exists
        if grep -q "first_page:" "$yaml_file"; then
            sed -i.bak "s/first_page: [0-9]*/first_page: $first_page/" "$yaml_file"
        fi

        echo "YAML file '$yaml_file' in folder '$folder' updated successfully!"
    done
done

