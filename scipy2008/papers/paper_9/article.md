---
title: How the Large Synoptic Survey Telescope (LSST) is using Python
abstract: >-
  The Large Synoptic Survey Telescope (LSST) is a project to build an 8.4m
  telescope at Cerro Pachon, Chile and survey the entire sky every
  three days starting around 2014.
  The scientific goals of the project range from characterizing the
  population of largish asteroids which are in orbits that could hit the
  Earth to understanding the nature of the dark energy that is causing
  the Universe's expansion to accelerate.
  The application codes, which handle the images coming from the
  telescope and generate catalogs of astronomical sources, are being
  implemented in C++, exported to python using swig. The pipeline
  processing framework allows these python modules to be
  connected together to process data in a parallel environment.
---