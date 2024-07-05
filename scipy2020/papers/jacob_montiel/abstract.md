---
title: Learning from evolving data streams
description: Ubiquitous data poses challenges on current machine learning
  systems to store, handle and analyze data at scale. Traditionally, this task
  is tackled by dividing the data into (large) batches. Models are trained on a
  data batch and then used to obtain predictions.
abstract: "Ubiquitous data poses challenges on current machine learning systems
  to store, handle and analyze data at scale. Traditionally, this task is
  tackled by dividing the data into (large) batches. Models are trained on a
  data batch and then used to obtain predictions. As new data becomes available,
  new models are created which may contain previous data or not. This
  training-testing cycle is repeated continuously. Stream learning is an active
  field where the goal is to learn from infinite data streams. This gives rise
  to additional challenges to those found in the traditional batch setting:
  First, data is not stored (it is infinite), thus models are exposed only once
  to single samples of the data, and once processed those samples are not seen
  again. Models shall be ready to provide predictions at any time. Compute
  resources such as memory and time are limited, consequently, they shall be
  carefully managed. The data can drift over time and models shall be able to
  adapt accordingly. This is a key difference with respect to batch learning,
  where data is assumed static and models will fail in the presence of change.
  Model degradation is a side-effect of batch learning in many real-world
  applications requiring additional efforts to address it. This papers provides
  a brief overview of the core concepts of machine learning for data streams and
  describes scikit-multiflow, an open-source Python library specifically created
  for machine learning on data streams. scikit-multiflow is built to serve two
  main purposes: easy to design and run experiments, easy to extend and modify
  existing methods."
---

