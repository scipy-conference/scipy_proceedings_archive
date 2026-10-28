# SciPy 2026 proceedings

Build steps for the 25th proceedings, following 2024 and 2025. Run each step on a machine with
`curvenote`, `pdftk` and the crossref-utils CLI.

1. Copy the final papers from the `2026` branch of
   [scipy_proceedings](https://github.com/scipy-conference/scipy_proceedings/tree/2026/papers)
   into `papers/` (one folder per paper, without `myst_template` and `tex_template`).
2. Generate the volume and article DOIs with crossref-utils and fill in `doi:` in each paper's
   `myst.yml`, in `proceedings.yml` (`volume.doi`) and in `proceedings/myst.yml`.
3. Deposit the 4 slide decks to Zenodo with
   [zenodo-utils](https://github.com/continuous-foundation/zenodo-utils)
   (`zenodo deposit --type presentation`, then again with `--publish`) and update
   `proceedings/data/other.json`.
4. In `papers/`, run `bash make_pdfs.sh`. It builds every paper, sets `first_page`/`last_page`
   (alphabetical order, keys are added if missing), rebuilds, builds the preface and joins
   everything into `proceedings/proceedings.pdf`.
5. Generate the Crossref deposit with crossref-utils into `proceedings/data/scipy2026.1.xml`.
6. Register the redirects: in `papers/`, run `bash doi_pairs.sh */ ../proceedings/` and paste the
   output into the **Add or correct DOIs** action of curvenote/doi.
