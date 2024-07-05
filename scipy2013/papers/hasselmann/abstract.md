---
title: Adapted G-mode Clustering Method applied to Asteroid Taxonomy
description: The original G-mode was a clustering method developed by A. I.
  Gavrishin in the late 60's for geochemical classification of rocks, but was
  also applied to asteroid photometry, cosmic rays, lunar sample and planetary
  science spectroscopy data.
abstract: >-
  The original G-mode was a clustering method developed by A. I. Gavrishin in
  the late 60's for geochemical classification of rocks, but was also applied to
  asteroid photometry, cosmic rays, lunar sample and planetary science
  spectroscopy data. In this work, we used an adapted version to classify the
  asteroid photometry from SDSS Moving Objects Catalog. The method works by
  identifying normal distributions in a multidimensional space of variables. The
  identification starts by locating a set of points with smallest mutual
  distance in the sample, which is a problem when data is not planar. Here we
  present a modified version of the G-mode algorithm, which was previously
  written in FORTRAN 77, in Python 2.7 and using NumPy, SciPy and Matplotlib
  packages. The NumPy was used for array and matrix manipulation and Matplotlib
  for plot control. The Scipy had a import role in speeding up G-mode,
  Scipy.spatial.distance.mahalanobis was chosen as distance estimator and
  Numpy.histogramdd was applied to find the initial seeds from which clusters
  are going to evolve. Scipy was also used to quickly produce dendrograms
  showing the distances among clusters.


  Finally, results for Asteroids Taxonomy and tests for different sample sizes
  and implementations are presented.
---

