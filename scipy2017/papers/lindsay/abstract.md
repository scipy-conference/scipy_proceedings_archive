---
title: 'FigureFirst: A Layout-first Approach for Scientific Figures'
description: One major reason that Python has been widely adopted as a
  scientific computing platform is the availability of powerful visualization
  libraries. Although these tools facilitate discovery and data exploration,
  they are difficult to use when constructing the sometimes-intricate figures
  required to advance the narrative of a scientific manuscript.
abstract: |
  One major reason that Python has been widely adopted as a scientific
  computing platform is the availability of powerful visualization libraries.
  Although these tools facilitate discovery and data exploration, they are
  difficult to use when constructing the sometimes-intricate figures required to
  advance the narrative of a scientific manuscript. For this reason, figure
  creation often follows an inefficient serial process, where simple
  representations of raw data are constructed in analysis software and then
  imported into desktop publishing software to construct the final figure.

  Though the graphical user interface of publishing software is uniquely
  tailored to the production of publication quality layouts, once the data are
  imported, all edits must be re-applied if the analysis code or underlying
  dataset changes. Here we introduce a new Python package, `FigureFirst`, that
  allows users to design figures and analyze data in a parallel fashion, making
  it easy to generate and continuously update aesthetically pleasing and
  informative figures directly from raw data. To accomplish this, `FigureFirst`
  acts as a bridge between the Scalable Vector Graphics (SVG) format and
  Matplotlib Hunter08 plotting in Python. With `FigureFirst`, the user specifies
  the layout of a figure by drawing a set of rectangles on the page using a
  standard SVG editor such as Inkscape Altert13. In Python, `FigureFirst` uses
  this layout file to generate Matplotlib figures and axes in which the user can
  plot the data. 

  Additionally, `FigureFirst` saves the populated figures back into
  the original SVG layout file. This functionality allows the user to adjust the
  layout in Inkscape, then run the script again, updating the data layers to
  match the new layout. Building on this architecture, we have implemented a
  number of features that make complex tasks remarkably easy including axis
  templates; changing attributes of standard SVG items such as their size,
  shape, color, and text; and an API for adding `JessyInk` `Jagannathan12`
  extensions to `Matplotlib` objects for automatically generating animated slide
  presentations.

  We have used FigureFirst to generate figures for publications
  Lindsay17 and provide code and the layouts for the figures presented in this
  manuscript at our GitHub page: http://flyranch.github.io/figurefirst/.
---
