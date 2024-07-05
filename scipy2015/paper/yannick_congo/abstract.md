---
title: Building a Cloud Service for Reproducible Simulation Management
description: The notion of capturing each execution of a script and workflow and
  its associated metadata is enormously appealing and should be at the heart of
  any attempt to make scientific simulations repeatable and reproducible.
abstract: >-
  The notion of capturing each execution of a script and workflow and its
  associated metadata is enormously appealing and should be at the heart of any
  attempt to make scientific simulations repeatable and reproducible.


  Most of the work in the literature focus in the terminology and the approaches
  to acquire those metadata. Those are critical but not enough. Since one of the
  purposes of capturing an execution is to be able to recreate the same
  execution environment as in the original run, there is a great need to
  investigate ways to recreate a similar environment from those metadata and
  also to be able to make them accessible to the community for collaboration.
  The so popular social collaborative pull request mechanism in Github is a
  great example of how cloud infrastructures can bring another layer of public
  collaboration. We think reproducibility could benefit from a cloud social
  collaborative presence because capturing the metadata about a simulation is
  far from being the end game of making it reproducible, repeatable or of any
  use to another scientist that has difficulties to easily get them.


  In this paper we define a reproducibility record atom and the cloud
  infrastructure to support it. We also provide a use case example with the
  event based simulation management tool Sumatra and the container system
  Docker.
---

