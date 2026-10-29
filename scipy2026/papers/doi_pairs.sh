#!/bin/bash

# Print "<doi> <url>" pairs on one line for the curvenote/doi "Add or correct DOIs" action.
# Run from scipy2026/papers after the papers and the proceedings article are published:
#
#   bash doi_pairs.sh */ ../proceedings/ | pbcopy
#
# Each DOI points to https://proceedings.scipy.org/articles/<work-uuid>, the work's permanent id
# (unlike its slug). The uuid is found by matching each myst.yml's project.id against the work
# keys in the scipy site's public works listing; a DOI that differs from the one the site
# recorded for that work is reported and left out.

python3 -I - "$@" <<'PYTHON'
import json, re, subprocess, sys

SITE = 'https://scms.curvenote.com/v1/sites/scipy/works?limit=50'
BASE = 'https://proceedings.scipy.org/articles/'

works, url = {}, SITE
while url:
    page = json.loads(subprocess.run(['curl', '-fsSL', '--retry', '3', url],
                                     capture_output=True, text=True, check=True).stdout)
    for work in page.get('items', []):
        works[work.get('key')] = work
    nxt = (page.get('links') or {}).get('next')
    url = nxt if nxt and nxt != url else None

pairs, problems = [], 0
for folder in sys.argv[1:]:
    yaml_file = folder.rstrip('/') + '/myst.yml'
    try:
        text = open(yaml_file).read()
    except FileNotFoundError:
        continue
    doi = re.search(r'^  doi: *[\'"]?(10\.25080/[^\s\'"]+)', text, re.M)
    key = re.search(r'^  id: *[\'"]?([^\s\'"]+)', text, re.M)
    if not doi or not key:
        print(f"No 10.25080 DOI or project.id in '{yaml_file}'. Skipping.", file=sys.stderr)
        continue
    doi, key = doi.group(1), key.group(1)
    work = works.get(key)
    if not work:
        print(f"{yaml_file}: no published work with key '{key}'", file=sys.stderr)
        problems += 1
    elif (work.get('doi') or '').lower() != doi.lower():
        print(f"{yaml_file}: DOI {doi} but the site has {work.get('doi')} for '{key}'", file=sys.stderr)
        problems += 1
    else:
        pairs.append(f"{doi} {BASE}{work['id']}")

print(f"{len(pairs)} DOIs, {problems} problems", file=sys.stderr)
print(' '.join(pairs))
PYTHON
