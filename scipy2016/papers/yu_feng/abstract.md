---
title: Launching Python Applications on Peta-scale Massively Parallel Systems
description: We introduce a method to launch Python applications at near native
  speed on large high performance computing systems. The Python run-time and
  other dependencies are bundled and delivered to computing nodes via a
  broadcast operation.
abstract: We introduce a method to launch Python applications at near native
  speed on large high performance computing systems. The Python run-time and
  other dependencies are bundled and delivered to computing nodes via a
  broadcast operation. The interpreter is instructed to use the local version of
  the files on the computing node, removing the shared file system as a
  bottleneck during the application start-up. Our method can be added as a
  preamble to the traditional job script, improving the performance of user
  applications in a non-invasive way. Furthermore, we find it useful to
  implement a three-tier system for the supporting components of an application,
  reducing the overhead of runs during the development phase of an application.
  The method launches applications on Cray XC30 and Cray XT systems up to full
  machine capacity with an overhead of typically less than 2 minutes. We expect
  the method to be portable to similar applications in Julia or R. We also hope
  the three-tier system for the supporting components provides some insight for
  the container based solutions for launching applications in a development
  environment. We provide the full source code of an implementation of the
  method at https://github.com/rainwoodman/python-mpi-bcast. Now that large
  scale Python applications can launch extremely efficiently on state-of-the-art
  super-computing systems, it is time for the high performance computing
  community to seriously consider building complicated computational
  applications at large scale with Python.
---

