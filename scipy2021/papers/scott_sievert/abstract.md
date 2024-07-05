---
title: Training machine learning models faster with Dask
description: Machine learning (ML) relies on stochastic algorithms, all of which
  rely on gradient approximations with \textquotedbl{}batch size\textquotedbl{}
  examples. Growing the batch size as the optimization proceeds is a simple and
  usable method to reduce the training time, provided that the number of workers
  grows with the batch size.
abstract: Machine learning (ML) relies on stochastic algorithms, all of which
  rely on gradient approximations with \textquotedbl{}batch size\textquotedbl{}
  examples. Growing the batch size as the optimization proceeds is a simple and
  usable method to reduce the training time, provided that the number of workers
  grows with the batch size. In this work, we provide a package that trains
  PyTorch models on Dask clusters, and can grow the batch size if desired. Our
  simulations indicate that for a particular model that uses GPUs for a popular
  image classification task, the training time can be reduced from about 120
  minutes with standard SGD to 45 minutes with a variable batch size method.
---

