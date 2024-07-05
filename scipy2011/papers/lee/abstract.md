---
title: Hurricane Prediction with Python
description: The National Centers for Environmental Prediction (NCEP) Global
  Forecast System (GFS) is a global spectral model used for aviation weather
  forecast. It produces forecasts of wind speed and direction, temperature,
  humidity and precipitation out to 192 hr every 6 hours over the entire globe.
abstract: The National Centers for Environmental Prediction (NCEP) Global
  Forecast System (GFS) is a global spectral model used for aviation weather
  forecast. It produces forecasts of wind speed and direction, temperature,
  humidity and precipitation out to 192 hr every 6 hours over the entire globe.
  The horizontal resolution in operational version of the GFS is about 25 km.
  Much longer integration of similar global models are run for climate
  applications but with much lower horizontal resolution. Although not
  specifically designed for tropical cyclones, the model solutions contain
  smoothed representations of these storms. One of the challenges in using
  global atmospheric model for hurricane applications is objectively determining
  what is a tropical cyclone, given the three dimensional solutions of
  atmospheric variables. This is especially difficult in the lower resolution
  climate models. To address this issue, without manually selecting features of
  interests, the initial conditions from a low resolution version of the GFS (2
  degree latitude-longitude grid) are examined at 6 hour periods and compared
  with the known positions of tropical cyclones. Several Python modules are used
  to build a prototype model quickly, and the prototype model shows fast and
  accurate prediction with the low resolution GFS data.
---

