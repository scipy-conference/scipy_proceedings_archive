---
title: "Having your cake and eating it: Exploiting Python for programmer
  productivity and performance on micro-core architectures using ePython"
description: Micro-core architectures combine many simple, low memory, low power
  computing cores together in a single package. These can be used as a
  co-processor or standalone but due to limited on-chip memory and esoteric
  nature of the hardware, writing efficient parallel codes for these chips is
  challenging.
abstract: Micro-core architectures combine many simple, low memory, low power
  computing cores together in a single package. These can be used as a
  co-processor or standalone but due to limited on-chip memory and esoteric
  nature of the hardware, writing efficient parallel codes for these chips is
  challenging. In this paper we discuss our very low memory implementation of
  Python, ePython, supporting the rapid development of parallel Python codes for
  these co-processors. An offload abstraction is introduced, where programmers
  decorate specific functions in their Python code, running under any Python
  interpreter on the host CPU, with the underlying technology then taking care
  of the low level data movement, scheduling and ePython execution on the
  micro-core co-processor. A benchmark solving Laplace's equation for diffusion
  via Jacobi iteration is used to explore the performance of ePython on three
  different micro-core architectures, and introduces work around native
  compilation for micro-cores and the performance advantages that this can
  provide.
---

