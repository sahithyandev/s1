---
title: Known Series
slug: mathematics/real-analysis/known-series
sidebar:
  order: 26
prev: true
next: true
---

These series are helpful when using the direct comparison test or limit
comparison test.

## p-series

Not to be confused with [power series](/mathematics/real-analysis/power-series).

```math
\sum_{k=1}^\infty \frac{1}{k^s}
```

Converges **iff** $s \gt 1$. When $s=1$ the series is called the **harmonic
series**. $ $

This series occurs in the definition of
[Riemann zeta function](/mathematics/real-analysis/riemann-zeta-function).

:::note

When $s=2$, the series converges to $\frac{\pi}{6}$.

:::

## Geometric series

```math
\sum_{k=1}^\infty r^k
```

Converges **iff** $\lvert r \rvert \lt 1$. In that case, it converges to
$\frac{1}{1-r}$.

## Alternating harmonic series

```math
\sum_{k=1}^\infty \frac{(-1)^{k-1}}{k} = \ln 2
```

The above series is conditionally converging.

## Special ones

```math
\sum_{k=1}^\infty \frac{\sin k}{k}\;\text{is converging}
```

Convergence of the above series can be proven using
[Dirichlet's test](/mathematics/real-analysis/convergence-tests/#dirichlets-test).
