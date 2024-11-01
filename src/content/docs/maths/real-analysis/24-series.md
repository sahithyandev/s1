---
title: Series
slug: maths/real-analysis/series
sidebar:
  order: 24
---

Let $(u_n)$ be a sequence, and a series (a new sequence) can be defined from it
such that: $ $

```math
s_n=\sum_{k=1}^{n}{u_k}
```

## Convergence

If $(s_n)$ is converging: $ $

```math
\lim_\limits{n\to \infty}{s_n} =
\lim_\limits{n\to \infty}{\sum_{k=1}^n {u_k}} =
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

## Divergence test

```math
\sum_{k=1}^{n}{u_k}\text{ is converging}
\implies
\lim_\limits{k\to\infty}{u_k} = 0
```

The converse is more useful:

```math
\lim_\limits{k\to\infty}{u_k} \neq 0
\implies
\sum_{k=1}^{n}{u_k}\text{ is diverging}
```

## A secret note

For any $p\gt0$, as $n$ tends to $\infty$, the below inequality holds:

```math
\ln n
\lt
n^p
\lt n!
```

The above inequality can be used to