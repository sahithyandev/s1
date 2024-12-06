---
title: Properties of Integrals
slug: mathematics/riemann-integration/properties-of-integrals
sidebar:
  order: 9
prev: true
next: true
---

Suppose $f$ and $g$ are integrable on $[a,b]$.

## Flipping the range

```math
\int_a^bf=-\int_b^af
```

## Addition

$f+g$ will be integrable on $[a,b]$.

```math
\int_a^b(f\pm g)=
\int_a^bf
\pm
\int_a^bg
```

Converse is **not** true.

:::note[Proof Hint]

- Prove $f+g$ is integrable using:
  - $\sup(f+g)\le \sup(f) + \sup(g)$
  - $\inf(f+g)\ge \inf(f) + \inf(g)$
- Start with $U(f+g)$ and show $U(f+g)\le U(f)+U(g)$
- Start with $L(f+g)$ and show $L(f+g)\ge L(f)+L(g)$

:::

## Constant multiplication

Suppose $k\in\mathbb{R}$. $kf$ will be integrable $[a,b]$.

```math
\int_a^bkf=k\int_a^bf
```

Converse is **not** true.

:::note[Proof Hint]

- Prove for $k\ge 0$. Use $U-L\lt \frac{\epsilon}{k}$
- Prove for $k=-1$
- Using the above results, proof for $k<0$ is apparent

:::

## Bounds

If $m\le f(x) \le M$ on $[a,b]$:

```math
m(b-a) \le \int_a^bf \le M(b-a)
```

If $f(x)\le g(x)$ on $[a,b]$:

```math
\int_a^bf \le \int_a^bg
```

## Modulus

$|f|$ will be integrable on $[a,b]$.

```math
\Bigg|\int_a^bf\Bigg| \le \int_a^b|f|
```

:::note[Proof Hint]

Start with $-|f|\le f \le |f|$. And integrate both sides. $ $

:::

## Multiple

$fg$ will be integrable on $[a,b]$. Converse is **not** true.

:::note[Proof Hint]

- Suppose $f$ is bounded by $k$
- Prove $f^2$ is integrable (Use $\frac{\epsilon}{2k}$)
- $fg$ is integrable because:

$fg=\frac{1}{2}\big[(f+g)^2 - f^2 - g^2\big]$

:::

## Max, Min

$\max(f,g)$ and $\min(f,g)$ are integrable.

Where $\max$ and $\min$ functions are defined as:

$\max(f,g)=\frac{1}{2}(|f-g|+f+g)$

$\min(f,g)=\frac{1}{2}(-|f-g|+f+g)$

## Additivity

$\iff f$ is Riemann integrable on $[a,c]\text{ and } [c,b]$ where $c \in (a,b)$.

:::note[Proof Hint]

- $\implies$: Use Cauchy criterion after defining these:
  - $P'=\set{c} \cap P$
  - $Q=P'\cap [a,c]$
  - $R=P'\cap [c,b]$
- $\impliedby$: Use cauchy criterion on $[a,c], [c,b]$ separately and then
  combine using a union partition

:::

After the integrability is proven,

```math
\int_a^b f =
\int_a^c f +
\int_c^b f
```

:::note[Proof Hint]

1. Let $Q$ be a partition on $[a,c]$ and $R$ be a partition on $[c,b]$. And
   $P=Q \cap R$.

2. Prove the below using Cauchy criteria:

```math
\int_a^b f \lt
L(f;P) + \epsilon

\;\;
\implies
\;\;

\int_a^b f \le
\int_a^c f +
\int_c^b f
```

3. Prove the below using Cauchy criteria (by considering RHS):

```math
\int_a^c f +
\int_c^b f \le
\int_a^b f
```

:::
