---
title: Sequence
slug: mathematics/real-analysis/sequence
sidebar:
  order: 21
prev: true
next: true
---

A sequence on a set $A$ is a function $u:\mathbb{Z}^{+}\rightarrow A$.

Image of the n is written as $u_n$. A sequence is indicated by one of these
ways: $ $

```math
\Big\{u_n\Big\}_{n=1}^{\infty}
\;\;
\text{or}
\;\;
\Big\{u_n\Big\}
\;\;
\text{or}
\;\;
\Big(u_n\Big)_{n=1}^{\infty}
```

### Increasing or Decreasing

A sequence $\big(u_n\big)$ is $ $

- Increasing **iff** $u_n\ge u_m$ for $n>m$
- Decreasing **iff** $u_n\le u_m$ for $n>m$
- Monotone **iff** either increasing or decreasing
- Strictly increasing **iff** $u_n\gt u_m$ for $n>m$
- Strictly decreasing **iff** $u_n\lt u_m$ for $n>m$

## Convergence

### Converging

A sequence $\big(u_n\big)_{n=1}^{\infty}$ is converging (to $L\in\mathbb{R}$)
**iff**: $\lim_\limits{n\to \infty}{u_n} = L$

```math
\forall \epsilon > 0\;
\exists N\in\mathbb{Z}^{+}
\;
\forall n
\;
(
n > N
\implies
|u_n-L| < \epsilon
)
```

### Diverging

A sequence is diverging **iff** it is not converging.

```math
\lim_\limits{n\to\infty}u_n=
\begin{cases}
\;\infty\\
\;-\infty\\
\;\text{undefined}, & \text{when}\;u_n\;\text{is osciallating}\\
\end{cases}
```

## Convergence test

All converging sequences are bounded. Contrapositive can be used to prove the
divergence.

### Increasing and bounded above

Let $\big(u_n\big)$ be increasing and bounded above. Then $\big(u_n\big)$ is
converging (to $\sup\,\set{u_n}$).

:::note[Proof Hint]

- $\set{u_n}$ has a $\sup u_n (= s)$
- Prove: $\lim_\limits{n\to\infty}u_n=s^{-}$

:::

### Decreasing and bounded below

Let $\big(u_n\big)$ be decreasing and bounded below. Then $\big(u_n\big)$ is
converging (to $\inf\,\set{u_n}$).

:::note[Proof Hint]

- $\set{u_n}$ has a $\inf u_n (= l)$
- Prove: $\lim_\limits{n\to\infty}u_n=l^{+}$

:::

Both of the above results are referred to as "monotone convergence theorem".

## Newton's method of finding roots

Suppose $f$ is a function. To find its roots: $ $

- Select a point $x_0$
- Draw a tangent at $x_0$
- Choose $x_1$ which is where the tangent meets $y=0$
- Continue this process repeatedly

```math
x_{n+1}=x_n - \frac{f(x_n)}{f'(x_n)}
```

Sequence of $x_n$ converges to one of the roots. Different points can be taken
to find other roots. $ $
