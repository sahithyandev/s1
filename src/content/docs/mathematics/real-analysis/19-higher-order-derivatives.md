---
title: Higher Order Derivatives
slug: mathematics/real-analysis/higher-order-derivatives
sidebar:
  order: 19
prev: true
next: true
---

Suppose $f$ is a function defined on $(a,b)$. $f$ is $n$ times differentiable or
$n$-th differentiable **iff**:

```math
\lim_{x\to a}{\frac{f^{(n-1)}(x)-f^{(n-1)}(a)}{x-a}} = L \in \mathbb{R} = f^{(n)}(a)
```

Here $f^{(n)}$ denotes $n$-th derivative of $f$. And $f^{(0)}$ means the
function itself.

$f^{(n)}(a)$ is the $n$-th derivative of $f$ at $a$.

:::note

$f \text{ is } n \text{-th differentiable at } a \implies f^{(n-1)} \text{ is continuous at } a$

:::

## Second derivative test

Suppose $f'(x)=0$ and $f''(x)$ is continuous at $c$:

- $f''(c) \gt 0 \implies $ a local minimum is at $c$. Converse is **not** true.
- $f''(c) \lt 0 \implies $ a local maximum is at $c$. Converse is **not** true.

The above conclusion is from
[Taylor's theorem](/mathematics/real-analysis/taylor-theorem/) when $n=1$: $ $

```math
f(x)=f(c)+f'(c)(x-c)+\frac{f''(\zeta)}{2!}(x-c)^2
```

```math
f(x)-\text{Tangent line}=\frac{f''(\zeta)}{2!}(x-c)^2
```
