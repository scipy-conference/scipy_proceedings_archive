---
title: Multithreaded parallel Python through OpenMP support in Numba
description: A modern CPU delivers performance through parallelism. A program
  that exploits the performance available from a CPU must run in parallel on
  multiple cores. This is usually best done through multithreading.
abstract: A modern CPU delivers performance through parallelism. A program that
  exploits the performance available from a CPU must run in parallel on multiple
  cores. This is usually best done through multithreading. Threads belong to a
  process and share the memory associated with that process. The most popular
  approach for writing multithreaded code is to use directives to tell the
  compiler how to convert code into multithreaded code. The most commonly used
  directive-based API for writing multithreaded code is OpenMP. Python is not
  designed for parallel programming with threads. The GlobalInterpreterLock
  (GIL) prevents multiple threads from simultaneously accessing Python objects.
  This effectively prevents data races and makes Python naturally thread safe.
  Consequently, the GIL prevents parallel programming with multiple threads and
  therefore keeps Python from accessing the full performance from a CPU. In this
  paper, we describe a solution to this problem. We implement OpenMP in Python
  so programmers can easily annotate their code and then let the Numba
  just-in-time (JIT) compiler generate multithreaded, OpenMP code in LLVM,
  thereby bypassing the GIL. We describe this new multithreading system for
  Python and and show that the performance in our early tests is on par with the
  analogous C code.
---

