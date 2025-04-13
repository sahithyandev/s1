---
title: Improper Riemann Integrals
slug: mathematics/riemann-integration/improper-riemann-integrals
sidebar:
  order: 15
prev: true
next: true
---

Iniitally Riemann integrals are defined only for **bounded** functions defined
on a set of **compact** intervals.

### Type 1

A function that is **not** integrable at one endpoint of the interval.

Suppose $f:(a,b]\to\mathbb{R}$ is integrable on $[c,b]\;\forall c\in (a,b)$.

```math
\int_a^b f = \lim_\limits{\epsilon \to 0}\; \int_{a+\epsilon}^b f
```

Can be similarly defined on the other endpoint. The above integral converges
**iff** the limit exists and finite. Otherwise diverges.

### Type 2

A function defined on unbounded interval (including $\infty$). $ $

Suppose $f:[a,\infty)\to\mathbb{R}$ is integrable on $[a,r] \forall r > a$.

```math
\int_a^\infty f = \lim_\limits{r \to \infty}\; \int_a^r f
```

Can be similarly defined on the other endpoint. The above integral converges
**iff** the limit exists and finite. Otherwise diverges.

### Type 3

A function that is undefined at finite number of points. The integral can be
split into multiple integrals of type 1. Similarly integrals from $-\infty$ to
$\infty$ can be defined.

:::note

The integral can be split into multiple integrals only when all those integrals
exist.

:::

Convergence of improper integrals is similar to the convergence of
[series](/mathematics/real-analysis/series/).

## Absolute convergence test

```math
\int_a^b \lvert f \rvert\;\text{converges}
\implies
\int_a^b f \;\text{converges}
```

## Common integrals

```math
\int_0^1 \frac{1}{x^p}\,\text{d}x
\;\;\;
\;\;\;
\;\;\;
\int_1^\infty \frac{1}{x^p}\,\text{d}x
```

The above integrals converge **iff** $p$ is in the integrating (open) interval.
Converges to $\frac{1}{p-1}$ in that case.

```math
\int_0^1 \frac{\sin^2 x}{x^2}\,\text{d}x
\;\;\;
\;\;\;
\;\;\;
\int_1^\infty \frac{\sin^2 x}{x^2}\,\text{d}x
```

Both of the above integrals converges. Direct comparison test can be used.

- For the 1st integral, $\sqrt{x^{-1}}$ can be used
- For the 2nd integral, $x^{-2}$ can be used
