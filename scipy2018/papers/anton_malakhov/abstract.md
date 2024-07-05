---
title: Composable Multi-Threading and Multi-Processing for Numeric Libraries
description: Python is popular among scientific communities that value its
  simplicity and power, especially as it comes along with numeric libraries such
  as NumPy, SciPy, Dask, and Numba. As CPU core counts keep increasing, these
  modules can make use of many cores via multi-threading for efficient
  multi-core parallelism.
abstract: Python is popular among scientific communities that value its
  simplicity and power, especially as it comes along with numeric libraries such
  as NumPy, SciPy, Dask, and Numba. As CPU core counts keep increasing, these
  modules can make use of many cores via multi-threading for efficient
  multi-core parallelism. However, threads can interfere with each other leading
  to overhead and inefficiency if used together in a single application on
  machines with a large number of cores. This performance loss can be prevented
  if all multi-threaded modules are coordinated. This paper continues the work
  started in AMala16 by introducing more approaches to coordination for both
  multi-threading and multi-processing cases. In particular, we investigate the
  use of static settings, limiting the number of simultaneously active OpenMP
  parallel regions, and optional parallelism with Intel® Threading Building
  Blocks (Intel® TBB). We will show how these approaches help to unlock
  additional performance for numeric applications on multi-core systems.
---

