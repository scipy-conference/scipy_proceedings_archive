---
title: Composable Multi-Threading for Python Libraries
description: Python is popular among numeric communities that value it for easy
  to use number crunching modules like NumPy, SciPy, Dask, Numba, and many
  others. These modules often use multi-threading for efficient multi-core
  parallelism in order to utilize all the available CPU cores.
abstract: Python is popular among numeric communities that value it for easy to
  use number crunching modules like NumPy, SciPy, Dask, Numba, and many others.
  These modules often use multi-threading for efficient multi-core parallelism
  in order to utilize all the available CPU cores. Nevertheless, their threads
  can interfere with each other leading to overhead and inefficiency if used
  together in one application. The loss of performance can be prevented if all
  the multi-threaded parties are coordinated. This paper describes usage of
  Intel® Threading Building Blocks (Intel® TBB), an open-source cross-platform
  library for multi-core parallelism TBB, as the composability layer for Python
  modules. It helps to unlock additional performance for numeric applications on
  multi-core systems.
---

