---
title: Optimizing Python-Based Spectroscopic Data Processing on NERSC Supercomputers
description: We present a case study of optimizing a Python-based cosmology data
  processing pipeline designed to run in parallel on thousands of cores using
  supercomputers at the National Energy Research Scientific Computing Center
  (NERSC).
abstract: >-
  We present a case study of optimizing a Python-based cosmology data processing
  pipeline designed to run in parallel on thousands of cores using
  supercomputers at the National Energy Research Scientific Computing Center
  (NERSC).


  The goal of the Dark Energy Spectroscopic Instrument (DESI) experiment is to
  better understand dark energy by making the most detailed 3D map of the
  universe to date. Over a five-year period starting this year (2019), around
  1000 CCD frames per night (30 per exposure) will be read out from the
  instrument and transferred to NERSC for processing and analysis on the Cori
  and Perlmutter supercomputers in near-real time. This fast turnaround helps
  DESI monitor survey progress and update the next night's observing schedule.


  The DESI spectroscopic pipeline for processing these data is written almost
  exclusively in Python. Using Python allows DESI scientists to write very
  readable and maintainable scientific code in a relatively short amount of
  time, which is important due to limited DESI developer resources. However, the
  drawback is that Python can be substantially slower than more traditional high
  performance computing languages like C, C++, and Fortran.


  The goal of this work is to improve the performance of DESI's spectroscopic
  data processing pipeline at NERSC while satisfying their productivity
  requirement that the software remain in Python. Within this space we have
  obtained specific (per node-hour) throughput improvements of over 5x and 6x on
  the Cori Haswell and Knights Landing partitions, respectively. Several
  profiling techniques were used to determine potential areas for improvement
  including Python's cProfile and line\_profiler packages, and other tools like
  Intel VTune and Tau. Once we identified expensive kernels, we used the
  following techniques: 1) JIT-compiling hotspots using Numba and 2)
  restructuring the code to lessen the impact of calling expensive functions.
  Additionally, we seriously considered substituting MPI parallelism for Dask, a
  more flexible and robust alternative, but have found that once a code has been
  designed with MPI in mind, it is non-trivial to transition it to another kind
  of parallelism. We will also show initial considerations for transitioning
  DESI spectroscopic extraction to GPUs (coming in the next NERSC system,
  Perlmutter, in 2020).
---

