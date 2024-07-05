---
title: Parallel Analysis in MDAnalysis using the Dask Parallel Computing Library
description: The analysis of biomolecular computer simulations has become a
  challenge because the amount of output data is now routinely in the terabyte
  range. We evaluated if this challenge can be met by a parallel map-reduce
  approach with the Dask parallel computing library for task-graph based
  computing coupled with our MDAnalysis Python library for the analysis of
  molecular dynamics (MD) simulations.
abstract: |
  The analysis of biomolecular computer simulations has become a
  challenge because the amount of output data is now routinely in the terabyte
  range. We evaluated if this challenge can be met by a parallel map-reduce
  approach with the Dask parallel computing library for task-graph based
  computing coupled with our `MDAnalysis` Python library for the analysis of
  molecular dynamics (MD) simulations. We performed a representative performance
  evaluation, taking into account the highly heterogeneous computing environment
  that researchers typically work in together with the diversity of existing
  file formats for MD trajectory data.

  We found that the underlying storage
  system (solid state drives, parallel file systems, or simple spinning platter
  disks) can be a deciding performance factor that leads to data ingestion
  becoming the primary bottleneck in the analysis work flow. However, the choice
  of the data file format can mitigate the effect of the storage system; in
  particular, the commonly used Gromacs XTC trajectory format, which is highly
  compressed, can exhibit strong scaling close to ideal due to trading a
  decrease in global storage access load against an increase in local per-core
  CPU-intensive decompression.

  Scaling was tested on a single node and multiple
  nodes on national and local supercomputing resources as well as typical
  workstations. Although very good strong scaling could be achieved for single
  nodes, good scaling across multiple nodes was hindered by the persistent
  occurrence of "stragglers", tasks that take much
  longer than all other tasks, and whose ultimate cause could not be completely
  ascertained.

  In summary, we show that, due to the focus on high
  interoperability in the scientific Python eco system, it is straightforward to
  implement map-reduce with Dask in MDAnalysis and provide an in-depth analysis
  of the considerations to obtain good parallel performance on HPC resources.
---
