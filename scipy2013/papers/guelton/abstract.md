---
title: "Pythran: Enabling Static Optimization of Scientific Python Programs"
description: Pythran is a young open source static compiler that turns modules
  written in a subset of Python into native ones. Based on the fact that
  scientific modules do not rely much on the dynamic features of the language,
  it trades them in favor of powerful, eventually inter procedural,
  optimizations.
abstract: >-
  Pythran is a young open source static compiler that turns modules written in a
  subset of Python into native ones. Based on the fact that scientific modules
  do not rely much on the dynamic features of the language, it trades them in
  favor of powerful, eventually inter procedural, optimizations. These include
  detection of pure functions, temporary allocation removal, constant folding,
  Numpy ufunc fusion and parallelization, explicit thread-level parallelism
  through OpenMP annotations, false variable polymorphism pruning, and automatic
  vector instruction generation such as AVX or SSE.


  In addition to these compilation steps, Pythran provides a C++ runtime library
  that leverages the C++ STL to provide generic containers, and the Numeric
  Template Toolbox (NT2) for Numpy support. It takes advantage of modern C++11
  features such as variadic templates, type inference, move semantics and
  perfect forwarding, as well as classical ones such as expression templates.


  The input code remains compatible with the Python interpreter, and output code
  is generally as efficient as the annotated Cython equivalent, if not more,
  without the backward compatibility loss of Cython. Numpy expressions run
  faster than when compiled with numexpr, without any change of the original
  code.
---

