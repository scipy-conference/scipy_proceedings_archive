---
title: "PySPH: A Python Framework for Smoothed Particle Hydrodynamics"
description: PySPH is a Python-based open source parallel framework for Smoothed
  Particle Hydrodynamics (SPH) simulations. It is distributed under a BSD
  license. The performance critical parts are implemented in Cython.
abstract: >-
  PySPH is a Python-based open source parallel framework for Smoothed Particle
  Hydrodynamics (SPH) simulations. It is distributed under a BSD license. The
  performance critical parts are implemented in Cython. The framework provides a
  load balanced, parallel execution of solvers. It is designed to be easy to
  extend. In this paper we describe the architecture of PySPH and how it can be
  used.


  At it's core PySPH provides a particle kernel, an SPH kernel and a solver
  framework. Serial and parallel versions of solvers for some standard problems
  are also provided. The parallel solver uses mpi4py. We employ a simple but
  elegant automatic load balancing strategy for the parallelization. Currently,
  we are able to perform free surface simulations and some gas dynamics
  simulations. PySPH is still a work in progress and we will discuss our future
  plans for the project.
---

