---
title: 'Sherpa: 1D/2D modeling and fitting in Python'
abstract: |
  Sherpa is a modern, general purpose fitting and modeling application
  available in Python.  It contains a set of robust optimization methods
  that are critical to the forward fitting technique used in parametric
  data modeling.  The Python implementation provides a powerful software
  package that is flexible and extensible with direct access to all
  internal data objects.  Sherpa affords a highly proficient scientific
  working environment required by the challenges of modern data
  analysis.  It is implemented as a set of Python modules with
  computationally-intensive portions written in C++/FORTRAN as extension
  modules using the Python C-API.  It also provides a high level user
  interface with command-like functions in addition to the classes and
  functions at the API level.  Sherpa is being developed by the Chandra
  X-ray Center (CXC) and is packaged with the Chandra data analysis
  software package (CIAO).  Sherpa can also be built as a standalone
  application; it can be extended by the user, or embedded in other
  applications.  It allows for analysis specific to astronomy, but also
  supports generic modeling and fitting tasks. The 'astro' module
  includes additional astronomy model functions, FITS image support,
  instrument models, and utilities.  Sherpa's model library includes
  some commonly used 1D and 2D functions and most of the X-ray spectral
  models found in the High Energy Astrophysics Science Archive Research
  Center (HEASARC) XSPEC application.  Sherpa also supports user-defined
  models written in Python, C++, and FORTRAN, allowing users to
  extend Sherpa with models not included in our model library.  Sherpa
  has a set of optimization methods including LMDIF, implementations of
  Differential Evolution (Monte Carlo) and Nelder-Mead simplex. These
  functions minimize differences between data points and model values
  (as measured by a fit statistic such as the chi-squared, maximum
  likelihood, or a user-defined statistic).  The generic I/O module
  includes back-end interfaces to read ASCII files using NumPy and
  astronomy image files (FITS) using PyFITS or CIAO Crates (CXC
  Data Model library in C++).  Sherpa is general enough to fit and model
  data from a variety of astronomical observatories (e.g., Chandra,
  ROSAT, Hubble) and over many wavebands (e.g., X-ray, optical, radio).
  In fact, Sherpa can fit and model any data set that can be represented
  as collections of 1D or 2D arrays (and can be extended for data of
  higher dimensionality).  Data sets can also be simulated with noise
  using any model.  The visualization module also allows for multiple
  back-ends. An interface to Matplotlib and CIAO ChIPS (CXC plotting
  package layered on VTK in C++) are provided for line and histogram
  plotting.  2D visualization is supported by the Smithsonian
  Astrophysical Observatory (SAO) imager, DS9.  The Sherpa command line
  uses a configured version of IPython to provide a high level shell
  with IPython 'magic' and readline support.
---