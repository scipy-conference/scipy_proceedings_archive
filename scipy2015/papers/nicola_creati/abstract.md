---
title: Geodynamic simulations in HPC with Python
description: The deformation of the Earth surface reflects the action of several
  forces that act inside the planet. To understand how the Earth surface evolves
  complex models must be built to reconcile observations with theoretical
  numerical simulations.
abstract: The deformation of the Earth surface reflects the action of several
  forces that act inside the planet. To understand how the Earth surface evolves
  complex models must be built to reconcile observations with theoretical
  numerical simulations. Starting from a well known numerical methodology
  already used among the geodynamic scientific community, PyGmod has been
  developed from scratch in the last year. The application simulates 2D large
  scale geodynamic processes by solving the conservation equations of mass,
  momentum, and energy by a finite difference method with a marker-in-cell
  technique. Unlike common simulation code written in Fortran or C this code is
  written in Python. The code implements a new approach that takes advantage of
  the hybrid architecture of the latest HPC machines. In PyGmod the standard MPI
  is coupled with a threading architecture to speed up some critical
  computations. Since the OpenMP API cannot be used with Python, threading is
  implemented in Cython. In addition a realtime visualization library has been
  developed to inspect the evolution of the model during the computation.
---

