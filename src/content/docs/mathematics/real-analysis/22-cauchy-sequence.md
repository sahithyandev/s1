---
title: Cauchy Sequence
slug: mathematics/real-analysis/cauchy-sequence
sidebar:
  order: 22
prev: true
next: true
---

A sequence $u:\mathbb{Z}^+ \rightarrow A$ is Cauchy **iff**: $ $

```math
\forall \epsilon \gt 0\,
\exists N \in \mathbb{Z}^+\,
\forall m,n;
m,n \gt N
\implies
\lvert
u_n - u_m
\rvert \lt \epsilon
```

## Bounded

```math
u_n\;\text{is Cauchy} \implies u_n\;\text{is bounded}
```

Converse is **not** true.

:::note[Proof Hint]

- Consider the Cauchy definition
- Take $n \gt m = N + 1 \gt N$

:::

## Convergence & Cauchy

```math
u_n\;\text{is converging}
\implies
u_n\;\text{is a Cauchy sequence}
```

Converse is true **only when** the sequence is a subset of a
[Complete](/mathematics/real-analysis/cauchy-sequence/#complete) set.

:::note[Proof Hint]

- Consider the limit definition of converging sequences
- Introduce the converging value (say $L$) into the inequality and split into 2
  parts

:::

## Complete

A set $A$ is complete **iff**: $ $

```math
\forall u:\mathbb{Z}^+ \rightarrow A;\; u\;\text{converges to}\; L \in A
```

<b>IMPORTANT</b>: $\mathbb{R}$ is complete. Proof is quite hard. $ $

<b>IMPORTANT</b>: $Q$ is **not** complete because: $ $

```math
\sum_{k=1}^\infty \frac{1}{k!} = e - 1 \not\in \mathbb{Q}
```

<b>IMPORTANT</b>: $\mathbb{Z}$ is complete. $ $
