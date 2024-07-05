---
title: 'PyTeCK: a Python-based automatic testing package for chemical kinetic models'
description: Combustion simulations require detailed chemical kinetic models to
  predict fuel oxidation, heat release, and pollutant emissions. These models
  are typically validated using qualitative rather than quantitative comparisons
  with limited sets of experimental data.
abstract: Combustion simulations require detailed chemical kinetic models to
  predict fuel oxidation, heat release, and pollutant emissions. These models
  are typically validated using qualitative rather than quantitative comparisons
  with limited sets of experimental data. This work introduces PyTeCK, an
  open-source Python-based package for automatic testing of chemical kinetic
  models. Given a model of interest, PyTeCK automatically parses experimental
  datasets encoded in a YAML format, validates the self-consistency of each
  dataset, and performs simulations for each experimental data point. It then
  reports a quantitative metric of the model's performance, based on the
  discrepancy between experimental and simulated values and weighted by
  experimental variance. The initial version of PyTeCK supports shock tube and
  rapid compression machine experiments that measure autoignition delay.
---
