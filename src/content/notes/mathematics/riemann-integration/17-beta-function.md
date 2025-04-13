---
title: Beta function
slug: mathematics/riemann-integration/beta-function
sidebar:
  order: 17
next: false
prev: true
---

Beta function is defined as below, for $m,n\gt 0$: $ $

```math
B(m,n)=\int_0^1 x^{m-1}(1-x)^{n-1}\,\text{d}x
```

Aka. Eulerian integral of the first kind.

:::note

For $m,n\le 0$, the beta function is divergent. $ $

:::

## Properties

### Symmetrical

From the definition:

```math
B(m,n) = B(n,m)
```

:::note[Proof Hint]

Use $t = 1 - x$. $ $

:::

## Relation with gamma function

$\forall m,n \gt 0$. $ $

```math
B(m,n) = \frac{\Gamma(m)\Gamma(n)}{\Gamma(m+n)}
```

## Transformations

This section is intended to be exam-focused.
[Proofs for the transformations](#transformations-proofs) are included in a
separate section.

### Form 0, 6

```math
\int_a^b {(x-a)^{m-1}(b-x)^{n-1}}\,\text{d}x = (b-a)^{m+n-1} B(m,n)
```

Form 0 (definition) is derived by setting $a=0$ and $b=1$, .

### Form 1, 3

```math
\int_0^\infty \frac{x^{m-1}}{(ax + b)^{m+n}}\,\text{d}x = \frac{B(m,n)}{a^m b^n}
```

Form 1 is derived by setting $a=b=1$. $ $

### Form 2

```math
B(m,n) = \int_0^1 \frac{x^{m-1} + x^{n-1}}{(1+x)^{m+n}}\,\text{d}x
```

### Form 4

```math
\int_0^\frac{\pi}{2} \frac{\sin^{2m-1}(x) \cos^{2n-1}(x)}{(a\sin^2 x + b\cos^2 x)^{m+n}}\,\text{d}x = \frac{B(m,n)}{2a^m b^n}
```

### Form 5, 7

```math
\int_0^1 \frac{x^{m-1}(1-x)^{n-1}}{(a + bx)^{m+n}}\,\text{d}x
=
\frac{B(m,n)}{a^n(a+b)^m}
```

Form 5 is derived by setting $b=1$. $ $

## Transformations Proofs

### Form 1

```math
B(m,n)=
\int_0^{\infty} \frac{x^{n-1}}{(x+1)^{m+n}}\,\text{d}x=
\int_0^{\infty} \frac{x^{m-1}}{(x+1)^{m+n}}\,\text{d}x
```

:::note[Proof Hint]

Use $x=\frac{1}{1+t}$ in the definition. $ $

:::

### Form 2

```math
B(m,n) = \int_0^1 \frac{x^{m-1} + x^{n-1}}{(1+x)^{m+n}}\,\text{d}x
```

:::note[Proof Hint]

Use $x=\frac{1}{t}$ in Form 1. $ $

:::

### Form 3

```math
\int_0^\infty \frac{x^{m-1}}{(ax + b)^{m+n}}\,\text{d}x = \frac{B(m,n)}{a^m b^n}
```

:::note[Proof Hint]

Use $x=\frac{a}{b}t$ in Form 1. $ $

:::

### Form 4

```math
\int_0^\frac{\pi}{2} \frac{\sin^{2m-1}(x) \cos^{2n-1}(x)}{(a\sin^2 x + b\cos^2 x)^{m+n}}\,\text{d}x = \frac{B(m,n)}{2a^m b^n}
```

:::note[Proof Hint]

Use $x=\tan \theta$ in Form 3. $ $

:::

### Form 5

```math
\int_0^1 \frac{x^{m-1} (1-x)^{n-1}}{(x+a)^{m+n}}\,\text{d}x = \frac{B(m,n)}{a^n (1+a)^m}
```

:::note[Proof Hint]

Use the substituition in the definition.

```math
x = \frac{t(1+a)}{t+a}
```

:::

### Form 6

```math
\int_a^b {(x-a)^{m-1}(b-x)^{n-1}}\,\text{d}x = (b-a)^{m+n-1} B(m,n)
```

:::note[Proof Hint]

Use $x=at + b(1-t)$ in the definition. $ $

:::

### Form 7

```math
\int_0^1 \frac{x^{m-1}(1-x)^{n-1}}{(a + (b-a)x)^{m+n}}\,\text{d}x
=
\frac{B(m,n)}{a^nb^m}
```

```math
\int_0^1 \frac{x^{m-1}(1-x)^{n-1}}{(a + bx)^{m+n}}\,\text{d}x
=
\frac{B(m,n)}{a^n(a+b)^m}
```
