---
title: Taylor's Theorem
slug: mathematics/real-analysis/taylor-theorem
sidebar:
  order: 20
next: true
prev: true
---

Let $f$ is $n+1$ differentiable on $(a,b)$. Let $c,x \in (a,b)$. Then
$\exists \zeta \in (c,x) \text{ s.t. }$:

```math
f(x)=
f(c)
+
\sum_{k=1}^{n}{\frac{f^{(k)}(c)}{k!}(x-c)^k}
+
\frac{f^{(n+1)}(\zeta)}{(n+1)!}{(x-c)}^{n+1}
```

[Mean value theorem](/mathematics/real-analysis/other-theorems/#mean-value-theorem)
can be derived from taylor's theorem when $n=0$. $ $

:::note[Proof Hint]

```math
F(t)= f(t)+\sum_{k=1}^{n}{\frac{f^{(k)}(t)}{k!}(x-t)^k}
```

```math
G(t)=(x-t)^{n+1}
```

- Define $F,G$ as mentioned above
- Consider the interval $[c,x]$
- Use
  [Cauchy's mean value theorem](/mathematics/real-analysis/other-theorems/#cauchys-mean-value-theorem)
  for $F,G$ after making sure the conditions are met.

:::

The above equation can be written like:

```math
f(x)=T_n(x,c)+R_n(x,c)
```

## Taylor Polynomial

This part of the above equation is called the Taylor polynomial. Denoted by
$T_n(x,c)$. $ $

```math
T_n(x,c)=
f(c)
+
\sum_{k=1}^{n}{\frac{f^{(k)}(c)}{k!}(x-c)^k}
```

## Remainder

### Derivative form

Denoted by $R_n(x,c)$. $ $

```math
R_n(x,c)=
\frac{f^{(n+1)}(\zeta)}{(n+1)!}{(x-c)}^{n+1}
```

### Integral form

```math
R_n(x,c)=
\frac{1}{n!}
\int_c^x{f^{(n+1)}(t)(x-t)^n}\text{d}t
```

:::note[Proof Hint]

- Method 1: Use integration by parts and mathematical induction.
- Method 2: Use
  [Generalized IVT for Riemann Integrals](/mathematics/riemann-integration/generalized-ivt)
  where:
  - $F=f^{(n+1)}$
  - $G=(x-t)^n$

:::
