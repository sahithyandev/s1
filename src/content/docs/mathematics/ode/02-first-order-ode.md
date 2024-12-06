---
title: Solving First Order Ordinary Differential Equations
sidebar:
  label: Solving First Order ODE
  order: 2
slug: mathematics/ode/first-order-ode
prev: true
next: true
---

## Separable equation

When $x$ and $y$ functions can be separated into separate one-variable functions
(as shown below).

```math
\frac{\text{d}y}{\text{d}x} = f(x)g(y)
```

```math
\int{\frac{1}{g(y)}\,\text{d}y} = \int{f(x)\,\text{d}x}
```

## Homogenous equation

```math
\frac{\text{d}y}{\text{d}x} = f(x,y)
```

A function $ f(x,y) $ is homogenous when $ f(x,y) = f(\lambda x, \lambda y) $.

To solve:

- Use $ y = vx $ substitution, where $ v $ is a function of $ x $ and $ y $
- Differentiate both sides: $ \text{d}y = v + v\text{d}x $
- Apply the substitution to make it separable

## Reduction to homogenous type

```math
\frac{\text{d}y}{\text{d}x} = \frac{ax + by + c}{Ax + By + C}
```

This type of equation can be reduced to homogenous form.

If $a:b=A:B$, use the substitution: $u=ax+by$.

In other cases:

- Find $ h $ and $k$ such that $ ah + bk + c = 0 $ and $ Ah + Bk + C = 0 $
- Use substitutions:
  - $ X = x + h $
  - $ Y = y + k $

The reduced equation would be:

```math
\frac{\text{d}Y}{\text{d}X} = \frac{aX + bY}{AX + BY}
```

## Linear equation

```math
\frac{\text{d}y}{\text{d}x} + P(x)\,y = Q(x)
```

The above form is called **the standard form**.

The equation would be separable if $ Q(x) = 0 $. $ $

Otherwise:

- Identify $P(x)$ from the standard form
- Calculate **integrating factor**: $ I = \exp{\int{P(x) \text{d}x}} $.
- Multiply both sides by $ I $
- $ \text{LHS} $ becomes $ \frac{d}{dx}(yI) $
- Integrate both sides to solve for $y$

## Bernoulli's equation

```math
\frac{\text{d}y}{\text{d}x} + P(x)y = Q(x)y^n
\;\;
;
\;
n\in\mathbb{R}
```

When $ n = 0 $ or $ n = 1 $, the equation would be linear.

Otherwise, it can be converted to linear using $ v = y^{1-n} $ as substituion.
$
$

## None of the above

The equation must be converted to one of the above by using a suitable
substitution.
