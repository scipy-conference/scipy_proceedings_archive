---
title: Fitting Human Decision Making Models using Python
description: A topic of interest in experimental psychology and cognitive
  neuroscience is to understand how humans make decisions. A common approach
  involves using computational models to represent the decision making process,
  and use the model parameters to analyze brain imaging data.
abstract: |
  A topic of interest in experimental psychology and cognitive
  neuroscience is to understand how humans make decisions. A common approach
  involves using computational models to represent the decision making process,
  and use the model parameters to analyze brain imaging data. These
  computational models are based on the Reinforcement Learning (RL) paradigm,
  where an agent learns to make decisions based on the difference between what
  it expects and what it gets each time it interacts with the environment. In
  the typical experimental setup, subjects are presented with a set of options,
  each one associated to different numerical rewards. The task for each subject
  is to learn, by taking a series of sequential actions, which option maximizes
  their total reward. The sequence of actions made by the subject and the
  obtained rewards are used to fit a parametric RL model. The model is fit by
  maximizing the likelihood of the parameters given the experiment data. 

  In this
  work we present a Python implementation of this model fitting procedure. We
  extend the implementation to fit a model of the experimental setup known as
  the "contextual bandit", where the probabilities
  of the outcome change from trial to trial depending on a predictive cue. We
  also developed an artificial agent that can simulate the behavior of a human
  making decisions under the RL paradigm. We use this artificial agent to
  validate the model fitting by comparing the parameters estimated from the data
  with the known agent parameters. We also present the results of a model fitted
  with experimental data.

  We use the standard scientific Python stack
  (NumPy/SciPy) to compute the likelihood function and to find its maximum. The
  code organization allows to easily change the RL model. We also use the
  Seaborn library to create a visualization with the behavior of all the
  subjects. The simulation results validate the correctness of the
  implementation.

  The experimental results shows the usefulness and simplicity
  of the program when working with experimental data. The source code of the
  program is available at https://github.com/aweinstein/FHDMM.
---
