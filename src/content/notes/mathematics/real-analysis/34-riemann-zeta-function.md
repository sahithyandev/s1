---
title: Riemann Zeta Function
slug: mathematics/real-analysis/riemann-zeta-function
sidebar:
  order: 34
next: false
prev: true
---

```math
\zeta(s) = \sum_{k=1}^\infty {\frac{1}{k^s}}
```

Convergence of this function can be derived using
[integral test](/mathematics/real-analysis/convergence-tests/#integral-test).
The above-mentioned series is referred to as
[p-series](/mathematics/real-analysis/known-series/#p-series).

## Extension

The $\zeta$ function can be extended to the set $\mathbb{C}-\set{1}$. $ $

### Ramanujan Sum

```math
\zeta(-1) = -\frac{1}{12}
```

Which is why, it's used as below:

```math
1+2+3+4+5+\dots = -\frac{1}{12}
```

This is known as the Ramanujan sum of the diverging series.

## Riemann Hypothesis

The $\zeta$ function has its zeros only at negative even integers and complex
numbers with real part $\frac{1}{2}$. $ $

One of the most important unsolved problems in mathematics.

## Euler Product formula

```math
\zeta(z)=\prod_{n=1}^\infty
\frac{1}{1-p_n^{-z}}
```

Where $p_n$ is the $n$-th prime number.
