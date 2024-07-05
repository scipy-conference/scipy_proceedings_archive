---
title: Real-Time Digital Signal Processing Using `pyaudio_helper` and the ipywidgets
description: The focus of this paper is on teaching real-time digital signal
  processing to electrical and computer engineers using the Jupyter notebook and
  the code module `pyaudio_helper`, which is a component of the package
  scikit-dsp-comm.
abstract: The focus of this paper is on teaching real-time digital signal
  processing to electrical and computer engineers using the Jupyter notebook and
  the code module `pyaudio_helper`, which is a component of the package
  scikit-dsp-comm. Specifically, we show how easy it is to design, prototype,
  and test using PC-based instrumentation, real-time DSP algorithms for
  processing analog signal inputs and returning analog signal outputs, all
  within the Jupyter notebook. A key feature is that real-time algorithm
  prototyping is simplified by configuring a few attributes of a `DSP_io_stream`
  object from the `pyaudio_helper` module, leaving the developer to focus on the
  real-time DSP code contained in a callback function, using a template notebook
  cell. Real-time control of running code is provided by ipywidgets. The
  PC-based instrumentation aspect allows measurement of the analog input/output
  (I/O) to be captured, stored in text files, and then read back into the
  notebook to compare with the original design expectations via matplotlib
  plots. In a typical application slider widgets are used to change variables in
  the callback. One and two channel audio applications as well as algorithms for
  complex signal (in-phase/quadrature) waveforms, as found in software-defined
  radio, can also be developed. The analog I/O devices that can be interfaced
  are both internal and via USB external sound interfaces. The sampling rate,
  and hence the bandwidth of the signal that can be processed, is limited by the
  operating system audio subsystem capabilities, but is at least 48 KHz and
  often 96 kHz.
---
