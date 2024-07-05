---
title: "SHADOW: A workflow scheduling algorithm reference and testing framework"
description: As the scale of science projects increase, so does the demand on
  computing infrastructures. The complexity of science processing pipelines, and
  the heterogeneity of the environments on which they are run, continues to
  increase; in order to deal with this, the algorithmic approaches to executing
  these applications must also be adapted and improved to deal with this
  increased complexity.
abstract: As the scale of science projects increase, so does the demand on
  computing infrastructures. The complexity of science processing pipelines, and
  the heterogeneity of the environments on which they are run, continues to
  increase; in order to deal with this, the algorithmic approaches to executing
  these applications must also be adapted and improved to deal with this
  increased complexity. An example of this is workflow scheduling, algorithms
  for which are continually being developed; however, in many systems that are
  used to deploy science workflows for major science projects, the same
  algorithms and heuristics are used for scheduling. We have developed SHADOW, a
  workflow-oriented scheduling algorithm framework built to address an absence
  of open implementations of these common algorithms, and to facilitate the
  development and testing of new algorithms against these 'industry standards'.
  SHADOW has implementations of common scheduling heuristics, with the intention
  of continually updating the framework with heuristics, metaheuristics, and
  mathematical optimisation approaches in the near future. In addition to the
  algorithm implementations, there is also a number of workflow and environment
  generation options, using the companion utility SHADOWGen; this has been
  provided to improve the productivity of algorithm developers in experimenting
  with their new algorithms over a large variety of workflows and computing
  environments. SHADOWGen also has a translation utilities that will convert
  from other formats, like the Pegasus DAX file, into the SHADOW-JSON
  configuration. SHADOW is open-source and uses key SciPy libraries; the
  intention is for the framework to become a reference implementation of
  scheduling algorithms, and provide algorithm designers an opportunity to
  develop and test their own algorithms with the framework. SHADOW code is
  hosted on GitHub at https://github.com/myxie/shadow; documentation for the
  project is available in the repository, as well as at
  https://shadowscheduling.readthedocs.org.
---

