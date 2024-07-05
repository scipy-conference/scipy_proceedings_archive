---
title: A Programmatic Interface for Particle Plasma Simulation in Python
description: Particle-in-Cell (PIC) simulations are a popular approach to plasma
  physics problems in a variety of applications. These simulations range from
  interactive to very large, and are well suited to parallel architectures, such
  as GPUs.
abstract: "Particle-in-Cell (PIC) simulations are a popular approach to plasma
  physics problems in a variety of applications. These simulations range from
  interactive to very large, and are well suited to parallel architectures, such
  as GPUs. PIC simulations frequently serve as input to other simulations, as a
  part of a larger system. Our project has two goals: facilitate exploitation of
  increasing availability of parallel compute resources in PIC simulation, and
  provide an intuitive and efficient programmatic interface to these
  simulations. We plan to build a modular backend with multiple levels of
  parallelism using tools such as PyCUDA/PyOpenCL and IPython. The modular
  design, following the goals of our Object-Oriented Particle-in-Cell (OOPIC)
  code this is to replace, enables comparison of multiple algorithms and
  approaches. On the frontend, we will use a runtime compilation model to
  generate an optimized simulation based on available resources and input
  specification. Maintaining NumPy arrays as the fundamental data structure of
  diagnostics will allow users great flexibility for data analysis, allowing the
  use of many existing powerful tools for Python, as well as the definition of
  arbitrary derivative diagnostics in flight. The general design and preliminary
  performance results with the PyCUDA backend will be presented. This project is
  early in development, and input is welcome."
---

