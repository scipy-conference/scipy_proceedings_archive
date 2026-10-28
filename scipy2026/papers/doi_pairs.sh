#!/bin/bash

# Print "<doi> <url>" pairs on one line for the curvenote/doi "Add or correct DOIs" action.
# Run from scipy2026/papers after DOIs are in every myst.yml:
#
#   bash doi_pairs.sh */ ../proceedings/ | pbcopy
#
# Each DOI points to https://proceedings.scipy.org/articles/<suffix>, as in 2025.

pairs=()
for folder in "$@"; do
    yaml_file="${folder%/}/myst.yml"
    [ -f "$yaml_file" ] || continue
    doi=$(grep -m1 "^  doi: 10\.25080/" "$yaml_file" | sed "s/^  doi: //" | tr -d "'\" ")
    if [ -z "$doi" ]; then
        echo "No 10.25080 DOI in '$yaml_file'. Skipping." >&2
        continue
    fi
    pairs+=("$doi https://proceedings.scipy.org/articles/${doi#10.25080/}")
done

echo "${#pairs[@]} DOIs" >&2
echo "${pairs[*]}"
