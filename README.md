# SciPy Proceedings Archive

This repository contains archived content from the SciPy proceedings site, including conference metadata, crossref deposit records, and proceedings papers updated for MyST. Original author submissions are still available on branches at https://github.com/scipy-conference/scipy_proceedings

## Cloning only what you need

Every year of proceedings, with its PDFs, lives in this repository, so a full clone is large. Use a partial clone, which downloads file contents only when they are checked out, with a sparse checkout of the folders you work on:

```bash
git clone --filter=blob:none --sparse git@github.com:scipy-conference/scipy_proceedings_archive.git
cd scipy_proceedings_archive
git sparse-checkout add landing scipy2026
```

The clone starts with only the files at the root. Add other years as you need them, for example `git sparse-checkout add scipy2025`, and run `git sparse-checkout list` to see what is checked out.

In a partial clone, commands that read file contents across history or outside the checked-out folders download those files on demand. Commands such as `git log -p`, `git grep <commit>` or `git ls-tree -l` can fetch a lot, so limit them to the paths you need.

## Large File Storage

The 2024 proceedings PDF (`scipy2024/proceedings/proceedings.pdf`) is still stored in [Git LFS](https://git-lfs.com/), because at 106 MB it is over GitHub's 100 MB limit for a regular file. To get it, install `git-lfs` and run `git lfs pull`. All other files are stored directly in git.