---
title: Automation of Inertial Fusion Target Design with Python
description: The process of tuning an inertial confinement fusion pulse shape to
  a specific target design is highly iterative process. When done manually, each
  iteration has large latency and is consequently time consuming.
abstract: The process of tuning an inertial confinement fusion pulse shape to a
  specific target design is highly iterative process. When done manually, each
  iteration has large latency and is consequently time consuming. We have
  developed several techniques that can be used to automate much of the pulse
  tuning process and significantly accelerate the tuning process by removing the
  human induced latency. The automated data analysis techniques require
  specialized diagnostics to run within the simulation. To facilitate these
  techniques, we have embedded a loosely coupled Python interpreter within a
  pre-existing radiation-hydrodynamics code, Hydra. To automate the tuning
  process we use numerical optimization techniques and construct objective
  functions to identify tuned parameters.
---

