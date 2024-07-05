---
title: Building a Framework for Predictive Science
description: |
  Key questions that scientists and engineers typically want to
  address can be formulated in terms of predictive science. Questions such as:
  "How well does my computational model represent
  reality?", "What are the most important
  parameters in the problem?", and "What is the
  best next experiment to perform?" are fundamental in solving
  scientific problems.
abstract: |
  Key questions that scientists and engineers typically want to address
  can be formulated in terms of predictive science. Questions such as:
  "How well does my computational model represent
  reality?", "What are the most important
  parameters in the problem?", and "What is the
  best next experiment to perform?" are fundamental in solving
  scientific problems. 

  mystic is a framework for massively-parallel optimization
  and rigorous sensitivity analysis that enables these motivating questions to
  be addressed quantitatively as global optimization problems. Often realistic
  physics, engineering, and materials models may have hundreds of input
  parameters, hundreds of constraints, and may require execution times of
  seconds or longer. 

  In more extreme cases, realistic models may be multi-scale,
  and require the use of high-performance computing clusters for their
  evaluation. Predictive calculations, formulated as a global optimization over
  a potential surface in design parameter space, may require an already
  prohibitively large simulation to be performed hundreds, if not thousands, of
  times. The need to prepare, schedule, and monitor thousands of model
  evaluations, and dynamically explore and analyze results, is a challenging
  problem that requires a software infrastructure capable of distributing and
  managing computations on large-scale heterogeneous resources. In this paper,
  we present the design behind an optimization framework, and also a framework
  for heterogeneous computing, that when utilized together, can make
  computationally intractable sensitivity and optimization problems much more
  tractable. 

  The optimization framework provides global search algorithms that
  have been extended to parallel, where evaluations of the model can be
  distributed to appropriate large-scale resources, while the optimizer
  centrally manages their interactions and navigates the objective function. New
  methods have been developed for imposing and solving constraints that aid in
  reducing the size and complexity of the optimization problem. Additionally,
  new algorithms have been developed that launch multiple optimizers in
  parallel, thus allowing highly efficient local search algorithms to provide
  fast global optimization. 

  In this way, parallelism in optimization also can
  allow us to not only find global minima, but to simultaneously find all local
  minima and transition points -- thus providing a much more efficient means
  of mapping out a potential energy surface.
---
