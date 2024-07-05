---
title: Better and faster hyperparameter optimization with Dask
description: Nearly every machine learning model requires hyperparameters,
  parameters that the user must specify before training begins and influence
  model performance. Finding the optimal set of hyperparameters is often a time-
  and resource-consuming process.
abstract: Nearly every machine learning model requires hyperparameters,
  parameters that the user must specify before training begins and influence
  model performance. Finding the optimal set of hyperparameters is often a time-
  and resource-consuming process. A recent breakthrough hyperparameter
  optimization algorithm, Hyperband finds high performing hyperparameters with
  minimal training via a principled early stopping scheme for random
  hyperparameter selection li2016hyperband. This paper will provide an intuitive
  introduction to Hyperband and explain the implementation in Dask, a Python
  library that scales Python to larger datasets and more computational
  resources. The implementation makes adjustments to the Hyperband algorithm to
  exploit Dask's capabilities and parallel processing. In experiments, the Dask
  implementation of Hyperband rapidly finds high performing hyperparameters for
  deep learning models.
---

