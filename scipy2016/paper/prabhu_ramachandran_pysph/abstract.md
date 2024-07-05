---
title: 'PySPH: a reproducible and high-performance framework for smoothed
  particle hydrodynamics'
description: Smoothed Particle Hydrodynamics (SPH) is a general purpose
  technique to numerically compute the solutions to partial differential
  equations such as those used to simulate fluid and solid mechanics. The method
  is grid-free and uses particles to discretize the various properties of
  interest (such as density, fluid velocity, pressure etc.
abstract: >-
  Smoothed Particle Hydrodynamics (SPH) is a general purpose technique to
  numerically compute the solutions to partial differential equations such as
  those used to simulate fluid and solid mechanics. The method is grid-free and
  uses particles to discretize the various properties of interest (such as
  density, fluid velocity, pressure etc.). The method is Lagrangian and
  particles are moved with the local velocity.


  PySPH is an open source framework for Smoothed Particle Hydrodynamics. It is
  implemented in a mix of Python and Cython. It is designed to be easy to use on
  multiple platforms, high-performance and support parallel execution. Users
  write pure-Python code and HPC code is generated on the fly, compiled, and
  executed. PySPH supports OpenMP and MPI for distributed computing, in a way
  that is transparent to the user. PySPH is also designed to make it easy to
  perform reproducible research. In this paper we discuss the design and
  implementation of PySPH.
---
