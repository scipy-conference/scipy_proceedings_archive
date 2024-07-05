---
title: "Case study: Real-world machine learning application for hardware failure
  detection"
description: When designing microprocessors, engineers must verify whether the
  proposed design, defined in hardware description language, does what is
  intended. During this verification process, engineers run simulation tests and
  can fix bugs if the tests have failed.
abstract: When designing microprocessors, engineers must verify whether the
  proposed design, defined in hardware description language, does what is
  intended. During this verification process, engineers run simulation tests and
  can fix bugs if the tests have failed. Due to the complexity of the design,
  the baseline approach is to provide random stimuli to verify random parts of
  the design. However, this method is time-consuming and redundant especially
  when the design becomes mature and thus failure rate is low. To increase
  efficiency and detect failures faster, it is possible to train machine
  learning models by using previously run tests, and assess the likelihood of
  failure of new test candidates before running them. This way, instead of
  running random tests agnostically, engineers use the model prediction on a new
  set of test candidates and run a subset of them (i.e.,
  \textquotedbl{}filtering\textquotedbl{} the tests) that are more likely to
  fail. Due to the severe imbalance (1\% failure rate), I trained an ensemble of
  supervised (classification) and unsupervised (outlier detection) models and
  used the union of the prediction from both models to catch more failures. The
  tool has been deployed in an internal high performance computing (HPC) cluster
  early this year, as a complementary workflow which does not interfere with the
  existing workflow. After the deployment, I found performance instability in
  post-deployment performance and ran various experiments to address the issue,
  such as by identifying the effect of the randomness in the test generation
  process. In addition to introducing the relatively new data-driven approach in
  hardware design verification, this study also discusses the details of
  post-deployment evaluation such as retraining, and working around real-world
  constraints, which are sometimes not discussed in machine learning and data
  science research.
---

