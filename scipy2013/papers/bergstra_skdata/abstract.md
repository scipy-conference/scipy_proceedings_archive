---
title: "SkData: Data Sets and Algorithm Evaluation Protocols in Python"
description: Machine learning benchmark data sets come in all shapes and sizes,
  whereas classification algorithms assume sanitized input, such as (x, y) pairs
  with vector-valued input x and integer class label y. Researchers and
  practitioners know all too well how tedious it can be to get from the URL of a
  new data set to a NumPy ndarray suitable for e.
abstract: Machine learning benchmark data sets come in all shapes and sizes,
  whereas classification algorithms assume sanitized input, such as (x, y) pairs
  with vector-valued input x and integer class label y. Researchers and
  practitioners know all too well how tedious it can be to get from the URL of a
  new data set to a NumPy ndarray suitable for e.g. pandas or sklearn. The
  SkData library handles that work for a growing number of benchmark data sets
  (small and large) so that one-off in-house scripts for downloading and parsing
  data sets can be replaced with library code that is reliable,
  community-tested, and documented. The SkData library also introduces an
  open-ended formalization of training and testing protocols that facilitates
  direct comparison with published research. This paper describes the usage and
  architecture of the SkData library.
---

