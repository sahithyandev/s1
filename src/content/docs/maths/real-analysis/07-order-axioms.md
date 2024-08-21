---
title: Order Axioms
slug: maths/real-analysis/order-axioms
sidebar:
  order: 7
---

- **Trichotomy**: $ \forall a,b \in \mathbb{R} $ exactly one of these holds:
  $a > b$, $a = b$, $a<b$
- **Transitivity**: $ \forall a,b,c \in \mathbb{R}; a<b \land b<c \implies a<c $
- **Operation with addition**: $ \forall a,b \in \mathbb{R}; a<b \implies
  a+c<b+c $
- **Operation with mutliplication**: $ \forall a,b,c \in \mathbb{R}; a<b \land
  0<c \implies ac<bc $

## Definitions

- $ a < b \equiv b > a $
- $ a \le b \equiv a<b\lor a=b$
- $ a\not =b\equiv a<b\lor a>b$
- $\lvert{x}\rvert=\begin{cases}x & \text{if } x \ge 0, \\-x & \text{if } x < 0\end{cases}$

## Triangular inequalities

```math
\lvert{a}\rvert
-
\lvert{b}\rvert
\le
\lvert{a+b}\rvert
\le
\lvert{a}\rvert
+
\lvert{b}\rvert
```

```math
\lvert{
\lvert{a}\rvert
-
\lvert{b}\rvert
}
\rvert
\le
\lvert{a+b}\rvert
```

## Required proofs

- $\forall a,b,c \in \mathbb{R}; a<b \land c<0 \implies ac>bc $
- $1 > 0$
- $-\lvert{a}\rvert\le a\le\lvert{a}\rvert$
- Triangular inequalities

## Theorems

- $\exists{a}\;\forall{\epsilon>0},\,a<\epsilon\implies{a}\le{0}$
- $\exists{a}\;\forall{\epsilon>0},\,0\le{a}<\epsilon\implies{a}={0}$

:::danger[Caution]

$\forall{\epsilon>0}\;\exists{a},\,a<\epsilon\implies{a}\le{0}$ is **not**
valid.$ $

:::

Let $A$ be a non-empty subset of $\mathbb{R}$ which is bounded above and has an
upper bound $u$.

$u=\sup{A}\iff\forall{\epsilon>0}\,\exists{a\in{A}},\,a>u-\epsilon$

Let $A$ be a non-empty subset of $\mathbb{R}$ which is bounded below and has an
lower bound $m$.

$m=\inf{A}\iff\forall{\epsilon>0}\,\exists{a\in{A}},\,a<m+\epsilon$