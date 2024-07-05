---
title: "PyRSB: Portable Performance on Multithreaded Sparse BLAS Operations"
description: This article introduces PyRSB, a Python interface to the LIBRSB
  library. LIBRSB is a portable performance library offering so called Sparse
  BLAS (Sparse Basic Linear Algebra Subprograms) operations for modern multicore
  CPUs.
abstract: This article introduces PyRSB, a Python interface to the LIBRSB
  library. LIBRSB is a portable performance library offering so called Sparse
  BLAS (Sparse Basic Linear Algebra Subprograms) operations for modern multicore
  CPUs. It is based on the Recursive Sparse Blocks (RSB) format, which is
  particularly well suited for matrices of large dimensions. PyRSB allows LIBRSB
  usage with an interface styled after that of SciPy's sparse matrix classes,
  and offers the extra benefit of exploiting multicore parallelism. This article
  introduces the concepts behind the RSB format and LIBRSB, and illustrates
  usage of PyRSB. It concludes with a user-oriented overview of speedup
  advantage of rsb\_matrix over scipy.sparse.csr\_matrix running general sparse
  matrix-matrix multiplication on a modern shared-memory computer.
---

