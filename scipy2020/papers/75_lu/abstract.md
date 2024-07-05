---
title: Quasi-orthonormal Encoding for Machine Learning Applications
description: Most machine learning models, especially artificial neural
  networks, require numerical, not categorical data. We briefly describe the
  advantages and disadvantages of common encoding schemes. For example, one-hot
  encoding is commonly used for attributes with a few unrelated categories and
  word embeddings for attributes with many related categories (e.
abstract: Most machine learning models, especially artificial neural networks,
  require numerical, not categorical data. We briefly describe the advantages
  and disadvantages of common encoding schemes. For example, one-hot encoding is
  commonly used for attributes with a few unrelated categories and word
  embeddings for attributes with many related categories (e.g., words). Neither
  is suitable for encoding attributes with many unrelated categories, such as
  diagnosis codes in healthcare applications. Application of one-hot encoding
  for diagnosis codes, for example, can result in extremely high dimensionality
  with low sample size problems or artificially induce machine learning
  artifacts, not to mention the explosion of computing resources needed.
  Quasi-orthonormal encoding (QOE) fills the gap. We briefly show how QOE
  compares to one-hot encoding. We provide example code of how to implement QOE
  using popular ML libraries such as Tensorflow and PyTorch and a demonstration
  of QOE to MNIST handwriting samples.
---

