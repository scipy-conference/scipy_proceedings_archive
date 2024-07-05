---
title: Cell Tracking in 3D using deep learning segmentations
description: Live-cell imaging is a highly used technique to study cell
  migration and dynamics over time. Although many computational tools have been
  developed during the past years to automatically detect and track cells, they
  are optimized to detect cell nuclei with similar shapes and/or cells not
  clustering together.
abstract: Live-cell imaging is a highly used technique to study cell migration
  and dynamics over time. Although many computational tools have been developed
  during the past years to automatically detect and track cells, they are
  optimized to detect cell nuclei with similar shapes and/or cells not
  clustering together. These existing tools are challenged when tracking
  fluorescently labelled membranes of cells due to cell's irregular shape,
  variability in size and dynamic movement across Z planes making it difficult
  to detect and track them. Here we introduce a detailed analysis pipeline to
  perform segmentation with accurate shape information, combined with
  BTrackmate, a customized codebase of popular ImageJ/Fiji software Trackmate,
  to perform cell tracking inside the tissue of interest. We developed VollSeg,
  a new segmentation method able to detect membrane-labelled cells with low
  signal-to-noise ratio and dense packing. Finally, we also created an interface
  in Napari, an Euler angle based viewer, to visualize the tracks along a chosen
  view making it possible to follow a cell along the plane of motion.
  Importantly, we provide a detailed protocol to implement this pipeline in a
  new dataset, together with the required Jupyter notebooks. Our codes are open
  source available at Github2021.
---

