---
title: Rebuilding the Hubble Exposure Time Calculator
description: An Exposure Time Calculator (ETC) is an invaluable web tool for
  astronomers wishing to submit proposals to use the Hubble Space Telescope
  (HST). It provide a means of estimating how much telescope time will be needed
  to observe a specified source to the required accuracy.
abstract: >-
  An Exposure Time Calculator (ETC) is an invaluable web tool for astronomers
  wishing to submit proposals to use the Hubble Space Telescope (HST). It
  provide a means of estimating how much telescope time will be needed to
  observe a specified source to the required accuracy. The current HST ETC was
  written in Java and has been used for several proposing cycles, but for
  various reasons has become difficult to maintain and keep reliable. Last year
  we decided a complete rewrite—in Python, of course—was needed and began an
  intensive effort to develop a well-tested replacement before the next
  proposing cycle this year.


  This paper will explain what the ETC does and outline the challenges involved
  in developing a new implementation that clearly demonstrates that it gets the
  right answers and meet the needed level of reliability (astronomers get cranky
  when the calculator stops working on the day before the proposal deadline).
  The new ETC must be flexible enough to enable quick updates for new features
  and accommodate changing data about HST instruments. The architecture of the
  new system will allow Python-savvy astronomers to use the calculation engine
  directly for batch processing or science exploration.


  Testing is a very large component of this effort, and we discuss how we use
  existing test cases, as well as new systematic test generators to properly
  explore parameter space for doing test comparisons, and a locally developed
  test management system to monitor and efficiently analyze thousands of complex
  test cases.
---

