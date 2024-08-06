---
title: High-Performance Code Generation Using CorePy
abstract: |
  Although Python is well-known for its ease of use, it lacks the performance     
  that is often necessary for numerical applications. As a result, libraries     
  like NumPy and SciPy implement their core operations in C for better 
  performance. CorePy represents an alternative approach in which an assembly    
  language is embedded in Python, allowing direct access to the low-level 
  processor architecture. We present the CoreFunc framework, which utilizes
  CorePy to provide an environment for applying element-wise arithmetic
  operations (such as addition) to arrays and achieving high performance while    
  doing so. To evaluate the framework, we develop and experiment with several
  ufunc operations of varying complexity. Our results show that CoreFunc is an 
  excellent tool for accelerating NumPy-based applications.
---