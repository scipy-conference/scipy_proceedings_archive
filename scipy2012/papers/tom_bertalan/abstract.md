---
title: "OpenMG: A New Multigrid Implementation in Python"
description: In many large-scale computations, systems of equations arise in the
  form , where is a linear operation to be performed on the unknown data ,
  producing the known right-hand side, , which represents some constraint of
  known or assumed behavior of the system being modeled.
abstract: In many large-scale computations, systems of equations arise in the
  form , where is a linear operation to be performed on the unknown data ,
  producing the known right-hand side, , which represents some constraint of
  known or assumed behavior of the system being modeled. Since such systems can
  be very large, solving them directly can be too slow. In contrast, a multigrid
  solver solves partially at full resolution, and then solves directly only at
  low resolution. This creates a correction vector, which is then interpolated
  to full resolution, where it corrects the partial solution. This project aims
  to create an open-source multigrid solver called OpenMG, written only in
  Python. The existing PyAMG multigrid implementation is a highly versatile,
  configurable, black-box solver, but is difficult to read and modify due to its
  C core. Our proposed OpenMG is a pure Python experimentation environment for
  testing multigrid concepts, not a production solver. By making the code simple
  and modular, we make the algorithmic details clear. We thereby create an
  opportunity for education and experimentation with the partial solver (Jacobi,
  Gauss Seidel, SOR, etc.), the restriction mechanism, the prolongation
  mechanism, and the direct solver, or the use of GPGPUs, multiple CPUs, MPI, or
  grid computing. The resulting solver is tested on an implicit pressure
  reservoir simulation problem with satisfactory results.
---

