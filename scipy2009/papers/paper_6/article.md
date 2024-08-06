---
title: 'PaPy: Parallel and distributed data-processing pipelines in Python'
abstract: |
  PaPy, which stands for parallel pipelines in Python, is a highly flexible
  framework that enables the construction of robust, scalable workflows for
  either generating or processing voluminous datasets. A workflow is created from
  user-written Python functions (nodes) connected by 'pipes' (edges) into a
  directed acyclic graph. These functions are arbitrarily definable, and can make
  use of any Python modules or external binaries. Given a user-defined topology
  and collection of input data, functions are composed into nested higher-order
  maps, which are transparently and robustly evaluated in parallel on a single
  computer or on remote hosts. Local and remote computational resources can be
  flexibly pooled and assigned to functional nodes, thereby allowing facile
  load-balancing and pipeline optimization to maximimize computational
  throughput. Input items are processed by nodes in parallel, and traverse the
  graph in batches of adjustable size - a trade-off between lazy-evaluation,
  parallelism, and memory consumption. The processing of a single item can be
  parallelized in a scatter/gather scheme. The simplicity and flexibility of
  distributed workflows using PaPy bridges the gap between desktop -> grid,
  enabling this new computing paradigm to be leveraged in the processing of large
  scientific datasets.
---