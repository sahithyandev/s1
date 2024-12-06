---
title: Fundamental Theorem of Calculus
slug: mathematics/riemann-integration/fundamental-theorem-of-calculus
sidebar:
  order: 14
prev: true
next: true
---

## Theorem I

If $g$ is continuous on $[a,b]$ that is differentiable on $(a,b)$ and if $g'$ is
integrable on $[a,b]$ then

```math
\int_a^b g' = g(b) - g(a)
```

:::note[Proof Hint]

Consider a general partition and use
[Mean Value Theorem](/mathematics/real-analysis/other-theorems/#mean-value-theorem)
on each parition.

:::

## Integration by parts

Suppose $u,v$ are continuous functions on $[a,b]$ that are differentiable on
$(a,b)$. If $u'$ and $v'$ are Riemann integrable on $[a,b]$:

```math
\int_a^b u(x)v'(x)\,\text{d}x
+
\int_a^b u'(x)v(x)\,\text{d}x
= u(b)v(b) - u(a)v(a)
```

:::note[Proof Hint]

Consider $g=uv$ and use
[FTC I](/mathematics/riemann-integration/fundamental-theorem-of-calculus/#theorem-i).
$ $

:::

## Theorem II

Suppose $f$ is an Riemann integrable function on $[a,b]$. For $x\in(a,b)$.

```math
F(x)=\int_a^x f(t)\,\text{d}t
```

- $F(x)$ is uniformly continuous on $[a,b]$
- $f$ is continuous at $x_0 \in (a,b) \implies F$ is differentiable and
  $F'(x_0) = f(x_0)$

:::note[Proof Hint]

For the first point:

- Consider 2 points in the interval $x,y\,(>x)$ such that
  $|x-y|\lt\delta=\frac{\epsilon}{M}$
- Show $\lvert F(y)-F(x) \rvert \le \epsilon$

For the second point: Consider the continuity definition of $f$ and prove is
quite trivial. $ $

```math
\bigg\lvert
\frac
{F(x) - F(x_0)}
{x-x_0}
-f(x_0)

\bigg\rvert
\lt \epsilon

```

:::

## Theorem

Suppose $f$ is Riemann integrable on an open interval $I$ containing the values
of differentiable functions $a,b$. Then:

```math
\frac
{\text{d}}
{\text{d}x}
\int_{a(x)}^{b(x)}
f(t)\,\text{d}t
=
f(b(x))b'(x) - f(a(x))a'(x)
```

:::note[Proof Hint]

Can be done using FTC I and II. Proof is quite trivial.

:::

## Theorem - Change of Variable

Suppose $u$ is a differentiable function on an open interval $J$ such that $u'$
is continuous. Let $I$ be an open interval such that
$\forall x \in J,\;u(x) \in I$.

If $f$ is continuous on $I$, then $f \circ u$ is continuous on $J$ and:

```math
\int_a^b{(f\circ u)(x)\,u'(x)\,\text{d}x}
=
\int_{u(a)}^{u(b)} f(u)\,\text{d}u

```
