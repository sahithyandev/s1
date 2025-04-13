---
title: Sequence of Functions
slug: mathematics/real-analysis/sequence-of-functions
sidebar:
  order: 31
prev: true
next: true
---

## Types of Convergence

### Pointwise convergence

```math
\forall \epsilon \gt 0\;
\forall x\in [a,b]\;
\exists N \in \mathbb{Z^+}\;
\forall n > N\;;\;
\big|f_n(x)-f(x)\big| \lt \epsilon
```

Here $N$ depends on $\epsilon, x$.

Examples:

- $x^n$ on $[0,1]$

### Uniformly convergence

```math
\forall \epsilon \gt 0\;
\exists N \in \mathbb{Z^+}\;
\forall x\in [a,b]\;
\forall n > N\;;\;
\big|f_n(x)-f(x)\big| \lt \epsilon
```

Here $N$ depends on $\epsilon$ only. Implies pointwise convergence.

Examples:

- $\frac{x^2}{n}$ on $[0,1]$

## Uniform convergence tests

### Supremum test

Suppose $u_n(x)$ is sequence of bounded functions. $u_n(x)$ converges to $u(x)$
uniformly **iff**:

```math
\lim_\limits{n\to\infty} \sup_x\, \lvert u_n(x) - u(x) \rvert = 0
```

:::note[Proof Hint]

Let $l_n=\lvert u_n(x)-u(x) \rvert$. $ $

To prove $\implies$: $ $

- Consider the epsilon-delta definition of uniform convergence
- $\frac{\epsilon}{2}$ is an upperbound of $l_n$
- $\sup_x l_n \le \frac{\epsilon}{2} \lt \epsilon $

To prove $\impliedby$: $ $

- Consider the epsilon-delta definition of the above limit
- $l_n \lt \sup_x l_n \lt \epsilon $

:::

## Properties of uniform convergence

### Continuity

If $u_n(x)$ is continuous and converging to $u(x)$, then $u(x)$ is also
continuous.

:::note[Proof Hint]

Consider the limit definitions of:

1. $u_n(x)$ converges to $u(x)$
2. $u_n(x)$ is continuous at $a$

Consider $\lvert u(x)-u(a)\rvert$. Introduce $u_n(x)$ and $u_n(a)$ in there.
Split into 3 absolute values. Show that the sum is lesser than $3\epsilon$.

:::

### Integrability

Explained in
[Converging Functions | Riemann Integration](/mathematics/riemann-integration/converging-functions/).

### Differentiability

Uniform convergence-differentiation pair doesn't go as smooth like integration
was.

Suppose $u_n(x)$ is a sequence of differentiable functions, and they uniformly
converges to $u(x)$. Differentiability of $u(x)$ is not guaranteed. An example
is:

```math
u_n(x) = \sqrt{x^2 + \frac{1}{n}}
```

$u_n(x)$ is differentiable but $u(x)$ is only differentiable on
$\mathbb{R}-\set{0}$.

#### Theorem

If (all conditions must be met):

1. $u_n(x)$ is differentiable on $[a,b]$
2. $u_n(x_0)$ converges (pointwise) for some $x_0 \in [a,b]$
3. $u_n'(x)$ converges to $f(x)$ uniformly on $[a,b]$

Then:

1. $u_n(x)$ converges to $u(x)$ uniformly on $[a,b]$
2. $u(x)$ is differentiable on $[a,b]$
3. $u'(x)=f(x)$ **OR** in other words $u_n'(x)$ converges to $u'(x)$ uniformly
