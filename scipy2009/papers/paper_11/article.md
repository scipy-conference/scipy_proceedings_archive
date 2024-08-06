---
title: 'Nitime: time-series analysis for neuroimaging data'
abstract: |
  Nitime is a library for the analysis of time-series developed as part of the
  Nipy project, an effort to build open-source libraries for neuroimaging
  research. While nitime is developed primarily with neuroimaging data in mind
  (espespecially functional Magnetic Resonance Imaging data), its design is
  generic enough that it should be useful to other fields with experimental
  time-series.  The package starts from a purely functional set of algorithms for
  time-series analysis, including spectral transforms, event-related analysis and
  coherency.  An object-oriented layer is separated into lightweight data
  container objects for the representation of time-series data and high-level
  analyzer objects that couple data storage and algorithms. Each analyzer is
  designed to deal with a particular family of analysis methods and exposes a
  high-level object oriented interface to the underlying numerical algorithms.
  We briefly describe functional neuroimaging and some of the unique
  considerations applicable to time-series analysis of data acquired using these
  techniques, and provide examples of using nitime to analyze both synthetic data
  and real-world neuroimaging time-series.
---