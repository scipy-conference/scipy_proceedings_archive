---
title: "Awkward Array: JSON-like data, NumPy-like idioms"
description: "NumPy simplifies and accelerates mathematical calculations in
  Python, but only for rectilinear arrays of numbers. Awkward Array provides a
  similar interface for JSON-like data: slicing, masking, broadcasting, and
  performing vectorized math on the attributes of objects, unequal-length nested
  lists (i."
abstract: >-
  NumPy simplifies and accelerates mathematical calculations in Python, but only
  for rectilinear arrays of numbers. Awkward Array provides a similar interface
  for JSON-like data: slicing, masking, broadcasting, and performing vectorized
  math on the attributes of objects, unequal-length nested lists (i.e.
  ragged/jagged arrays), and heterogeneous data types.


  Awkward Arrays are columnar data structures, like (and convertible to/from)
  Apache Arrow, with a focus on manipulation, rather than
  serialization/transport. These arrays can be passed between C++ and Python,
  and they can be used in functions that are JIT-compiled by Numba.


  Development of a GPU backend is in progress, which would allow data analyses
  written in array-programming style to run on GPUs without modification.
---

