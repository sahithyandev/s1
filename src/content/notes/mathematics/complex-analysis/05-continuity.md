---
title: Continuity
slug: mathematics/complex-analysis/continuity
sidebar:
  order: 5
prev: true
next: true
---

$f(z)$ is continuous at $z_0$ **iff**:

```math
\lim_\limits{z\to z_0} f(z) = f(z_0)
```

```math
\iff
\forall{\epsilon>0}\;
\exists{\delta>0}\;
\forall{x}\;
\big(\,|z-z_0|<\delta\implies{\lvert f(z)-f(z_0)\rvert<\epsilon}\,\big)
```

### Conditions

For $f$ to be continuous on $z_0$, all these conditions are required.

- $f$ is defined at $z_0$
- $\lim_\limits{z\to z_0} f(z)$ exists
- $\lim_\limits{z\to z_0} f(z) = f(z_0)$

## Properties

If $f,g$ are continuous at $z_0$, these functions are also continuous at $z_0$:

- $\text{Re}(f)$
- $\text{Im}(f)$
- $\lvert f \rvert$
- $f\pm g$
- $fg$
- $\frac{f}{g}$ where $g\neq 0$
- $f(g(z))$
