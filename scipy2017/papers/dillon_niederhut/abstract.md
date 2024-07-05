---
title: Software Transactional Memory in Pure Python
description: There has been a growing interest in programming models for
  concurrency. Strategies for dealing with shared data amongst parallel threads
  of execution include immutable (as in Erlang) and locked (as in Python) data
  structures.
abstract: There has been a growing interest in programming models for
  concurrency. Strategies for dealing with shared data amongst parallel threads
  of execution include immutable (as in Erlang) and locked (as in Python) data
  structures. A third option exists, called transactional memory (as in
  Haskell), which includes thread-local journaling for operations on objects
  which are both mutable and globally shared. Here, we present `TraM`, a pure
  Python implementation of the TL2 algorithm for software transactional memory.
---
