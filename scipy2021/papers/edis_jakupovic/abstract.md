---
title: MPI-parallel Molecular Dynamics Trajectory Analysis with the H5MD Format
  in the MDAnalysis Python Package
description: Molecular dynamics (MD) computer simulations help elucidate details
  of the molecular processes in complex biological systems, from protein
  dynamics to drug discovery. One major issue is that these MD simulation files
  are now commonly terabytes in size, which means analyzing the data from these
  files becomes a painstakingly expensive task.
abstract: "Molecular dynamics (MD) computer simulations help elucidate details
  of the molecular processes in complex biological systems, from protein
  dynamics to drug discovery. One major issue is that these MD simulation files
  are now commonly terabytes in size, which means analyzing the data from these
  files becomes a painstakingly expensive task. In the age of national
  supercomputers, methods of parallel analysis are becoming a necessity for the
  efficient use of time and high performance computing (HPC) resources but for
  any approach to parallel analysis, simply reading the file from disk becomes
  the performance bottleneck that limits overall analysis speed. One promising
  way around this file I/O hurdle is to use a parallel message passing interface
  (MPI) implementation with the HDF5 (Hierarchical Data Format 5) file format to
  access a single file simultaneously with numerous processes on a parallel file
  system. Our previous feasibility study suggested that this combination can
  lead to favorable parallel scaling with hundreds of CPU cores, so we
  implemented a fast and user-friendly HDF5 reader (the H5MDReader class) that
  adheres to H5MD (HDF5 for Molecular Dynamics) specifications. We made
  H5MDReader (together with a H5MD output class H5MDWriter) available in the
  MDAnalysis library, a Python package that simplifies the process of reading
  and writing various popular MD file formats by providing a streamlined
  user-interface that is independent of any specific file format. We benchmarked
  H5MDReader's parallel file reading capabilities on three HPC clusters: ASU
  Agave, SDSC Comet, and PSC Bridges. The benchmark consisted of a simple
  split-apply-combine scheme of an I/O bound task that split a 90k frame (113
  GiB) coordinate trajectory into chunks for processes, where each process
  performed the commonly used RMSD (root mean square distance after optimal
  structural superposition) calculation on their chunk of data, and then
  gathered the results back to the root process. For baseline performance, we
  found maximum I/O speedups at 2 full nodes, with Agave showing 20x, and a
  maximum computation speedup on Comet of 373x on 384 cores (all three HPCs
  scaled well in their computation task). We went on to test a series of
  optimizations attempting to speed up I/O performance, including adjusting file
  system stripe count, implementing a masked array feature that only loads
  relevant data for the computation task, front loading all I/O by loading the
  entire trajectory into memory, and manually adjusting the HDF5 dataset chunk
  shapes. We found the largest improvement in I/O performance by optimizing the
  chunk shape of the HDF5 datasets to match the iterative access pattern of our
  analysis benchmark. With respect to baseline serial performance, our best
  result was a 98x speedup at 112 cores on ASU Agave. In terms of absolute time
  saved, the analysis went from 4623 seconds in the baseline serial run to 47
  seconds in the parallel, properly chunked run. Our results emphasize the fact
  that file I/O is not just dependent on the access pattern of the file, but
  more so the synergy between access pattern and the layout of the file on
  disk."
---

