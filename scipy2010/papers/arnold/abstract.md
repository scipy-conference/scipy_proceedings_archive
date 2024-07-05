---
title: "Divisi: Learning from Semantic Networks and Sparse SVD"
description: Singular value decomposition (SVD) is a powerful technique for
  finding similarities and patterns in large data sets. SVD has applications in
  text analysis, bioinformatics, and recommender systems, and in particular was
  used in many of the top entries to the Netflix Challenge.
abstract: >-
  Singular value decomposition (SVD) is a powerful technique for finding
  similarities and patterns in large data sets. SVD has applications in text
  analysis, bioinformatics, and recommender systems, and in particular was used
  in many of the top entries to the Netflix Challenge. It can also help
  generalize and learn from knowledge represented in a sparse semantic network.


  Although this operation is fundamental to many fields, it requires a
  significant investment of effort to compute an SVD from sparse data using
  Python tools. Divisi is an answer to this: it combines NumPy, PySparse, and an
  extension module wrapping SVDLIBC, to make Lanczos' algorithm for sparse SVD
  easily usable within cross-platform Python code.


  Divisi includes utilities for working with data in a variety of sparse
  formats, including semantic networks represented as edge lists or NetworkX
  graphs. It augments its matrices with labels, allowing you to keep track of
  the meaning of your data as it passes through the SVD, and it can export the
  labeled data in a format suitable for separate visualization GUIs.
---

