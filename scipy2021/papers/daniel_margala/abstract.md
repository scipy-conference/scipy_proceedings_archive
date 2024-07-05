---
title: Accelerating Spectroscopic Data Processing Using Python and GPUs on NERSC
  Supercomputers
description: The Dark Energy Spectroscopic Instrument (DESI) will create the
  most detailed 3D map of the Universe to date by measuring redshifts in light
  spectra of over 30 million galaxies. The extraction of 1D spectra from 2D
  spectrograph traces in the instrument output is one of the main computational
  bottlenecks of DESI data processing pipeline, which is predominantly
  implemented in Python.
abstract: The Dark Energy Spectroscopic Instrument (DESI) will create the most
  detailed 3D map of the Universe to date by measuring redshifts in light
  spectra of over 30 million galaxies. The extraction of 1D spectra from 2D
  spectrograph traces in the instrument output is one of the main computational
  bottlenecks of DESI data processing pipeline, which is predominantly
  implemented in Python. The new Perlmutter supercomputer system at the National
  Energy Scientific Research and Computing Center (NERSC) will feature over
  6,000 NVIDIA A100 GPUs across 1,500 nodes. The new heterogenous CPU-GPU
  computing capability at NERSC opens the door for improved performance for
  science applications that are able to leverage the high-throughput computation
  enabled by GPUs. We have ported the DESI spectral extraction code to run on
  GPU devices to achieve a 20x improvement in per-node throughput compared to
  the current state of the art on the CPU-only Haswell partition of the Cori
  supercomputer system at NERSC.
---

