---
title: 'PyHRF: A Python Library for the Analysis of fMRI Data Based on Local
  Estimation of the Hemodynamic Response Function'
description: Functional Magnetic Resonance Imaging (fMRI) is a neuroimaging
  technique that allows the non-invasive study of brain function. It is based on
  the hemodynamic variations induced by changes in cerebral synaptic activity
  following sensory or cognitive stimulation.
abstract: >-
  Functional Magnetic Resonance Imaging (fMRI) is a neuroimaging technique that
  allows the non-invasive study of brain function. It is based on the
  hemodynamic variations induced by changes in cerebral synaptic activity
  following sensory or cognitive stimulation. The measured signal depends on the
  variation of blood oxygenation level (BOLD signal) which is related to brain
  activity: a decrease in deoxyhemoglobin concentration induces an increase in
  BOLD signal. The BOLD signal is delayed with respect to changes in synaptic
  activity, which can be modeled as a convolution with the Hemodynamic Response
  Function (HRF) whose exact form is unknown and fluctuates with various
  parameters such as age, brain region or physiological conditions.


  In this paper we present `PyHRF`, a software to analyze fMRI data using a Joint
  Detection-Estimation (JDE) approach. It jointly detects cortical activation
  and estimates the HRF. In contrast to existing tools, `PyHRF` estimates the HRF
  instead of considering it as a given constant in the entire brain. Here, we
  present an overview of the package and showcase its performance with a real
  case in order to demonstrate that `PyHRF` is a suitable tool for clinical
  applications.
---
