---
title: Leading magnetic fusion energy science into the big-and-fast data lane
description: We present Delta, a Python framework that connects magnetic fusion
  experiments to high-performance computing (HPC) facilities in order leverage
  advanced data analysis for near real-time decisions. Using the ADIOS I/O
  framework, Delta streams measurement data with over 300 MByte/sec from a
  remote experimental site in Korea to Cori, a Cray XC-40 supercomputer at the
  National Energy Energy Research Scientific Computing Centre in California.
abstract: We present Delta, a Python framework that connects magnetic fusion
  experiments to high-performance computing (HPC) facilities in order leverage
  advanced data analysis for near real-time decisions. Using the ADIOS I/O
  framework, Delta streams measurement data with over 300 MByte/sec from a
  remote experimental site in Korea to Cori, a Cray XC-40 supercomputer at the
  National Energy Energy Research Scientific Computing Centre in California.
  There Delta dispatches cython data analysis kernels using an mpi4py
  PoolExecutor in order to perform a spectral data analysis workflow. Internally
  Delta uses queues and worker threads for data communication. With this
  approach we perform a common spectral analysis suite on imaging measurements
  more than 100 times faster than with a single-core implementation.
---

