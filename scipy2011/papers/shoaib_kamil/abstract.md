---
title: Bringing Parallel Performance to Python with Domain-Specific Selective
  Embedded Just-in-Time Specialization
description: Today's productivity programmers, such as scientists who need to
  write code to do science, are typically forced to choose between productive
  and maintainable code with modest performance (e.g. Python plus native
  libraries such as SciPy SciPy) or complex, brittle, hardware-specific code
  that entangles application logic with performance concerns but runs two to
  three orders of magnitude faster (e.
abstract: >-
  Today's productivity programmers, such as scientists who need to write code to
  do science, are typically forced to choose between productive and maintainable
  code with modest performance (e.g. Python plus native libraries such as SciPy
  SciPy) or complex, brittle, hardware-specific code that entangles application
  logic with performance concerns but runs two to three orders of magnitude
  faster (e.g. C++ with OpenMP, CUDA, etc.). The dynamic features of modern
  productivity languages like Python enable an alternative approach that bridges
  the gap between productivity and performance. SEJITS (Selective, Embedded,
  Just-in-Time Specialization) embeds domain-specific languages (DSLs) in
  high-level languages like Python for popular computational kernels such as
  stencils, matrix algebra, and others. At runtime, the DSLs are
  "compiled" by combining expert-provided source
  code templates specific to each problem type, plus a strategy for optimizing
  an abstract syntax tree representing a domain-specific but
  language-independent representation of the problem instance. The result is
  efficiency-level (e.g. C, C++) code callable from Python whose performance
  equals or exceeds that of handcrafted code, plus performance portability by
  allowing multiple code generation strategies within the same specializer to
  target different hardware present at runtime, e.g. multicore CPUs vs. GPUs.
  Application writers never leave the Python world, and we do not assume any
  modification or support for parallelism in Python itself.


  We present Asp ("Asp is SEJITS for Python") and
  initial results from several domains. We demonstrate that domain-specific
  specializers allow highly-productive Python code to obtain performance meeting
  or exceeding expert-crafted low-level code on parallel hardware, without
  sacrificing maintainability or portability.
---
