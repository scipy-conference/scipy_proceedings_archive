---
title: "WrightSim: Using PyCUDA to Simulate Multidimensional Spectra"
description: Nonlinear multidimensional spectroscopy (MDS) is a powerful
  experimental technique used to interrogate complex chemical systems. MDS
  promises to reveal energetics, dynamics, and coupling features of and between
  the many quantum-mechanical states that these systems contain.
abstract: Nonlinear multidimensional spectroscopy (MDS) is a powerful
  experimental technique used to interrogate complex chemical systems. MDS
  promises to reveal energetics, dynamics, and coupling features of and between
  the many quantum-mechanical states that these systems contain. In practice,
  simulation is typically required to connect measured MDS spectra with these
  microscopic physical phenomena. We present an open-source Python package,
  WrightSim, designed to simulate MDS. Numerical integration is used to evolve
  the system as it interacts with several electric fields in the course of a
  multidimensional experiment. This numerical approach allows WrightSim to fully
  account for finite pulse effects that are commonly ignored. WrightSim is made
  up of modules that can be exchanged to accommodate many different experimental
  setups. Simulations are defined through a Python interface that is designed to
  be intuitive for experimentalists and theorists alike. We report several
  algorithmic improvements that make WrightSim faster than previous
  implementations. We demonstrated the effect of parallelizing the simulation,
  both with CPU multiprocessing and GPU (CUDA) multithreading. Taken together,
  algorithmic improvements and parallelization have made WrightSim multiple
  orders of magnitude faster than previous implementations. WrightSim represents
  a large step towards the goal of a fast, accurate, and easy to use general
  purpose simulation package for multidimensional spectroscopy. To our
  knowledge, WrightSim is the first openly licensed software package for these
  kinds of simulations. Potential further improvements are discussed.
---

