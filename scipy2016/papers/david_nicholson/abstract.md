---
title: Comparison of machine learning methods applied to birdsong element
  classification
description: Songbirds provide neuroscience with a model system for
  understanding how the brain learns and produces a motor skill similar to
  speech. Much like humans, songbirds learn their vocalizations from social
  interactions during a critical period in development.
abstract: |
  Songbirds provide neuroscience with a model system for understanding
  how the brain learns and produces a motor skill similar to speech. Much like
  humans, songbirds learn their vocalizations from social interactions during a
  critical period in development. Each bird’s song consists of repeated elements
  referred to as “syllables”. To analyze song, scientists label syllables by
  hand, but a bird can produce hundreds of songs a day, many more than can be
  labeled. Several groups have applied machine learning algorithms to automate
  labeling of syllables, but little work has been done comparing these various
  algorithms. For example, there are articles that propose using support vector
  machines (SVM), K-nearest neighbors (k-NN), and even deep learning to automate
  labeling song of the Bengalese Finch (a species whose behavior has made it the
  subject of an increasing number of neuroscience studies).

  This paper compares
  algorithms for classifying Bengalese Finch syllables (building on [previous
  work](https://youtu.be/ghgniK4X\_Js)). Using a standard cross-validation
  approach, classifiers were trained on syllables from a given bird, and then
  classifier accuracy was measured with large hand-labeled testing datasets for
  that bird. The results suggest that both k-NN and SVM with a non-linear kernel
  achieve higher accuracy than a previously published linear SVM method.
  Experiments also demonstrate that the accuracy of linear SVM is impaired by
  "intro syllables", a low-amplitude high-noise
  syllable found in all Bengalese Finch songs. Testing of machine learning
  algorithms was carried out using `scikit-learn` and `numpy`/`scipy` via Anaconda.
  Figures from this paper in Jupyter notebook form, as well as code and links to
  data, are here: https://github.com/NickleDave/ML-comparison-birdsong
---
