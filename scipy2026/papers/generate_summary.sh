#!/bin/bash

# Usage: ./generate_summary.sh <output_file> <directory_path_1> <directory_path_2> ... <directory_path_n>
#
# Writes the table of contents for the preface (title, authors, first page of each paper).
#
# Changes from the 2025 version:
# - Parses YAML with Ruby (built into macOS) instead of grep/sed, so multi-line and quoted
#   titles and names with apostrophes work, and the output is always valid YAML
# - Takes the title from the article the PDF is built from when it sets one (main.md or
#   notebook frontmatter, or \title in LaTeX), like MyST does, falling back to myst.yml

OUTPUT_FILE=$1
shift 1         # Shift to remove the first argument, leaving the paper directories

ruby -E UTF-8:UTF-8 -ryaml - "$OUTPUT_FILE" "$@" <<'RUBY'
require 'json'

def frontmatter(text)
  m = text.match(/\A---\s*\n(.*?)\n---\s*(\n|\z)/m)
  m ? (YAML.safe_load(m[1]) || {}) : {}
end

def article_frontmatter(path)
  return {} unless path && File.file?(path)
  case File.extname(path)
  when '.md'
    frontmatter(File.read(path))
  when '.ipynb'
    cell = JSON.parse(File.read(path))['cells'].find { |c| c['cell_type'] == 'markdown' }
    cell ? frontmatter(Array(cell['source']).join) : {}
  when '.tex'
    # \title[short]{long}: keep the long title
    m = File.read(path).match(/\\title(?:\[[^\]]*\])?\{((?:[^{}]|\{[^{}]*\})*)\}/)
    m ? { 'title' => m[1] } : {}
  else
    {}
  end
end

output_file, *dirs = ARGV
entries = []
dirs.each do |dir|
  yaml_file = File.join(dir, 'myst.yml')
  unless File.file?(yaml_file)
    puts "No myst.yml in '#{dir}'. Skipping."
    next
  end
  project = (YAML.safe_load(File.read(yaml_file)) || {})['project'] || {}
  pdf_export = (project['exports'] || []).find { |e| e['output'].to_s.end_with?('.pdf') } || {}
  article = File.join(dir, pdf_export['article'] || 'main.md')
  page = article_frontmatter(article)

  title = (page['title'] || project['title']).to_s.gsub(/\s+/, ' ').strip
  authors = (page['authors'] || project['authors'] || []).map { |a| a.is_a?(Hash) ? a['name'] : a }.compact
  puts "Warning: no first_page in '#{yaml_file}'" unless project['first_page']

  entry = { 'title' => title }
  entry['author'] = authors.join(', ') unless authors.empty?
  entry['page'] = project['first_page']
  entries << entry
end

File.write(output_file, entries.to_yaml)
puts "Summary file '#{output_file}' generated with #{entries.length} papers"
RUBY
