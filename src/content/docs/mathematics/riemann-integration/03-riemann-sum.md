---
title: Riemann Sum
slug: mathematics/riemann-integration/riemann-sum
sidebar:
  order: 3
prev: true
next: true
---

Let

- $f\,:\,[a,b]\rightarrow\mathbb{R}$ is a bounded function on the compact
  interval $I=[a,b]$ with $M=\sup_I f$ and $m=\inf_I f$.
- $P=\set{I_1, I_2, \dots, I_n}$
- $M_k=\sup_{I_k} f = \sup\set{f(x):x\in[x_{k-1},x_k]}$
- $m_k=\inf_{I_k} f = \inf\set{f(x):x\in[x_{k-1},x_k]}$

## Upper riemann sum

```math
U(f;P)=\sum_{k=1}^{n}{M_k\lvert{I_k}\rvert}
```

## Lower riemann sum

```math
L(f;P)=\sum_{k=1}^{n}{m_k\lvert{I_k}\rvert}
```

$m_k<M_k \implies L(f;P)\,\le\,U(f;P)$ $ $

When $P_1, P_2$ are any 2 partitions of $I$: $ L(f;P_1) \le U(f;P_2) $
