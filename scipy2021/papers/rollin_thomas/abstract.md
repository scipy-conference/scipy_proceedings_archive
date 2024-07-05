---
title: Monitoring Scientific Python Usage on a Supercomputer
description: In 2021, more than 30\% of users at the National Energy Research
  Scientific Computing Center (NERSC) used Python on the Cori supercomputer. To
  determine this we have developed and open-sourced a simple, minimally invasive
  monitoring framework that leverages standard Python features to capture Python
  imports and other job data via a package called
  \textquotedbl{}Customs\textquotedbl{}.
abstract: In 2021, more than 30\% of users at the National Energy Research
  Scientific Computing Center (NERSC) used Python on the Cori supercomputer. To
  determine this we have developed and open-sourced a simple, minimally invasive
  monitoring framework that leverages standard Python features to capture Python
  imports and other job data via a package called
  \textquotedbl{}Customs\textquotedbl{}. To analyze the data we collect via
  Customs, we have developed a Jupyter-based analysis framework designed to be
  interactive, shareable, extensible, and publishable via a dashboard. Our stack
  includes Papermill to execute parameterized notebooks, Dask-cuDF for multi-GPU
  processing, and Voila to render our notebooks as web-based dashboards. We
  report preliminary findings from Customs data collection and analysis. This
  work demonstrates that our monitoring framework can capture insightful and
  actionable data including top Python libraries, preferred user software
  stacks, and correlated libraries, leading to a better understanding of user
  behavior and affording us opportunity to make increasingly data-driven
  decisions regarding Python at NERSC.
---

