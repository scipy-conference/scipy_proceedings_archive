---
title: 'Pylira: deconvolution of images in the presence of Poisson noise'
description: |
  All physical and astronomical imaging observations are degraded by the finite angular
  resolution of the camera and telescope systems. The recovery of the true image is limited by
  both how well the instrument characteristics are known and by the magnitude of measurement noise.
numbering:
  equation:
    template: Eq. %s
---

# Abstract

All physical and astronomical imaging observations are degraded by the finite angular
resolution of the camera and telescope systems. The recovery of the true image is limited by
both how well the instrument characteristics are known and by the magnitude of measurement noise.
In the case of a high signal to noise ratio data, the image can be sharpened or “deconvolved” robustly
by using established standard methods such as the Richardson-Lucy method. However, the situation changes
for sparse data and the low signal to noise regime, such as those frequently encountered in
X-ray and gamma-ray astronomy, where deconvolution leads inevitably to an amplification
of noise and poorly reconstructed images. However, the results in this regime can be improved
by making use of physically meaningful prior assumptions and statistically principled
modeling techniques. One proposed method is the LIRA algorithm, which
requires smoothness of the reconstructed image at multiple scales. In this contribution, we
introduce a new python package called _Pylira_, which exposes the original C implementation
of the LIRA algorithm to Python users. We briefly describe the package structure, development
setup and show a Chandra as well as Fermi-LAT analysis example.

# Introduction

Any physical and astronomical imaging process is affected by the limited
angular resolution of the instrument or telescope. In addition, the quality
of the resulting image is also degraded by background or instrumental
measurement noise and non-uniform exposure.
For short wavelengths and associated low intensities
of the signal, the imaging process consists of recording individual photons
(often called "events") originating from a source of interest.
This imaging process is typical for X-ray and gamma-ray telescopes,
but images taken by magnetic resonance imaging or fluorescence microscopy
show Poisson noise too.
For each individual photon, the incident direction, energy
and arrival time is measured. Based on this information, the
event can be binned into two dimensional data structures to
form an actual image.

As a consequence of the low intensities associated to the recording of individual events,
the measured signal follows Poisson statistics. This imposes
a non-linear relationship between the measured signal and true
underlying intensity as well as a coupling of the signal intensity
to the signal variance. Any statistically correct post-processing
or reconstruction method thus requires a careful treatment of
the Poisson nature of the measured image.

To maximise the scientific use of the data, it is often desired
to correct the degradation introduced by the imaging process.
Besides correction for non-uniform exposure and background
noise this also includes the correction for the "blurring"
introduced by the point spread function (PSF) of the
instrument. Where the latter process is often called "deconvolution".
Depending on whether the PSF of the instrument is known or not,
one distinguishes between the "blind deconvolution" and
"non blind deconvolution" process. For astronomical
observations, the PSF can often either be
simulated, given a model of the telescope and detector, or inferred
directly from the data by observing far distant objects,
which appear as a point source to the instrument.

While in other branches of astronomy deconvolution methods are already part
of the standard analysis, such as the CLEAN algorithm for radio data, developed
by {cite}`Hogbom1974`, this is not the case for X-ray and gamma-ray astronomy.
As any deconvolution method aims to enhance small-scale structures in an image,
it becomes increasingly hard to solve for the regime of low signal-to-noise ratio,
where small-scale structures are more affected by noise.

# The Deconvolution Problem

## Basic Statistical Model

Assuming the data in each pixel $d_i$ in the recorded counts image
follows a Poisson distribution, the total likelihood of obtaining the
measured image from a model image of the expected counts $\lambda_i$ with
$N$ pixels is given by:

```{math}
:label: poisson

\mathcal{L}\left( \mathbf{d} | \mathbf{\lambda} \right) = \prod_i^N \frac{{\exp{ - d_i } \lambda_i ^ {d_i}}}{{d_i!}}
```

By taking the logarithm, dropping the constant terms and inverting the sign one can transform the
product into a sum over pixels, which is also often called the _Cash_ {cite:p}`Cash1979`
fit statistics:

```{math}
:label: cash

\mathcal{C}\left(\mathbf{\lambda} | \mathbf{d} \right) = \sum_i^N (\lambda_i - d_i \log{\lambda_i})
```

Where the expected counts $\lambda_i$ are given by the convolution of the true underlying
flux distribution $x_i$ with the PSF $p_k$:

```{math}
:label: simplemodel

\lambda_i = \sum_k x_i p_{i - k}
```

