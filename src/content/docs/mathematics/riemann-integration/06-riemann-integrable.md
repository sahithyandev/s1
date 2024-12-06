---
title: Riemann Integrable
slug: mathematics/riemann-integration/riemann-integrable
sidebar:
  order: 6
prev: true
next: true
---

A bounded function $f:[a,b]\rightarrow\mathbb{R}$ is Riemann integrable on
$[a,b]$ **iff** $U(f)=L(f)$. In that case, the Riemann integral of $f$ on
$[a,b]$ is denoted by:

```math
\int_{a}^{b}{f(x)\,\text{d}x}
```

## Reimann Integrable or not

| Function                            | Yes or No? | How?                                                                     |
| ----------------------------------- | ---------- | ------------------------------------------------------------------------ |
| Unbounded                           | No         | By definition                                                            |
| Constant                            | Yes        | $\forall P\,\text{(any partition)}\;\; L(f;P)=U(f;P)$                    |
| Monotonically increasing/decreasing | Yes        | Take a partition such that $\Delta{x}<\delta=\frac{\epsilon}{f(b)-f(a)}$ |
| Continuous                          | Yes        | Take a partition such that $\Delta{x}<\delta=\frac{\epsilon}{2(b-a)}$    |
