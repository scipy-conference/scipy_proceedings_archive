---
title: Causal Bayesian NetworkX
description: Probabilistic graphical models are useful tools for modeling
  systems governed by probabilistic structure. Bayesian networks are one class
  of probabilistic graphical model that have proven useful for characterizing
  both formal systems and for reasoning with those systems.
abstract: >-
  Probabilistic graphical models are useful tools for modeling systems governed
  by probabilistic structure. Bayesian networks are one class of probabilistic
  graphical model that have proven useful for characterizing both formal systems
  and for reasoning with those systems. Probabilistic dependencies in Bayesian
  networks are graphically expressed in terms of directed links from parents to
  their children. Casual Bayesian networks are a generalization of Bayesian
  networks that allow one to "intervene" and perform
  "graph surgery" — cutting nodes off from their
  parents. Causal theories are a formal framework for generating causal Bayesian
  networks.


  This report provides a brief introduction to the formal tools needed to
  comprehend Bayesian networks, including probability theory and graph theory.
  Then, it describes Bayesian networks and causal Bayesian networks. It
  introduces some of the most basic functionality of the extensive NetworkX
  python package for working with complex graphs and networks networkx. I
  introduce some utilities I have build on top of NetworkX including conditional
  graph enumeration and sampling from discrete valued Bayesian networks encoded
  in NetworkX graphs pacer2015cbnx. I call this Causal Bayesian NetworkX, or
  cbnx. I conclude by introducing a formal framework for generating causal
  Bayesian networks called theory based causal induction griffithst09, out of
  which these utilities emerged. I discuss the background motivations for
  frameworks of this sort, their use in computational cognitive science, and the
  use of computational cognitive science for the machine learning community at
  large.
---
