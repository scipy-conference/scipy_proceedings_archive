---
title: Practical Applications of Astropy
description: Packages developed under the auspices of the Astropy Project
  (astropy2013, astropy2018) address many common problems faced by astronomers
  in their computational projects. In this paper we describe how capabilities
  provided by Astropy have been employed in two current projects.
abstract: Packages developed under the auspices of the Astropy Project
  ([astropy2013](https://doi.org/10.1051/0004-6361/201322068), [astropy2018](https://doi.org/10.48550/arXiv.1801.02634)) address many common problems faced by astronomers
  in their computational projects. In this paper we describe how capabilities
  provided by Astropy have been employed in two current projects. The data
  system for the Zwicky Transient Facility processes a terabyte of image data
  every night, with a lights-out automated pipeline that produces difference
  images about ten minutes after the receipt of every exposure. Astropy is used
  extensively in the astrometry and light-curve-generation modules, making
  especially heavy use of FITS header manipulation, table I/O, and coordinate
  conversion and matching. The second project is a web application made with
  Plotly Dash for proposal studies for the Origins Space Telescope. The
  astropy.cosmology module provided easy redshifting of our template galaxy
  spectrum, and astropy.units enabled the porting of an instrument sensitivity
  function to Python, with verification that a very complex combination of units
  resulted in a dimensionless signal-to-noise value.
---
