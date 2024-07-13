---
title: Validating Function Arguments in Python Signal Processing Applications
description: Python does not have a built-in mechanism to validate the value of
  function arguments. This can lead to nonsensical exceptions, unexpected
  behaviour, erroneous results and the like. In the present paper, we define the
  concept of so-called application-driven data types which place a layer of
  abstraction on top of Python data types.
abstract: Python does not have a built-in mechanism to validate the value of
  function arguments. This can lead to nonsensical exceptions, unexpected
  behaviour, erroneous results and the like. In the present paper, we define the
  concept of so-called application-driven data types which place a layer of
  abstraction on top of Python data types. With this concept in mind, we discuss
  the current argument validation solutions of PyDBC, Traitlets and Numtraits,
  MyPy, PyValid, and PyContracts.

  We find that they share the issue of
  expressing the validation scheme in terms of Python objects rather than in
  terms of the data they hold. Consequently, we lay out a suggestion for a
  validation strategy including what qualifies as a validation scheme, how to
  create an interface which promotes both usability and readability, and which
  Python constructs to encourage using for validation encapsulation. A reference
  implementation of the suggested validation strategy is part of the open-source
  Python package, Magni which is thus presented along with a number of examples
  of the usages of this package.
---
