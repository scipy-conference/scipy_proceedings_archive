---
title: Protein Folding with Python on Supercomputers
description: Today's supercomputers have hundreds of thousands of compute cores
  and this number is likely to grow. Many of today's algorithms will have to be
  rethought to take advantage of such large systems. New algorithms must provide
  fine grained parallelism and excellent scalability.
abstract: >-
  Today's supercomputers have hundreds of thousands of compute cores and this
  number is likely to grow. Many of today's algorithms will have to be rethought
  to take advantage of such large systems. New algorithms must provide fine
  grained parallelism and excellent scalability. Python offers good support for
  numerical libraries and offers bindings to MPI that can be used to develop
  parallel algorithms for distributed memory machines.


  PySMMP provides bindings to the protein simulation package SMMP. Combined with
  mpi4py, PySMMP can be used to perform parallel tempering simulations of small
  proteins on the supercomputers JUGENE and JuRoPA. In this paper, the
  performance of the Fortran implementation of parallel tempering in SMMP is
  compared with the Python implementation in PySMMP. Both codes use the same
  Fortran code for the calculation of the energy.


  The performance of the implementations is comparable on both machines, but
  some challenges remain before the Python implementation can replace the
  Fortran implementation for all production runs.
---

