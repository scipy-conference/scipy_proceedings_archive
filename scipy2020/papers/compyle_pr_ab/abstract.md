---
title: "Compyle: a Python package for parallel computing"
description: Compyle allows users to execute a restricted subset of Python on a
  variety of HPC platforms. It is an embedded domain-specific language (eDSL)
  for parallel computing. It currently supports multi-core execution using
  Cython, and OpenCL and CUDA for GPU devices.
abstract: >-
  Compyle allows users to execute a restricted subset of Python on a variety of
  HPC platforms. It is an embedded domain-specific language (eDSL) for parallel
  computing. It currently supports multi-core execution using Cython, and OpenCL
  and CUDA for GPU devices. Users write code in a restricted subset of Python
  that is automatically transpiled to high-performance Cython or C. Compyle also
  provides a few very general purpose and useful parallel algorithms that allow
  users to write code once and have them run on a variety of HPC platforms.


  In this article, we show how to implement a simple two-dimensional molecular
  dynamics (MD) simulation package in pure Python using Compyle. The result is a
  fully parallel program that is relatively easy to implement and solves a
  non-trivial problem. The code transparently executes on multi-core CPUs and
  GPGPUs allowing simulations with millions of particles. A 3D MD code is also
  provided and compares very favorably with a well known, open source, molecular
  dynamics package.
---

