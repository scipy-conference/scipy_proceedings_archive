---
title: "Theano: A CPU and GPU Math Compiler in Python"
description: Theano is a compiler for mathematical expressions in Python that
  combines the convenience of NumPy's syntax with the speed of optimized native
  machine language. The user composes mathematical expressions in a high-level
  description that mimics NumPy's syntax and semantics, while being statically
  typed and functional (as opposed to imperative).
abstract: Theano is a compiler for mathematical expressions in Python that
  combines the convenience of NumPy's syntax with the speed of optimized native
  machine language. The user composes mathematical expressions in a high-level
  description that mimics NumPy's syntax and semantics, while being statically
  typed and functional (as opposed to imperative). These expressions allow
  Theano to provide symbolic differentiation. Before performing computation,
  Theano optimizes the choice of expressions, translates them into C++ (or CUDA
  for GPU), compiles them into dynamically loaded Python modules, all
  automatically. Common machine learning algorithms implemented with Theano are
  from to faster than competitive alternatives (including those implemented with
  C/C++, NumPy/SciPy and MATLAB) when compiled for the CPU and between and
  faster when compiled for the GPU. This paper illustrates how to use Theano,
  outlines the scope of the compiler, provides benchmarks on both CPU and GPU
  processors, and explains its overall design.
---

