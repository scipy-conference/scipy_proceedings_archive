---
title: A High Performance Robot Vision Algorithm Implemented in Python
description: A crucial behavior for assistive robots that operate in
  unstructured domestic settings is the ability to efficiently reconstruct the
  3D geometry of novel objects at run time using no a priori knowledge of the
  object.
abstract: >-
  A crucial behavior for assistive robots that operate in unstructured domestic
  settings is the ability to efficiently reconstruct the 3D geometry of novel
  objects at run time using no a priori knowledge of the object. This geometric
  information is critical for the robot to plan grasping and other manipulation
  maneuvers, and it would be impractical to employ database driven or other
  prior knowledge based schemes since the number and variety of objects that
  system may be tasked to manipulate are large.


  We have developed a robot vision algorithm capable of reconstructing the 3D
  geometry of a novel object using only three images of the object captured from
  a monocular camera in an eye-in-hand configuration. The reconstructions are
  sufficiently accurate approximations such that the system can use the
  recovered model to plan grasping and manipulation maneuvers. The three images
  are captured from disparate locations and the object of interest segmented
  from the background and converted to a silhouette. The three silhouettes are
  used to approximate the surface of the object in the form of a point cloud.
  The accuracy of the approximation is then refined by regressing an 11
  parameter superquadric to the cloud of points. The 11 parameters of the
  recovered superquadric then serve as the model of the object.


  The entire system is implemented in Python and Python related projects. Image
  processing tasks are performed with NumPy arrays making use of Cython for
  performance critical tasks. Camera calibration and image segmentation utilize
  the Python bindings to the OpenCV library which are available in the
  scikits.image project. The non-linear constrained optimization uses the
  fmin\_l\_bfgs\_b algorithm in scipy.optimize. The algorithm was first vetted
  in a simulation environment built on top of Enthought Traits and Mayavi.


  The hardware implementation utilizes the Python OpenOPC project to communicate
  with and control a Kuka KR 6/2 six axis industrial manipulator. Images are
  captured via an Axis 207MW wireless network camera by issuing cgi requests to
  the camera with the urllib2 module. The image data is converted from JPEG to
  RGB raster format with the Python Imaging Library. The core algorithm runs as
  a server on a standalone machine and is accessed using the XML-RPC protocol.
  Not including the time required for the robot to capture the images, the
  entire reconstruction process is executed, on average, in 300 milliseconds.
---

