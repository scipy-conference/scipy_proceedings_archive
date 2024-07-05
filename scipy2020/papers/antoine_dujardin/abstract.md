---
title: Fluctuation X-ray Scattering real-time app
description: The Linac Coherent Light Source (LCLS) at the SLAC National
  Accelerator Laboratory is an X-ray Free Electron Laser (X-FEL) facility
  enabling scientists to take snapshots of single macromolecules to study their
  structure and dynamics.
abstract: >-
  The Linac Coherent Light Source (LCLS) at the SLAC National Accelerator
  Laboratory is an X-ray Free Electron Laser (X-FEL) facility enabling
  scientists to take snapshots of single macromolecules to study their structure
  and dynamics. A major LCLS upgrade, LCLS-II, will bring the repetition rate of
  the X-ray source from 120 to 1 million pulses per second and exascale High
  Performance Computing (HPC) capabilities will be required for the data
  analysis to keep up with the future data taking rates.


  We present here a Python application for Fluctuation X-ray Scattering (FXS),
  an emerging technique for analyzing biomolecular structure from the angular
  correlations of FEL diffraction snapshots with one or more particles in the
  beam. This FXS application for experimental data analysis is being developed
  to run on supercomputers in near real-time while an experiment is taking
  place.


  We discuss how we accelerated the most compute intensive parts of the
  application and how we used Pygion, a Python interface for the Legion
  task-based programming model, to parallelize and scale the application.
---

