---
title: Variation of parameters
slug: mathematics/ode/variation-of-parameters
sidebar:
  order: 6
next: false
prev: true
---

Consider the equation, where $P,Q$ are functions of $x$ alone, and which has 2
fundamental solutions $y_1,y_2$:

```math
y''+Py'+Qy=f(x)
```

The general solution of the equation is:

```math
y_g=c_1y_1 + c_2y_2
```

Now replacing $c_1,c_2$ with $u(x),v(x)$ will give $y_p=uy_1 + vy_2$, which can
be found using the method of variation of parameters.

```math
u=-\int{\frac{y_2f}{W(x)}\,\text{d}x}
\;\land\;
v=\int{\frac{y_1f}{W(x)}\,\text{d}x}
```

## Proof

```math
y_p=uy_1 + vy_2
```

```math
y_p'=u'y_1 + uy_1' + v'y_2 + vy_2'
```

Set $u'y_1+v'y_2=0\;\;(1)$ to simplify further equations. That implies
$y_p'=uy_1'+vy_2'$.

```math
y_p''=uy_1''+u'y_1'+vy_2''+v'y_2
```

Substituting $y_p'',y_p',y_p$ to the differential equation: $ $

```math
y_p''+Py_p'+Qy_p=u'y_1'+v'y_2'
```

This implies $u'y_1'+v'y_2'=f(x)\;\;(2)$. $ $

From equations $(1)$ and $(2)$, where $W(x)$ is the wronskian of $y_1,y_2$:

```math
u'=-\frac{y_2f}{W(x)}
\;\land\;
v'=\frac{y_1f}{W(x)}
```

```math
u=-\int{\frac{y_2f}{W(x)}\,\text{d}x}
\;\land\;
v=\int{\frac{y_1f}{W(x)}\,\text{d}x}
```

$y_p$ can be found now using $u,v,y_1,y_2$
