---
title: Python Coding of Geospatial Processing in Web-based Mapping Applications
description: Python has powerful capabilities for coding elements of Web-based
  mapping applications. This paper highlights examples of analytical geospatial
  processing services that we have implemented for several Open Source-based
  development projects, including the Eastern Interconnection States' Planning
  Council (EISPC) Energy Zones Mapping Tool (http://eispctools.
abstract: Python has powerful capabilities for coding elements of Web-based
  mapping applications. This paper highlights examples of analytical geospatial
  processing services that we have implemented for several Open Source-based
  development projects, including the Eastern Interconnection States' Planning
  Council (EISPC) Energy Zones Mapping Tool (http://eispctools.anl.gov), the
  Solar Energy Environmental Mapper (http://solarmapper.anl.gov), and the
  Ecological Risk Calculator (http://bogi.evs.anl.gov/erc/portal). We used
  common Open Source tools such as GeoServer, PostGIS, GeoExt, and OpenLayers
  for the basic Web-based portal, then added custom analytical tools to support
  more advanced functionality. The analytical processes were implemented as Web
  Processing Services (WPSs) running on PyWPS, a Python implementation of the
  Open Geospatial Consortium (OGC) WPS. For report tools, areas drawn by the
  user in the map interface are submitted to a service that utilizes the spatial
  extensions of PostGIS to generate buffers for use in querying and analyzing
  the underlying data. Python code then post-processes the results and outputs
  JavaScript Object Notation (JSON)-formatted data for rendering. We made use of
  PyWPS's integration with the Geographic Resources Analysis Support System
  (GRASS) to implement flexible, user-adjustable suitability models for several
  renewable energy generation technologies. In this paper, we provide details
  about the processing methods we used within these project examples.
---

