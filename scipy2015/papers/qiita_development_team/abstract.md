---
title: 'Qiita: report of progress towards an open access microbiome data
  analysis and visualization platform'
description: Advances in sequencing, proteomics, transcriptomics and
  metabolomics are giving us new insights into the microbial world and
  dramatically improving our ability to understand microbial community
  composition and function at high resolution.
abstract: >-
  Advances in sequencing, proteomics, transcriptomics and metabolomics are
  giving us new insights into the microbial world and dramatically improving our
  ability to understand microbial community composition and function at high
  resolution. These new technologies are generating vast amounts of data, even
  from a single study or sample, leading to challenges in storage,
  representation, analysis, and integration of the disparate data types.


  Qiita (https://github.com/biocore/qiita) aims to be the leading platform to
  store, analyze, and share multi-omics data. Qiita is BSD-licensed,
  unit-tested, and adherent to PEP8 style guidelines. New code additions are
  reviewed by multiple developers and tested using Travis CI. This approach
  opens development to the largest possible number of experts in
  "-omics" fields. The heterogeneous data generated
  by these disciplines led us to use a combination of Redis, PostgreSQL, BIOM
  (Atr10), and HDF5 for relational and hierarchical storage. The compute backend
  is provided by IPython’s parallel framework (http://ipython.org/). In
  addition, the project depends on mature Python packages such as Tornado
  (http://www.tornadoweb.org/en/stable/), click (http://click.pocoo.org/4/),
  scipy (http://www.scipy.org), numpy (http://www.numpy.org), and scikit-bio
  (http://scikit-bio.org) among others. Most notably, the analysis pipeline is
  provided by QIIME (http://qiime.org), with EMPeror
  (http://emperor.microbio.me) serving as the visualization platform for
  high-dimensional ordination plots, which can be recolored interactively and
  manipulated using the sample metadata.


  By providing the database and compute resources at http://qiita.microbio.me to
  the global community of microbiome researchers, Qiita alleviates the technical
  burdens, such as familiarity with the command line or access to compute power,
  that are typically limiting for researchers studying microbial ecology, while
  at the same time promoting an open access culture. Because Qiita is entirely
  open source and highly scalable, developers can inspect, customize, and extend
  it to suit their needs regardless of whether it is deployed as a desktop
  application or as a shared resource.
---
