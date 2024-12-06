---
title: Cauchy Criterion
slug: mathematics/riemann-integration/cauchy-criterion
sidebar:
  order: 7
next: true
prev: true
---

## Theorem

A bounded function $f:[a, b] \rightarrow R$ is Riemann integrable **iff** for
every $\epsilon > 0$ there exists a partition $P_\epsilon$ of $[a,b]$, such
that:

```math
U(f, Pϵ) − L(f, Pϵ) ≤ \epsilon
```

:::note[Proof Hint]

- To prove $\implies$: consider $L(f)-\frac{\epsilon}{2} \lt L(f;P)$ and
  $U(f;P) \lt U(f)+\frac{\epsilon}{2}$
- To prove $\impliedby$: consider $L(f;P)<L(f)$ and $U(f)<U(f;P)$

:::

:::note

$f:[a,b]\rightarrow\mathbb{R}$ is integrable on $[a,b]$ when:

- The set of points of discontinuity of a bounded function $f$ is finite.
- The set of points of discontinuity of a bounded function $f$ is finite number
  of limit points. (may have infinite number of discontinuities)

In these cases, the discontinuities don't affect the result of the integration.

:::
