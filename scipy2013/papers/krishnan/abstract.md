---
title: Exploring Collaborative HPC Visualization Workflows using VisIt and Python
description: As High Performance Computing (HPC) environments expand to address
  the larger computational needs of massive simulations and specialized data
  analysis and visualization routines, the complexity of these environments
  brings many challenges for scientists hoping to capture and publish their work
  in a reproducible manner.
abstract: >-
  As High Performance Computing (HPC) environments expand to address the larger
  computational needs of massive simulations and specialized data analysis and
  visualization routines, the complexity of these environments brings many
  challenges for scientists hoping to capture and publish their work in a
  reproducible manner.


  Collaboration using HPC resources is a particularly difficult aspect of the
  research process to capture. This is also the case for HPC visualization, even
  though there has been an explosion of technologies and tools for sharing in
  other contexts.


  Practitioners aiming for reproducibility would benefit from collaboration
  tools in this space that support the ability to automatically capture
  multi-user collaborative interactions. For this work, we modified VisIt, an
  open source scientific visualization platform, to provide an environment aimed
  at addressing these shortcomings.


  This short paper focuses on two exploratory features added to VisIt:


  1. We enhanced VisIt's infrastructure expose a JSON API to clients over
  WebSockets. The new JSON API enables VisIt clients on web-based and mobile
  platforms. This API also enables multi-user collaborative visualization
  sessions. These collaborative visualization sessions can record annotated user
  interactions to Python scripts that can be replayed to reproduce the session
  in the future, thus capturing not only the end product but the step-by-step
  process used to create the visualization.


  2. We have also added support for new Python \& R programmable pipelines which
  allow users to easily execute their analysis scripts within VisIt's parallel
  infrastructure. The goal of this new functionality is to provide users
  familiar with of Python and R with an easier path to embed their analysis
  within VisIt.


  Finally, to showcase how these new features enable reproducible science, we
  present a workflow that demonstrates a Climate Science use case.
---

