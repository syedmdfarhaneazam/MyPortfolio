#!/usr/bin/env bash

START_DIR="${1:-.}"
OUTPUT_FILE="$START_DIR/code.txt"

> "$OUTPUT_FILE"

find "$START_DIR" \
  -type d -name node_modules -prune -o \
  -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.css" -o -name "*.html" \) \
  -print0 | while IFS= read -r -d '' FILE; do
    REL_PATH="${FILE#$START_DIR/}"
    REL_PATH="${REL_PATH#./}"

    echo "<${REL_PATH}>" >> "$OUTPUT_FILE"
    cat "$FILE" >> "$OUTPUT_FILE"
    echo -e "\n" >> "$OUTPUT_FILE"  # blank line separator
  done

printf "Generated %s containing the source of matching files.\n" "$OUTPUT_FILE"

