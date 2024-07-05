---
title: Harnessing the Power of Scientific Python to Investigate Biogeochemistry
  and Metaproteomes of the Central Pacific Ocean
description: Oceanographic expeditions commonly generate millions of data points
  for various chemical, biological, and physical features, all in different
  formats. Scientific Python tools are extremely useful for synthesizing this
  data to make sense of major trends in the changing ocean environment.
abstract: >-
  Oceanographic expeditions commonly generate millions of data points for
  various chemical, biological, and physical features, all in different formats.
  Scientific Python tools are extremely useful for synthesizing this data to
  make sense of major trends in the changing ocean environment. In this paper,
  we present our application of scientific Python to investigate metaproteome
  data from the oxygen-depleted Central Pacific Ocean. The microbial proteins of
  this region are major drivers of biogeochemical cycles, and represent a living
  proxy of the ancient anoxic ocean. They also provide a look into the
  trajectory of the ocean in the face of rising temperatures, which cause
  deoxygenation. We assessed 103 metaproteome samples collected in the Central
  Pacific Ocean on the 2016 ProteOMZ cruise. This data represents
  ~60,000 identified proteins and over 6 million datapoints, in
  addition to over 6,600 corresponding chemical, physical, and biological
  metadata points.


  An interactive data analysis tool which enables the scientific user to
  visualize and interrogate patterns in these large metaproteomic datasets in
  conjunction with hydrographic features was not previously available. Bench
  scientists who would like to use this oceanographic data to gain insight into
  marine biogeochemical cycles were at a disadvantage as no tool existed to
  query these complex datasets in a visually meaningful way. Our goal was to
  provide a graphical visualization tool to enhance the exploration of these
  complex dataset; specifically, using interactive tools to enable users the
  ability to filter and automatically generate plots from slices of large
  metaproteomic and hydrographic datasets. We developed a [Bokeh](https://bokeh.pydata.org) application
  for data exploration which allows the user to hone in on proteins of
  interest using widgets. The user can then explore relationships between
  protein abundance and water column depth, hydrographic data, and taxonomic
  origin. The result is a complete and interactive visualization tool for
  interrogating a multivariate oceanographic dataset, which helped us to
  demonstrate a strong relationship between chemical, physical, and biological
  variables and the microbial proteins expressed. Because it was impossible to
  display all the proteins at once in the Bokeh application, we additionally
  describe an application of [Holoviews](https://holoviews.org/)/[Datashader](https://datashader.org/) to this
  data, which further highlights the extreme differences between oxygen rich
  surface waters and the oxygen poor mesopelagic. This application can be easily
  adapted to new datasets, and is already proving to be a useful tool for
  exploring patterns in ocean protein abundance.
---
