---
title: Developing a Start-to-Finish Pipeline for Accelerometer-Based Activity
  Recognition Using Long Short-Term Memory Recurrent Neural Networks
description: Increased prevalence of smartphones and wearable devices has
  facilitated the collection of triaxial accelerometer data for numerous Human
  Activity Recognition (HAR) tasks. Concurrently, advances in the theory and
  implementation of long short-term memory (LSTM) recurrent neural networks
  (RNNs) has made it possible to process this data in its raw form, enabling
  on-device online analysis.
abstract: Increased prevalence of smartphones and wearable devices has
  facilitated the collection of triaxial accelerometer data for numerous Human
  Activity Recognition (HAR) tasks. Concurrently, advances in the theory and
  implementation of long short-term memory (LSTM) recurrent neural networks
  (RNNs) has made it possible to process this data in its raw form, enabling
  on-device online analysis. In this two-part experiment, we have first amassed
  the results from thirty studies and reported their methods and key findings in
  a meta-analysis style review. We then used these findings to guide our
  development of a start-to-finish data analysis pipeline, which we implemented
  on a commonly used open-source dataset in a proof of concept fashion. The
  pipeline addresses the large disparities in model hyperparameter settings and
  ensures the avoidance of potential sources of data leakage that were
  identified in the literature. Our pipeline uses a heuristic-based algorithm to
  tune a baseline LSTM model over an expansive hyperparameter search space and
  trains the model on standardized windowed accelerometer signals alone. We find
  that we outperform other baseline models trained on this data and are able to
  compete with benchmark results from complex models trained on
  higher-dimensional data.
---

