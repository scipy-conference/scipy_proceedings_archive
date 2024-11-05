#!/bin/bash

# Usage: ./generate_summary.sh <output_file> <directory_path_1> <directory_path_2> ... <directory_path_n>

OUTPUT_FILE=$1
shift 1         # Shift to remove the first argument, leaving the base directories

# Initialize the summary output file
echo "" > "$OUTPUT_FILE"

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

        # Extract relevant fields from YAML
        title=$(grep "^ *title:" "$yaml_file" | sed "s/^ *title: //")
        author_names=$(sed -n '/^  authors:/,/^  [a-z]/p' "$yaml_file" | awk '/^ *- name:/ {$1=$2=""; print $0 ", "}' | xargs | sed 's/, *$//')
        first_page=$(grep "^ *first_page:" "$yaml_file" | sed "s/^ *first_page: //")

        # Write to the summary file in the required format
        echo "- title: $title" >> "$OUTPUT_FILE"
        if [ ! -z "$author_names" ]; then
            echo "  author: $author_names" >> "$OUTPUT_FILE"
        fi
        echo "  page: $first_page" >> "$OUTPUT_FILE"
    done
done

echo "Summary file '$OUTPUT_FILE' generated successfully!"

