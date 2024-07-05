---
title: PMDA - Parallel Molecular Dynamics Analysis
description: MDAnalysis is an object-oriented Python library to analyze
  trajectories from molecular dynamics (MD) simulations in many popular formats.
  With the development of highly optimized MD software packages on high
  performance computing (HPC) resources, the size of simulation trajectories is
  growing up to many terabytes in size.
abstract: MDAnalysis is an object-oriented Python library to analyze
  trajectories from molecular dynamics (MD) simulations in many popular formats.
  With the development of highly optimized MD software packages on high
  performance computing (HPC) resources, the size of simulation trajectories is
  growing up to many terabytes in size. However efficient usage of multicore
  architecture is a challenge for MDAnalysis, which does not yet provide a
  standard interface for parallel analysis. To address the challenge, we
  developed PMDA, a Python library that builds upon MDAnalysis to provide
  parallel analysis algorithms. PMDA parallelizes common analysis algorithms in
  MDAnalysis through a task-based approach with the Dask library. We implement a
  simple split-apply-combine scheme for parallel trajectory analysis. The
  trajectory is split into blocks, analysis is performed separately and in
  parallel on each block (\textquotedbl{}apply\textquotedbl{}), then results
  from each block are gathered and combined. PMDA allows one to perform parallel
  trajectory analysis with pre-defined analysis tasks. In addition, it provides
  a common interface that makes it easy to create user-defined parallel analysis
  modules. PMDA supports all schedulers in Dask, and one can run analysis in a
  distributed fashion on HPC machines, ad-hoc clusters, a single multi-core
  workstation or a laptop. We tested the performance of PMDA on single node and
  multiple nodes on a national supercomputer. The results show that
  parallelization improves the performance of trajectory analysis and, depending
  on the analysis task, can cut down time to solution from hours to minutes.
  Although still in alpha stage, it is already used on resources ranging from
  multi-core laptops to XSEDE supercomputers to speed up analysis of molecular
  dynamics trajectories. PMDA is available as open source under the GNU General
  Public License, version 2 and can be easily installed via the pip and conda
  package managers.
---

