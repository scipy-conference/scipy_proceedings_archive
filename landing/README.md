# Site Content for the SciPy Proceedings

This repository is a Curvenote (MyST) site that provides the content around the abstracts and articles posted on https://proceedings.scipy.org.

Pushes to `main` that change this folder run `.github/workflows/landing.yml`, which pushes it as a Curvenote work (key `project.id` in `curvenote.yml`) and sets that work as the landing content of the `scipy` site. It can also be run by hand from the Actions tab. The `CURVENOTE_TOKEN` secret must belong to an account with permission to update the `scipy` site.
