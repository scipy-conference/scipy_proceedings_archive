---
title: Improving efficiency and repeatability of lake volume estimates using Python
description: With increasing population and water use demands in Texas, accurate
  estimates of lake volumes is a critical part of planning for future water
  supply needs. Lakes are large and surveying them is expensive in terms of
  labor, time and cost.
abstract: With increasing population and water use demands in Texas, accurate
  estimates of lake volumes is a critical part of planning for future water
  supply needs. Lakes are large and surveying them is expensive in terms of
  labor, time and cost. High spatial resolution surveys are prohibitive to
  conduct, hence lake are usually surveyed along widely spaced survey lines.
  While this choice reduces the time spent in field data collection, it
  increases the time required for post processing significantly. Standard
  spatial interpolation techniques available in commercial software are not well
  suited to this problem and a custom procedure was developed using in-house
  Fortran software. This procedure involved difficult to repeat manual
  manipulation of data in graphical user interfaces, visual interpretation of
  data and a laborious manually guided interpolation process. Repeatibility is
  important since volume differences derived from multiple surveys of individual
  reservoirs provides estimates of capacity loss over time due to sedimentation.
  Through python scripts that make use of spatial algorithms and GIS routines
  available within various Python scientific modules, we first streamlined our
  original procedure and then replaced it completely with a new pure python
  implementation. In this paper, we compare the original procedure, the
  streamlined procedure and our new pure python implementation with regard to
  automation, efficiency and repeatability of our lake volumetric estimates.
  Applying these techniques to Lake Texana in Texas, we show that the new pure
  python implementation reduces data post processing time from approximately 90
  man hours to 8 man hours while improving repeatability and maintaining
  accuracy.
---

