---
title: Taylor Series
slug: mathematics/real-analysis/taylor-series
sidebar:
  order: 30
prev: true
next: true
---

Let $f$ be infinitely many times differentiable on $(a,b)$ and $c,x \in (a,b)$.

If $\lim_\limits{n\to \infty} R_n(x) = 0$ for $x \in (c-R, c+R) \subset (a,b)$,
then Taylor series of $f$ at $c$ is given by:

```math
\sum_{n=0}^\infty
\frac{f^{(n)}(c)}{n!}
(x-c)^n
```

:::note

Usually Taylor series expansion is done with $c=0$. This is a special case of
Taylor series, and called the **Maclaurin series**. $ $

:::

## Procedure

Suppose a function $f$ is given and its Taylor series is required. $ $

- Differentiate $f$ repeatedly and find a general solution for $n$-th derivative
- Construct Taylor polynomial
- Use root test or ratio test to find the range of convergence of the Taylor
  polynomial
- Consider the endpoints of range of convergence to check if the Taylor
  polynomial converges
- Construct the Taylor remainder
- Find for which values of $x$, the remainder converges to $0$

## Examples

### e^x

Range of convergence is $\mathbb{R}$. $ $

```math
e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + \frac{x}{1!} + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots
```

### ln (1+x)

Range of convergence is $(-1,1]$. $ $

```math
\ln(1+x) = \sum_{n=1}^\infty \frac{(-1)^{n-1}x^n}{n} = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots
```

### sin x

Range of convergence is $\mathbb{R}$. $ $

```math
\sin x = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots
```

### cos x

Range of convergence is $\mathbb{R}$. $ $

```math
\cos x = \sum_{n=0}^{\infty} (-1)^n \frac{x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots
```
