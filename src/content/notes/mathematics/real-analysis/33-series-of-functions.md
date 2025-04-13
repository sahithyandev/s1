---
title: Series of Functions
slug: mathematics/real-analysis/series-of-functions
sidebar:
  order: 33
prev: true
next: true
---

Let $u_k(x)$ is a sequence of integrable functions. And series of those
functions is defined as: $ $

```math
s_n(x) = \sum_{k=1}^n u_k(x)
```

## Convergence tests

### Weierstrass M-test

To test if a series of functions converges uniformly and absolutely.

Suppose $f_n$ is a sequence of functions on a set $A$. **If** both these
conditions are met:

- $\forall n \ge 1\;\exists M_n \ge 0\; \forall x \in A\;; \lvert f_n(x) \rvert \le M_n$
- $T_n = \sum_{n=1}^\infty M_n$ converges

**Then**:

```math
\sum_{n=1}^\infty f_n(x)\; \text{converges uniformly \& absolutely}
```

:::note[Proof Hint]

- $T_n$ is Cauchy
- $\lvert s_n(x) - s_m(x) \rvert \lt \lvert T_n - T_m \rvert$
- $s_n(x)$ is uniformly Cauchy which implies it's converging uniformly and
  absolutely

:::

## Differentiation

### Theorem

If (all conditions must be met):

1. $u_n(x)$ is differentiable ($\implies s_n(x)$ is differentiable) on $[a,b]$
2. $s_n(x_0)$ converges (pointwise) for some $x_0 \in [a,b]$
3. $s_n'(x)=\sum_{k=1}^n u_k'(x)$ converges to $f(x)$ uniformly on $[a,b]$

Then:

1. $s_n(x)$ converges to $s(x)$ uniformly on $[a,b]$
2. $s(x)$ is differentiable on $[a,b]$
3. $s'(x)=f(x)$ **OR** in other words $s_n'(x)$ converges to $s'(x)$ uniformly

In that case, differentiation and infinite sum can be interchanged:

```math
\sum_{k=1}^\infty \frac{\text{d}}{\text{d}x} u_k(x) = \frac{\text{d}}{\text{d}x} \sum_{k=1}^{\infty} u_k(x)

```

### For power series

For any power series, inside the range of convergence, conditions for the above
theorem is valid and thus the conclusions are valid.

Suppose $s_n=\sum_{k=1}^n a_k(x-c)^k$, and $R$ is the radius of convergence. For
$\lvert x-c \rvert \le p \lt R$:

```math
s'(x)=
\frac{\text{d}}{\text{d}x} \sum_{k=1}^{\infty} a_k(x-c)^k
=\sum_{k=0}^\infty k a_k (x-c)^{k-1}
```

:::note

When a power series is differentiated: At the boundaries of the range of
convergence which is a closed interval, the convergence might be lost.

When a power series is integral: At the boundaries of the range of convergence
which is an open interval, the convergence might occur.

:::
