---
title: Using Python to Construct a Scalable Parallel Nonlinear Wave Solver
description: Computational scientists seek to provide efficient, easy-to-use
  tools and frameworks that enable application scientists within a specific
  discipline to build and/or apply numerical models with up-to-date computing
  technologies that can be executed on all available computing systems.
abstract: Computational scientists seek to provide efficient, easy-to-use tools
  and frameworks that enable application scientists within a specific discipline
  to build and/or apply numerical models with up-to-date computing technologies
  that can be executed on all available computing systems. Although many tools
  could be useful for groups beyond a specific application, it is often
  difficult and time consuming to combine existing software, or to adapt it for
  a more general purpose. Python enables a high-level approach where a general
  framework can be supplemented with tools written for different fields and in
  different languages. This is particularly important when a large number of
  tools are necessary, as is the case for high performance scientific codes.
  This motivated our development of PetClaw, a scalable distributed-memory
  solver for time-dependent nonlinear wave propagation, as a case-study for how
  Python can be used as a high-level framework leveraging a multitude of codes,
  efficient both in the reuse of code and programmer productivity. We present
  scaling results for computations on up to four racks of Shaheen, an IBM
  BlueGene/P supercomputer at King Abdullah University of Science and
  Technology. One particularly important issue that PetClaw has faced is the
  overhead associated with dynamic loading leading to catastrophic scaling. We
  use the walla library to solve the issue which does so by supplanting
  high-cost filesystem calls with MPI operations at a low enough level that
  developers may avoid any changes to their codes.
---

