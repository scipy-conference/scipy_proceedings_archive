---
title: "pyDEM: Global Digital Elevation Model Analysis"
description: Hydrological terrain analysis is important for applications such as
  environmental resource, agriculture, and flood risk management. It is based on
  processing of high-resolution, tiled digital elevation model (DEM) data for
  geographic regions of interest.
abstract: >-
  Hydrological terrain analysis is important for applications such as
  environmental resource, agriculture, and flood risk management. It is based on
  processing of high-resolution, tiled digital elevation model (DEM) data for
  geographic regions of interest. A major challenge in global hydrological
  terrain analysis is addressing cross-tile dependencies that arise from the
  tiled nature of the underlying DEM data, which is too large to hold in memory
  as a single array. We are not aware of existing tools that can accurately and
  efficiently perform global terrain analysis within current memory and
  computational constraints. We solved this problem by implementing a new
  algorithm in Python, which uses a simple but robust file-based locking
  mechanism to coordinate the work flow between an arbitrary number of
  independent processes operating on separate DEM tiles.


  We used this system to analyze the conterminous US’s terrain at 1 arc-second
  resolution in under 3 days on a single compute node, and global terrain at 3
  arc-second resolution in under 4 days. Our solution is implemented and made
  available as pyDEM, an open source Python/Cython library that enables global
  geospatial terrain analysis. We will describe our algorithm for calculating
  various terrain analysis parameters of interest, our file-based locking
  mechanism to coordinate the work between processors, and optimization using
  Cython. We will demonstrate pyDEM on a few example test cases, as well as real
  DEM data.
---

