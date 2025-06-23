---
title: Series
slug: mathematics/real-analysis/series
sidebar:
  order: 24
prev: true
next: true
---

Let $(u_n)$ be a sequence, and a series (a new sequence) can be defined from it
such that: $ $

```math
s_n=\sum_{k=1}^{n}{u_k}
```

## Convergence

If $(s_n)$ is converging: $ $

```math
\lim_{n\to \infty}{s_n} =
\lim_{n\to \infty}{\sum_{k=1}^n {u_k}} =
\sum_{k=1}^\infty u_k = S\in\mathbb{R}
```

### Absolutely Converging

$\sum_{k=1}^{n}{u_k}$ is absolutely converging **iff**
$\sum_{k=1}^{n}{\lvert u_k \rvert}\text{ is converging}$.

```math
\sum_{k=1}^{n}{\lvert u_k \rvert}\text{ is converging}
\implies
\sum_{k=1}^{n}{u_k}\text{ is converging}
```

:::note[Proof Hint]

Use this inequality:

```math
0 \le
\;\lvert u_k \rvert - u_k\; \le
2 \lvert u_k \rvert
```

:::

#### Theorem

A series $s_n$ is absolutely converging to $s$ **iff** rearranged series of
$s_n$ converges to $s$.

### Conditionally Converging

$\sum_{k=1}^{n}{u_k}$ is condtionally converging **iff**: $ $

```math
\sum_{k=1}^{n}{\lvert u_k \rvert}\text{ is diverging}\;\;\;\text{and}\;\sum_{k=1}^{n}{u_k}\text{ is converging}
```

#### Theorem

Suppose $s_n$ is a conditionally converging series. Then: $ $

1. Sum of all the positive terms limits to $\infty$
2. Sum of all the negative terms limits to $-\infty$
3. $s_n$ can be rearranged to have the sum:
   - Any real number $x$
   - $\infty$
   - $-\infty$
   - Does not exist

### Terms limit to 0

```math
\sum_{k=1}^{n}{u_k}\text{ is converging}
\implies
\lim_{k\to\infty}{u_k} = 0
```

The converse is known as the
[divergence test](/mathematics/real-analysis/convergence-tests/#divergence-test):

## Grouping

Suppose $\sum u_k$ is a given series. **If** $v_n$ is formed by grouping a
finite number of adjacent terms $u_k$, **then** $\sum v_k$ is a grouping of the
given series.

## Rearrangement

Suppose $\sum u_k$ is a given series. **If** there is a bijection sequence $k_n$
such that $v_n = u_{k_n}$, **then** $\sum v_n$ is a rearrangement of the given
series.
