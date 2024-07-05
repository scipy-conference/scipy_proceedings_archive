---
title: Fitting and Estimating Parameter Confidence Limits with Sherpa
description: Sherpa is a generalized modeling and fitting package. Primarily
  developed for the Chandra Interactive Analysis of Observations (CIAO) package
  by the Chandra X-ray Center, Sherpa provides an Object-Oriented Programming
  (OOP) API for parametric data modeling.
abstract: Sherpa is a generalized modeling and fitting package. Primarily
  developed for the Chandra Interactive Analysis of Observations (CIAO) package
  by the Chandra X-ray Center, Sherpa provides an Object-Oriented Programming
  (OOP) API for parametric data modeling. It is designed to use the forward
  fitting technique to search for the set of best-fit parameter values in
  parametrized model functions. Sherpa can also estimate the confidence limits
  on best-fit parameters using a new confidence method or using an algorithm
  based on Markov chain Monte Carlo (MCMC). Confidence limits on parameter
  values are necessary for any data analysis result, but can be non-trivial to
  compute in a non-linear and multi-parameter space. This new, robust confidence
  method can estimate confidence limits of Sherpa parameters using a finite
  convergence rate. The Sherpa extension module, pyBLoCXS, implements a
  sophisticated Bayesian MCMC-based algorithm for simple single-component
  spectral models defined in Sherpa. pyBLoCXS has primarily been developed in
  Python using high-energy X-ray spectral data. We describe the algorithm
  including the features for defining priors and incorporating deviations in the
  calibration information. We will demonstrate examples of estimating confidence
  limits using the confidence method and processing simulations using pyBLoCXS.
---

