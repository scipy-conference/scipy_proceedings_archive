---
title: "Circumventing The Linker: Using SciPy's BLAS and LAPACK Within Cython"
description: BLAS, LAPACK, and other libraries like them have formed the
  underpinnings of much of the scientific stack in Python. Until now, the
  standard practice in many packages for using BLAS and LAPACK has been to link
  each Python extension directly against the libraries needed.
abstract: >-
  BLAS, LAPACK, and other libraries like them have formed the underpinnings of
  much of the scientific stack in Python. Until now, the standard practice in
  many packages for using BLAS and LAPACK has been to link each Python extension
  directly against the libraries needed. Each module that calls these low-level
  libraries directly has had to link against them independently. The task of
  finding and linking properly against the correct libraries has, in the past,
  been a substantial obstacle in the development and distribution of Python
  extension modules.


  Cython has existing machinery that allows C-level declarations to be shared
  between Cython-compiled extension modules without linking against the original
  libraries. The Cython BLAS and LAPACK API in SciPy uses this functionality to
  make it so that the same BLAS and LAPACK libraries that were used to compile
  SciPy can be used in Python extension modules via Cython. This paper will
  demonstrate how to create and use these APIs for both Fortran and C libraries
  in a platform-independent manner.
---

