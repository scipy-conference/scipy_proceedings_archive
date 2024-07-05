---
title: Securing Your Collaborative Jupyter Notebooks in the Cloud using
  Container and Load Balancing Services
description: Jupyter has become the go-to platform for developing data
  applications but data and security concerns, especially when dealing with
  healthcare, have become paramount for many institutions and applications
  dealing with sensitive information.
abstract: Jupyter has become the go-to platform for developing data applications
  but data and security concerns, especially when dealing with healthcare, have
  become paramount for many institutions and applications dealing with sensitive
  information. How then can we continue to enjoy the data analysis and machine
  learning opportunities provided by Jupyter and the Python ecosystem while
  guaranteeing auditable compliance with security and privacy concerns? We will
  describe the architecture and implementation of a cloud based platform based
  on Jupyter that integrates with Amazon Web Services (AWS) and uses
  containerized services without exposing the platform to the vulnerabilities
  present in Kubernetes and JupyterHub. This architecture addresses the HIPAA
  requirements to ensure both security and privacy of data. The architecture
  uses an AWS service to provide JSON Web Tokens (JWT) for authentication as
  well as network control. Furthermore, our architecture enables secure
  collaboration and sharing of Jupyter notebooks. Even though our platform is
  focused on Jupyter notebooks and JupyterLab, it also supports R-Studio and
  bespoke applications that share the same authentication mechanisms. Further,
  the platform can be extended to other cloud services other than AWS.
---

