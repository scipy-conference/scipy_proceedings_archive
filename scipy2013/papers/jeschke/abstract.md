---
title: "Ginga: an open-source astronomical image viewer and toolkit"
description: "Ginga is a new astronomical image viewer written in Python. It
  uses and inter-operates with several key scientific Python packages: NumPy,
  Astropy, and SciPy. A key differentiator for this image viewer, compared to
  older-generation FITS viewers, is that all the key components are written as
  Python classes, allowing for the first time a powerful FITS image display
  widget to be directly embedded in, and tightly coupled with, Python code."
abstract: >-
  Ginga is a new astronomical image viewer written in Python. It uses and
  inter-operates with several key scientific Python packages: NumPy, Astropy,
  and SciPy. A key differentiator for this image viewer, compared to
  older-generation FITS viewers, is that all the key components are written as
  Python classes, allowing for the first time a powerful FITS image display
  widget to be directly embedded in, and tightly coupled with, Python code.


  We call Ginga a toolkit for programming FITS viewers because it includes a
  choice of base classes for programming custom viewers for two different modern
  widget sets: Gtk and Qt, available on the three common desktop platforms. In
  addition, a reference viewer is included with the source code based on a
  plugin architecture in which the viewer can be extended with plugins scripted
  in Python. The code is released under a BSD license similar to other major
  Python packages and is available on GitHub.


  Ginga has been introduced only recently as a tool to the astronomical
  community, but since SciPy has a developer focus this talk concentrates on
  programming with the Ginga toolkit. We cover two cases: using the bare image
  widget to build custom viewers and writing plugins for the existing
  full-featured Ginga viewer. The talk may be of interest to anyone developing
  code in Python needing to display scientific image (CCD or CMOS) data and
  astronomers interested in Python-based quick look and analysis tools.
---