This operation is often called "forward modelling" or "forward folding" with the instrument response.

## Richardson Lucy (RL)

To obtain the most likely value of $\mathbf{x}_n$ given the data, one searches a maximum of the total likelihood
function, or equivalently a of minimum $\mathcal{C}$. This high dimensional optimization problem
can e.g., be solved by a classic gradient descent approach. Assuming the pixels values $x_i$
of the true image as independent parameters, one can take the derivative of {ref}`cash`
with respect to the individual $x_i$. This way one obtains a rule for how to update the
current set of pixels $\mathbf{x}_n$ in each iteration of the optimization:

```{math}
:label: rl

\mathbf{x}_{n + 1}  = \mathbf{x}_{n} -\alpha \cdot \frac{\partial \mathcal{C}\left( \mathbf{d} | \mathbf{x} \right)}{\partial x_i}
```

Where $\alpha$ is a factor to define the step size. This method is in general
equivalent to the gradient descent and backpropagation methods used in modern machine
learning techniques. This basic principle of solving the deconvolution problem for
images with Poisson noise was proposed by {cite}`Richardson1972` and {cite}`Lucy1974`.
Their method, named after the original authors, is often known as the _Richardson & Lucy_ (RL)
method. It was shown by {cite}`Richardson1972` that this converges to a maximum
likelihood solution of {ref}`cash`. A Python implementation of the standard RL method
is available e.g. in the `Scikit-Image` package {cite:p}`skimage`.

