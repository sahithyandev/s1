---
title: Differentiability
slug: mathematics/real-analysis/differentiability
sidebar:
  order: 16
prev: true
next: true
---

A function $f$ is differentiable at $a$ **iff**:

```math
\lim_\limits{x\to a}{\frac{f(x)-f(a)}{x-a}} = L \in \mathbb{R} = f'(a)
```

When it is differentiable, $f'(a)$ is called the derivative of $f$ at $a$.

### Critical point

$c\in[a,b]$ is called a critical point **iff**: $ $

```math
f\text{ is not differentiable at } c
\;\;
\lor
\;\;
f'(c)=0
```

## One-side differentiable

$f$ is differentiable at $a$ **iff** $f$ is left differentiable at $a$ **and**
$f$ is right differentiable at $a$.

### Left differentiable

A function $f$ is left-differentiable at $a$ **iff**:

```math
\lim_\limits{x\to a^{-}}{\frac{f(x)-f(a)}{x-a}} = L \in \mathbb{R} = f'_{-}(a)
```

### Right differentiable

A function $f$ is right-differentiable at $a$ **iff**:

```math
\lim_\limits{x\to a^{+}}{\frac{f(x)-f(a)}{x-a}} = L \in \mathbb{R} = f'_{+}(a)
```

## On intervals

### Open interval

A function $f$ is differentiable in $(a,b)$ **iff** $f$ is differentiable on
every $c\in(a,b)$.

### Closed interval

A function $f$ is differentiable in $[a,b]$ **iff** $f$ is:

- differentiable on every $c\in(a,b)$
- right-differentiable at $a$
- left-differentiable at $b$

## Continuously differentiable functions

A function $f$ is said to be continously differentiable at $a$ **iff** :

- $f$ is differentiable at $a$ **and**
- $f'$ is continous at $a$

## Differentiability implies continuity

$f \text{ is differentiable at } a \implies f \text{ is continuous at } a$

Likewise, one-sided differentiability implies corresponding one-sided
continuity.

:::note[Proof Hint]

Use $\delta=min(\delta_1, \frac{\epsilon}{1 + |f'(a)|})$. $ $

:::

:::note

Suppose $f$ is differentiable at $a$. Define $g$:

```math
  g(x) =
\begin{cases}
  \;
\cfrac{f(x)-f(a)}{x-a},  & x \neq a \\[2ex]
\;
f'(a), & x=a
\end{cases}
```

$g$ is continuous at $a$.

:::

## Properties of differentiation

### Addition

```math
\frac{\text{d}}{\text{d}x} (f \pm g) =
f' \pm
g'
```

### Multiplication

```math
\frac{\text{d}}{\text{d}x} (fg) =
fg' + fg'
```

### Division

```math
\frac{\text{d}}{\text{d}x} \bigg(\frac{f}{g}\bigg) =
\frac{gf' - fg'}{g^2}
```

### Composition

```math
\frac{\text{d}}{\text{d}x} f(g(x)) = f'(g(x))\,g'(x)
```

### Power

```math
\frac{\text{d}}{\text{d}x} f^n = nf^{n-1}(x) f'(x)
```
