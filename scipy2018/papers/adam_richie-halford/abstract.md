---
title: "Cloudknot: A Python Library to Run your Existing Code on AWS Batch"
description: We introduce Cloudknot, a software library that simplifies
  cloud-based distributed computing by programmatically executing user-defined
  functions (UDFs) in AWS Batch. It takes as input a Python function, packages
  it as a container, creates all the necessary AWS constituent resources to
  submit jobs, monitors their execution and gathers the results, all from within
  the Python environment.
abstract: We introduce Cloudknot, a software library that simplifies cloud-based
  distributed computing by programmatically executing user-defined functions
  (UDFs) in AWS Batch. It takes as input a Python function, packages it as a
  container, creates all the necessary AWS constituent resources to submit jobs,
  monitors their execution and gathers the results, all from within the Python
  environment. Cloudknot minimizes the cognitive load of learning a new API by
  introducing only one new object and using the familiar map method. It
  overcomes limitations of previous similar libraries, such as Pywren, that runs
  UDFs on AWS Lambda, because most data science workloads exceed the current
  limits of AWS Lambda on execution time, RAM, and local storage.
---

