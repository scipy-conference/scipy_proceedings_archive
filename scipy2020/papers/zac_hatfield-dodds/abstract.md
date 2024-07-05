---
title: "Falsify your Software: validating scientific code with property-based testing"
description: Where traditional example-based tests check software using
  manually-specified input-output pairs, property-based tests exploit a general
  description of valid inputs and program behaviour to automatically search for
  falsifying examples.
abstract: >-
  Where traditional example-based tests check software using manually-specified
  input-output pairs, property-based tests exploit a general description of
  valid inputs and program behaviour to automatically search for falsifying
  examples. Given that Python has excellent property-based testing tools, such
  tests are often easier to work with and routinely find serious bugs that all
  other techniques have missed.


  I present four categories of properties relevant to most scientific projects,
  demonstrate how each found real bugs in Numpy and Astropy, and propose that
  property-based testing should be adopted more widely across the SciPy
  ecosystem.
---

