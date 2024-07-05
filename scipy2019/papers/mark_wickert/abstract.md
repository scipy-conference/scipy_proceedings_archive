---
title: A Real-Time 3D Audio Simulator for Cognitive Hearing Science
description: This paper describes the development of a 3D audio simulator for
  use in cognitive hearing science studies and also for general 3D audio
  experimentation. The framework that the simulator is built upon is
  pyaudio\_helper, which is a module of the package scikit-dsp-comm.
abstract: This paper describes the development of a 3D audio simulator for use
  in cognitive hearing science studies and also for general 3D audio
  experimentation. The framework that the simulator is built upon is
  pyaudio\_helper, which is a module of the package scikit-dsp-comm. The
  simulator runs in a Jupyter notebook and makes use of Jupyter widgets for
  interactive control of audio source positioning in 3D space. 3D audio has
  application in virtual reality and in hearing assistive devices (HAD) research
  and development. At its core the simulator uses digital filters to represent
  the sound pressure wave propagation path from the sound source to each ear
  canal of a human subject. Digital filters of 200 coefficients each for left
  and right ears are stored in a look-up table as a function of azimuth and
  elevation angles of the impinging sound's source.
---