Instead of the iterative, gradient descent based optimization it is also possible to sample from
the posterior distribution using a simple Metropolis-Hastings {cite:p}`Hastings1970` approach and uniform
prior. This is demonstrated in one of the _Pylira_ online tutorials ([Introduction to Deconvolution using MCMC Methods](https://pylira.readthedocs.io/en/latest/pylira/user/tutorials/notebooks/mcmc-deconvolution-intro.html)).

## RL Reconstruction Quality

While technically the RL method converges to a maximum likelihood solution, it mostly
still results in poorly restored images, especially if extended emission regions are
present in the image. The problem is illustrated in {ref}`fig-rl` using
a simulated example image. While for a low number of iterations, the RL method
still results in a smooth intensity distribution, the structure of the image
decomposes more and more into a set of point-like sources with growing number
of iterations.

Because of the PSF convolution, an extended emission region
can decompose into multiple nearby point sources and still lead to good model prediction,
when compared with the data. Those almost equally good solutions correspond
to many narrow local minima or "spikes" in the global likelihood surface. Depending
on the start estimate for the reconstructed image $\mathbf{x}$ the RL method will follow
the steepest gradient and converge towards the nearest narrow local minimum.
This problem has been described by multiple authors, such as {cite}`Reeves1994`
and {cite}`Fish95`.

:::{figure} images/richardson-lucy.png
:label: fig-rl

The images show the result of the RL algorithm applied to a simulated example dataset
with varying numbers of iterations. The image in the upper left shows the simulated
counts. Those have been derived from the ground truth (upper mid) by convolving with
a Gaussian PSF of width $\sigma=3~\mathrm{pix}$ and applying Poisson noise to
it. The illustration uses the implementation of the RL algorithm from the `Scikit-Image`
package {cite:p}`skimage`.
:::

## Multi-Scale Prior & LIRA

One solution to this problem was described in {cite}`Esch2004`
and {cite}`Connors2011`. First, the simple forward folded model described
in {ref}`simplemodel` can be extended by taking into account the
non-uniform exposure $e_i$ and an additional known
background component $b_i$:

```{math}
:label: model

\lambda_i = \sum_k \left( e_i \cdot (x_i + b_i) \right) p_{i - k}
```

The background $b_i$ can be more generally understood
as a "baseline" image and thus include known structures,
which are not of interest for the deconvolution process.
E.g., a bright point source to model the core of an AGN
while studying its jets.

Second, the authors proposed to extend the Poisson log-likelihood
function (Equation {ref}`cash`) by a log-prior term that controls the
smoothness of the reconstructed image on multiple spatial scales.
Starting from the full resolution, the image pixels $x_i$ are collected
into 2 by 2 groups $Q_k$. The four pixel values associated with each group
are divided by their sum to obtain a grid of “split proportions”
with respect to the image down-sized by a factor of two along both
axes. This process is repeated using the down sized image with pixel
values equal to the sums over the 2 by 2 groups from the full-resolution
image, and the process continues until the resolution of the image
is only a single pixel, containing the total sum of the full-resolution
image. This multi-scale representation is illustrated in {ref}`ms-levels`.

For each of the 2x2 groups of the re-normalized images
a Dirichlet distribution is introduced as a prior:

```{math}
:label: dirichlet

 \phi_k \propto \mathrm{Dirichlet}(\alpha_k, \alpha_k, \alpha_k, \alpha_k)
```

and multiplied across all 2x2 groups and resolution levels $k$.
For each resolution level a smoothing parameter $\alpha_k$ is introduced.
These hyper-parameters can be interpreted as having an information
content equivalent of adding $\alpha_k$ "hallucinated" counts
in each grouping. This effectively results in a smoothing
of the image at the given resolution level. The distribution
of $\alpha$ values at each resolution level is the further described
by a hyper-prior distribution:

```{math}
:label: hyperprior

 p(\alpha_k) = \exp{(-\delta \alpha^3 / 3)}
```

Resulting in a fully hierarchical Bayesian model. A more complete and
detailed description of the prior definition is given in {cite}`Esch2004`.

:::{figure} images/ms-levels.png
:label: ms-levels

The image illustrates the multi-scale decomposition used in the LIRA prior for
a 4x4 pixels example image. Each quadrant of 2x2 sub-images is labelled with
$Q_N$. The sub-pixels in each quadrant are labelled $\Lambda_{ij}$.
:::

The problem is then solved by using a Gibbs MCMC sampling approach.
After a "burn-in" phase the sampling
process typically reaches convergence and starts sampling from the
posterior distribution. The reconstructed image is then computed as the mean of the
posterior samples. As for each pixel a full distribution of its values is available,
the information can also be used to compute the associated error of the reconstructed
value. This is another main advantage over RL or Maxium A-Postori (MAP) algorithms.

# The Pylira Package

## Dependencies & Development

The _Pylira_ package is a thin Python wrapper around the original _LIRA_ implementation provided by
the authors of {cite}`Connors2011`. The original algorithm was implemented in _C_ and made available
as a package for the _R Language_ {cite:p}`rmath`. Thus the implementation depends on the _RMath_ library,
which is still a required dependency of _Pylira_.
The Python wrapper was built using the _Pybind11_ {cite:p}`pybind11` package, which allows to reduce
the code overhead introduced by the wrapper to a minimum. For the data handling, _Pylira_
relies on _Numpy_ {cite:p}`numpy` arrays for the serialisation to the _FITS_ data format
on _Astropy_ {cite:p}`Astropy2018`. The (interactive)
plotting functionality is achieved via _Matplotlib_ {cite:p}`matplotlib` and _Ipywidgets_ {cite:p}`ipywidgets`,
which are both optional dependencies. _Pylira_ is openly developed on Github at [https://github.com/astrostat/pylira](https://github.com/astrostat/pylira).
It relies on _GitHub Actions_ as a continuous integration service and uses the _Read the Docs_ service
to build and deploy the documentation. The online documentation can be found on [https://pylira.readthedocs.io](https://pylira.readthedocs.io).
_Pylira_ implements a set of unit tests to assure compatibility and reproducibility of the
results with different versions of the dependencies and across different platforms.
As _Pylira_ relies on random sampling for the MCMC process an exact reproducibility
of results is hard to achieve on different platforms; however the agreement of results
is at least guaranteed in the statistical limit of drawing many samples.

## Installation

_Pylira_ is available via the Python package index ([pypi.org](https://pypi.org/project/pylira/)),
currently at version 0.1. As _Pylira_ still depends on the _RMath_ library, it is required to install
this first. So the recommended way to install Pylira is on _MacOS_ is:

```{code-block} bash
:linenos: true

 $ brew install r
 $ pip install pylira
```

On _Linux_ the _RMath_ dependency can be installed using standard package managers. For example on Ubuntu, one would do

```{code-block} bash
:linenos: true

 $ sudo apt-get install r-base-dev r-base r-mathlib
 $ pip install pylira
```

For more detailed instructions see [Pylira installation instructions](https://pylira.readthedocs.io/en/latest/pylira/index.html#installation).

## API & Subpackages

_Pylira_ is structured in multiple sub-packages. The `pylira.src` module contains the original
C implementation and the _Pybind11_ wrapper code. The `pylira.core` sub-package
contains the main Python API, `pylira.utils` includes utility functions for
plotting and serialisation. And `pylira.data` implements multiple pre-defined
datasets for testing and tutorials.

# Analysis Examples

## Simple Point Source

_Pylira_ was designed to offer a simple Python class based user interface,
which allows for a short learning curve of using the package for
users who are familiar with Python in general and more specifically with _Numpy_.
A typical complete usage example of the _Pylira_ package is shown in the
following:

```{code-block} python
:linenos: true

 import numpy as np
 from pylira import LIRADeconvolver
 from pylira.data import point_source_gauss_psf

 # create example dataset
 data = point_source_gauss_psf()

 # define initial flux image
 data["flux_init"] = data["flux"]

 deconvolve = LIRADeconvolver(
     n_iter_max=3_000,
     n_burn_in=500,
     alpha_init=np.ones(5)
 )

 result = deconvolve.run(data=data)

 # plot pixel traces, result shown in Figure 3
 result.plot_pixel_traces_region(
     center_pix=(16, 16), radius_pix=3
 )

 # plot pixel traces, result shown in Figure 4
 result.plot_parameter_traces()

 # finally serialise the result
 result.write("result.fits")
```

The main interface is exposed via the `LIRADeconvolver` class, which takes the configuration of
the algorithm on initialisation. Typical configuration parameters include the total number of
iterations `n_iter_max` and the number of "burn-in" iterations, to be excluded from the
posterior mean computation. The data, represented by a simple Python `dict` data structure,
contains a `"counts"`, `"psf"` and optionally `"exposure"` and `"background"` array.
The dataset is then passed to the `LIRADeconvolver.run()` method to execute the deconvolution.
The result is a `LIRADeconvolverResult` object, which features the possibility to write the
result as a _FITS_ file, as well as to inspect the result with diagnostic plots. The result of
the computation is shown in the left panel of {ref}`diagnosis1`.

## Diagnostic Plots

:::{figure} images/pylira-diagnosis-pixel.pdf
:label: diagnosis1

The curves show the traces of value the pixel of interest for a simulated point source and its neighboring
pixels (see code example). The image on the left shows the posterior mean. The white circle in the image
shows the circular region defining the neighboring pixels. The blue line on the right plot shows the trace
of the pixel of interest. The solid horizontal orange line shows the mean value (excluding burn-in) of the pixel across
all iterations and the shaded orange area the $1~\sigma$ error region. The burn in phase is shown
in transparent blue and ignored while computing the mean. The shaded gray lines show the traces of the
neighboring pixels.
:::

To validate the quality of the results _Pylira_ provides many built-in diagnostic plots.
One of these diagnostic plot is shown in the right panel of {ref}`diagnosis1`. The plot shows the
image sampling trace for a single pixel of interest and its surrounding circular region of interest.
This visualisation allows the user to assess the stability of a small region in the image
e.g. an astronomical point source during the MCMC sampling process. Due to the correlation with
neighbouring pixels, the actual value of a pixel might vary in the sampling process, which appears
as "dips" in the trace of the pixel of interest and anti-correlated "peaks" in the one or mutiple
of the surrounding pixels. In the example a stable state of the pixels of interest
is reached after approximately 1000 iterations. This suggests that the number of burn-in iterations, which
was defined beforehand, should be increased.

:::{figure} images/pylira-diagnosis.pdf
:label: diagnosis2

The curves show the traces of the log posterior
value as well as traces of the values of the prior parameter values. The _SmoothingparamN_ parameters
correspond to the smoothing parameters $\alpha_N$ per multi-scale level. The solid horizontal orange lines show the mean
value, the shaded orange area the $1~\sigma$ error region. The burn in phase is shown transparent and ignored
while estimating the mean.
:::

_Pylira_ relies on an MCMC sampling approach to sample a series of reconstructed images from the posterior
likelihood defined by {ref}`cash`. Along with the sampling, it marginalises over the smoothing
hyper-parameters and optimizes them in the same process. To diagnose the validity of the results it is
important to visualise the sampling traces of both the sampled images as well as hyper-parameters.

{ref}`diagnosis2` shows another typical diagnostic plot created by the code example above.
In a multi-panel figure, the user can inspect the traces of the total log-posterior as well as the
traces of the smoothing parameters. Each panel corresponds to the smoothing hyper parameter
introduced for each level of the multi-scale representation of the reconstructed image.
The figure also shows the mean value along with the $1~\sigma$ error
region. In this case, the algorithm shows stable convergence after a burn-in phase of approximately 200
iterations for the log-posterior as well as all of the multi-scale smoothing parameters.

## Astronomical Analysis Examples

Both in the X-ray as well as in the gamma-ray regime, the Galactic Center is a complex emission
region. It shows point sources, extended sources, as well as underlying diffuse emission and
thus represents a challenge for any astronomical data analysis.

_Chandra_ is a space-based X-ray observatory, which has been in operation since 1999. It consists
of nested cylindrical paraboloid and hyperboloid surfaces, which form an imaging optical system
for X-rays. In the focal plane, it has multiple instruments for different scientific purposes.
This includes a high-resolution camera (HRC) and an Advanced CCD Imaging Spectrometer (ACIS).
The typical angular resolution is 0.5 arcsecond and the covered energy ranges from 0.1 - 10 keV.

{ref}`chandra-gc` shows the result of the _Pylira_ algorithm applied to Chandra data
of the Galactic Center region between 0.5 and 7 keV. The PSF was obtained from simulations
using the _simulate_psf_ tool from the official Chandra science tools _ciao 4.14_ {cite:p}`Fruscione2006`.
The algorithm achieves both an improved spatial resolution as well as a reduced noise
level and higher contrast of the image in the right panel compared to the unprocessed
counts data shown in the left panel.

:::{figure} images/pylira-chandra-gc.pdf
:label: chandra-gc

Pylira applied to Chandra ACIS data of the Galactic Center region, using the observation IDs
_4684_ and _4684_. The image on the left shows the raw observed counts between
0.5 and 7 keV. The image on the right shows the deconvolved version. The LIRA hyperprior
values were chosen as _ms_al_kap1=1, ms_al_kap2=0.02, ms_al_kap3=1_.
No baseline background model was included.
:::

As a second example, we use data from the Fermi Large Area Telescope (LAT). The Fermi-LAT
is a satellite-based imaging gamma-ray detector, which covers an energy range
of 20 MeV to >300 GeV. The angular resolution varies strongly with energy and ranges
from 0.1 to >10 degree [^footnote-1].

{ref}`fermi-gc` shows the result of the _Pylira_ algorithm applied to Fermi-LAT data
above 1 GeV to the region around the Galactic Center. The PSF
was obtained from simulations using the _gtpsf_ tool from the official _Fermitools v2.0.19_ {cite:p}`Fermitools2019`.
First, one can see that the algorithm achieves again a considerable improvement in the spatial resolution
compared to the raw counts. It clearly resolves multiple point sources left to the
bright Galactic Center source.

[^footnote-1]: <https://www.slac.stanford.edu/exp/glast/groups/canda/lat_Performance.htm>

:::{figure} images/pylira-fermi-gc.pdf
:label: fermi-gc

Pylira applied to Fermi-LAT data from the Galactic Center region. The image on
the left shows the raw measured counts between 5 and 1000 GeV. The image on the right
shows the deconvolved version. The LIRA hyperprior values were chosen as
_ms_al_kap1=1, ms_al_kap2=0.02, ms_al_kap3=1_. No baseline background model
was included.
:::

# Summary & Outlook

The _Pylira_ package provides Python wrappers for the LIRA algorithm. It allows the deconvolution of low-counts data
following Poisson statistics using a Bayesian sampling approach and a multi-scale smoothing prior assumption.
The results can be easily written to FITS files and inspected by plotting the trace of the sampling process.
This allows users to check for general convergence as well as pixel to pixel correlations for selected regions of
interest. The package is openly developed on GitHub and includes tests and documentation, such that it can be
maintained and improved in the future, while ensuring consistency of the results. It comes with multiple built-in
test datasets and explanatory tutorials in the form of Jupyter notebooks. Future plans include the support
for parallelisation or distributed computing, more flexible prior definitions and the
possibility to account for systematic errors on the PSF during the sampling process.

# Acknowledgements

This work was conducted under the auspices of the CHASC International Astrostatistics Center.
CHASC is supported by NSF grants DMS-21-13615, DMS-21-13397, and DMS-21-13605; by the UK Engineering
and Physical Sciences Research Council \[EP/W015080/1\]; and by NASA 18-APRA18-0019.
We thank CHASC members for many helpful discussions, especially Xiao-Li Meng and Katy McKeough.
DvD was also supported in part by a Marie-Skodowska-Curie RISE Grant (H2020-MSCA-RISE-2019-873089)
provided by the European Commission.
Aneta Siemiginowska, Vinay Kashyap, and Doug Burke further acknowledge support from NASA
contract to the Chandra X-ray Center NAS8-03060.
