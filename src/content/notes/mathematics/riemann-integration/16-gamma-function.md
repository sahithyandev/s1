---
title: Gamma function
slug: mathematics/riemann-integration/gamma-function
sidebar:
  order: 16
next: true
prev: true
---

Defined as below for $n\gt 0$: $ $

```math
\Gamma(n)=\int_0^\infty e^{-x}x^{n-1}\,\text{d}x
```

Aka. Eulerian integral of the second kind.

## Convergence

$\Gamma(n)$ is convergent **iff** $n \gt 0$.

:::note[Proof Hint]

Direct comparison test is used. Proved in 3 cases:

- Case 1: for positive integer $n$ $ $
  - Consider the [lemma 2](#lemma-2)'s limit definition
  - Take $\epsilon=1$
  - Use the convergence of $\int_0^\infty e^{-x/2}\,\text{d}x$
- Case 2: for $n \gt 1$ non-integers $ $

  - Use $\lfloor n \rfloor \lt n \lt \lfloor n \rfloor + 1$
  - Use $x^{y-1}e^{-x} \le x^{\lfloor n \rfloor}e^{-x}$
  - $\Gamma(\lfloor n \rfloor + 1)$ is converging from case 1

- Case 3: for $0 \lt n \lt 1$. $ $
  - Proof is similar to case 1
  - But $\int_0^N e^{-x}x^{n-1}\,\text{d}x$ is an improper
  - Prove that it is also converging

:::

## Properties

Proofs are required for each property mentioned below.

- $\Gamma(1)=1$
- $\Gamma(n+1)=n\Gamma(n)$
- $\Gamma(n+1)=n!$
- $\Gamma(n) \Gamma(1-n) = \pi \csc(\pi x)$
- $\Gamma(\frac{n}{2})$ can be extrapolated from
  $\Gamma(\frac{1}{2})=\sqrt{\pi}$ (see below for explanation)
- $\Gamma(k)$, where $k$ is a rational number (other than integers and half of
  any integer), cannot be expressed in a closed form value.

## Extension of gamma function

$\Gamma(n)$ function can be extended for negative non-integers using: $ $

```math
\Gamma(n) = \frac{\Gamma(n+1)}{n}
```

This cannot be used to define $\Gamma(0)$ because of the denominator. And
through induction, $\Gamma$ function cannot be defined for negative integers.

## Lemmas

### Lemma 1

```math
\forall s \gt 0 \; \int_0^\infty e^{-sx}\,\text{d}x\;\text{converges}
```

### Lemma 2

```math
\forall n \in\mathbb{Z}^+
\;
\lim_\limits{x\to\infty}
\frac{x^{n-1}}{e^{x/2}}
=0
```

## Transformations

Alternate forms of $\Gamma(n)$. This section is intended to be exam-focused.
[Proofs for the transformations](#transformations-proofs) are included in a
separate section. $ $

### Form 0, 1, 4

For $k\in \mathbb{R}$: $ $

```math
\Gamma(n) = k \int_0^\infty e^{-x^k} x^{kn-1}\,\text{d}x
```

Form 0 (definition) is resulted when setting $k=1$. Form 1 is resulted when
setting $k=\frac{1}{n}$. $ $

### Form 2

```math
\int_0^\infty e^{-kx}x^{n-1}\,\text{d}x
=
\frac{\Gamma(n)}{k^n}
```

### Form 3

```math
\Gamma(n)=
\int_0^1 \bigg(\ln\frac{1}{x}\bigg)^{n-1} \,\text{d}x
```

## Transformations Proofs

### Form 1

$\forall n \gt 0$: $ $

```math
\Gamma(n)=\frac{1}{n}\int_0^\infty e^{-x^{1/n}}\,\text{d}x
```

:::note[Proof Hint]

Use $x^n=t$. $ $

:::

:::note

One of the most frequently used integrals in mathematics:

```math
\int_0^{\infty} e^{-x^2}\,\text{d}x = \frac{\sqrt{\pi}}{2}
```

:::

### Form 2

```math
\int_0^\infty e^{-kx}x^{n-1}\,\text{d}x
=
\frac{\Gamma(n)}{k^n}
```

:::note[Proof Hint]

Use $x=kt$. $ $

:::

### Form 3

```math
\Gamma(n)=
\int_0^1 \bigg(\ln\frac{1}{x}\bigg)^{n-1} \,\text{d}x
```

:::note[Proof Hint]

Use $e^{-x}=t$. If the given integral's range is from $0$ to $1$ and there is
$\ln$, it's better to try this substitution.

:::

### Form 4

For $k\in \mathbb{R}$: $ $

```math
\Gamma(n) = k \int_0^\infty e^{-x^k} x^{kn-1}\,\text{d}x
```

:::note[Proof Hint]

Use $x=t^k$. $ $

:::
