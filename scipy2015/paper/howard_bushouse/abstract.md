---
title: The James Webb Space Telescope Data Calibration Pipeline
description: The James Webb Space Telescope (JWST) is the successor to the
  Hubble Space Telescope (HST) and is currently expected to be launched in late
  2018. The Space Telescope Science Institute (STScI) is developing the software
  systems that will be used to provide routine calibration of the science data
  received from JWST.
abstract: >-
  The James Webb Space Telescope (JWST) is the successor to the Hubble Space
  Telescope (HST) and is currently expected to be launched in late 2018. The
  Space Telescope Science Institute (STScI) is developing the software systems
  that will be used to provide routine calibration of the science data received
  from JWST. The calibration operations use a processing environment provided by
  a Python module called stpipe that provides many common services to each
  calibration step, relieving step developers from having to implement such
  functionality. The stpipe module provides common configuration handling,
  parameter validation and persistence, and I/O management.


  Individual steps are written as Python classes that can be invoked
  individually from within Python or from the stpipe command line. Any set of
  step classes can be configured into a pipeline, with stpipe handling the flow
  of data between steps. The stpipe environment includes the use of standard
  data models. The data models, defined using json schema, provide a means of
  validating the correct format of the data files presented to the pipeline, as
  well as presenting an abstract interface to isolate the calibration steps from
  details of how the data are stored on disk.
---

