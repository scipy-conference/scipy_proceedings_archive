---
title: "White Noise Test: detecting autocorrelation and nonstationarities in
  long time series after ARIMA modeling"
description: Time series analysis has been a dominant technique for assessing
  relations within datasets collected over time and is becoming increasingly
  prevalent in the scientific community; for example, assessing brain networks
  by calculating pairwise correlations of time series generated from different
  areas of the brain.
abstract: Time series analysis has been a dominant technique for assessing
  relations within datasets collected over time and is becoming increasingly
  prevalent in the scientific community; for example, assessing brain networks
  by calculating pairwise correlations of time series generated from different
  areas of the brain. The assessment of these relations relies, in turn, on the
  proper calculation of interactions between time series, which is achieved by
  rendering each individual series stationary and nonautocorrelated (i.e., white
  noise, or to “prewhiten” the series). This ensures that the relations computed
  subsequently are due to the interactions between the series and do not reflect
  internal dependencies of the series themselves. An established method for
  prewhitening time series is to apply an Autoregressive (AR, p) Integrative (I,
  d) Moving Average (MA, q) model (ARIMA) and retain the residuals. To
  diagnostically check whether the model orders (p, d, q) are sufficient, both
  visualization and statistical tests (e.g., Ljung-Box test) of the residuals
  are performed. However, these tests are not robust for high-order models in
  long time series. Additionally, as dataset size increases (i.e., number of
  time series to model) it is not feasible to visually inspect each series
  independently. As a result, there is a need for robust alternatives to
  diagnostic evaluations of ARIMA modeling. Here, we demonstrate how to perform
  ARIMA modeling of long time series using Statsmodels, a library for
  statistical analysis in Python. Then, we present a comprehensive procedure
  (White Noise Test) to detect autocorrelation and nonstationarities in
  prewhitened time series, thereby establishing that the series does not differ
  significantly from white noise. This test was validated using time series
  collected from magnetoencephalography recordings. Overall, our White Noise
  Test provides a robust alternative to diagnostic checks of ARIMA modeling for
  long time series.
---

