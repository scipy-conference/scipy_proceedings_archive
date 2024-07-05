---
title: "Measuring rainshafts: Bringing Python to bear on remote sensing data"
description: Remote sensing data is complicated, very complicated! It is not
  only geometrically tricky but also, unlike in-situ methods, indirect as the
  sensor measures the interaction of the scattering media (eg raindrops) with
  the probing radiation, not the geophysics.
abstract: "Remote sensing data is complicated, very complicated! It is not only
  geometrically tricky but also, unlike in-situ methods, indirect as the sensor
  measures the interaction of the scattering media (eg raindrops) with the
  probing radiation, not the geophysics. However the problem is made tractable
  by the large number of algorithms available in the Scientific Python
  community. While SciPy provides many helpful algorithms for signal processing
  in this domain, a full software stack from highly specialized file formats
  from specific sensors to interpretable geospatial analysis requires a common
  data model for active remote sensing data that can act as a middle layer This
  paper motivates this work by asking: How big is a rainshaft? What is the
  natural morphology of rainfall patterns and how well is this represented in
  fine scale atmospheric models. Rather than being specific to the domain of
  meteorology, we will break down how we approach this problem in terms of the
  tools used from numerous Python packages to read, correct, map and reduce the
  data into a form better able to answer our science questions. This is a
  \"how\" paper, covering the Python-ARM Radar Toolkit (Py-ART) containing
  signal processing using linear programming methods and mapping using k-d
  trees. We also cover image analysis using SciPy's ndimage sub-module and
  graphics using matplotlib."
---

