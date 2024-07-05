---
title: Dynamic Social Network Modeling of Diffuse Subcellular Morphologies
description: The use of fluorescence microscopy has catalyzed new insights into
  biological function, and spurred the development of quantitative models from
  rich biomedical image datasets. While image processing in some capacity is
  commonplace for extracting and modeling quantitative knowledge from biological
  systems at varying scales, general-purpose approaches for more advanced
  modeling are few.
abstract: "The use of fluorescence microscopy has catalyzed new insights into
  biological function, and spurred the development of quantitative models from
  rich biomedical image datasets. While image processing in some capacity is
  commonplace for extracting and modeling quantitative knowledge from biological
  systems at varying scales, general-purpose approaches for more advanced
  modeling are few. In particular, diffuse organellar morphologies, such as
  mitochondria or actin microtubules, have few if any established spatiotemporal
  modeling strategies, all but discarding critically important sources of signal
  from a biological system. Here, we discuss initial work into building
  spatiotemporal models of diffuse subcellular morphologies, using mitochondrial
  protein patterns of cervical epithelial (HeLa) cells. We leverage principles
  of graph theory and consider the diffuse mitochondrial patterns as a social
  network: a collection of vertices interconnected by weighted and directed
  edges, indicating spatial relationships. By studying the changing topology of
  the social networks over time, we gain a mechanistic understanding of the
  types of stresses imposed on the mitochondria by external stimuli, and can
  relate these effects in terms of graph theoretic quantities such as
  centrality, connectivity, and flow. We demonstrate how the mitochondrial
  pattern can be faithfully represented parametrically using a learned mixture
  of Gaussians, which is then perturbed to match the spatiotemporal evolution of
  the mitochondrial patterns over time. The learned Gaussian components can then
  be converted to graph Laplacians, formally defining a network, and the changes
  in the topology of the Laplacians can yield biologically-meaningful
  interpretations of the evolving morphology. We hope to leverage these
  preliminary results to implement a bioimaging toolbox, using existing open
  source packages in the scientific Python ecosystem (SciPy, NumPy,
  scikit-image, OpenCV), which builds dynamic social network models from time
  series fluorescence images of diffuse subcellular protein patterns. This will
  enable a direct quantitative comparison of network structure over time and
  between cells exposed to different conditions."
---

