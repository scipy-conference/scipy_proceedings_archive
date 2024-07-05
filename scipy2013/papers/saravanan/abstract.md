---
title: "GraphTerm: A notebook-like graphical terminal interface for
  collaboration and inline data visualization"
description: The notebook interface, which blends text and graphics, has been in
  use for a number of years in commercial mathematical software and is now
  finding more widespread usage in scientific Python with the availability
  browser-based front-ends like the Sage and IPython notebooks.
abstract: >-
  The notebook interface, which blends text and graphics, has been in use for a
  number of years in commercial mathematical software and is now finding more
  widespread usage in scientific Python with the availability browser-based
  front-ends like the Sage and IPython notebooks. This paper describes a new
  open-source Python project, GraphTerm, that takes a slightly different
  approach to blending text and graphics to create a notebook-like interface.
  Rather than operating at the application level, it works at the unix shell
  level by extending the command line interface to incorporate elements of the
  graphical user interface. The XTerm terminal escape sequences are augmented to
  allow any program to interactively display inline graphics (or other HTML
  content) simply by writing to standard output.


  GraphTerm is designed to be a drop-in replacement for the standard unix
  terminal, with additional features for multiplexing sessions and easy
  deployment in the cloud. The interface aims to be tablet-friendly, with
  features like clickable/tappable directory listings for navigating folders
  etc. The user can switch, as needed, between standard line-at-a-time shell
  mode and the notebook mode, where multiple lines of code are entered in cells,
  allowing for in-place editing and re-execution. Multiple users can share
  terminal sessions for collaborative computing.


  GraphTerm is implemented in Python, using the Tornado web framework for the
  server component and HTML+Javascript for the browser client. This paper
  discusses the architecture and capabilities of GraphTerm, and provides usage
  examples such as inline data visualization using matplotlib and the notebook
  mode.
---

