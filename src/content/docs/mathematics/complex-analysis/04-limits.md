---
title: Limits
slug: mathematics/complex-analysis/limits
sidebar:
  order: 4
prev: true
next: true
---

$\lim_\limits{z\to z_0} f(z) = L$ **iff**: $ $

```math
\forall{\epsilon>0}\;
\exists{\delta>0}\;
\forall{z}\;
\big(0<|z-z_0|<\delta\implies{|f(z)-L|<\epsilon})
```

## Properties

All properties mentioned in
[Limits | Real Analysis](/mathematics/real-analysis/limits/#properties) are
applicable to complex limits. Additional properties are mentioned below:

Suppose $\lim f(z)=L$. $ $

- $\lim \overline{f(z)}=\overline{L}$
- $\lim \text{Re}(f(z))=\text{Re}(L)$
- $\lim \text{Im}(f(z))=\text{Im}(L)$

### Real and imaginary limits

Let $f(z)=u(x,y)+iv(x,y)$, $z_0 = x_0 + iy_0$, $z=x+iy$.

Suppose the real part and imaginary part limits to $L_1,L_2$, which can be
written as: $ $

```math
\lim_\limits{(x,y)\to(x_0,y_0)} u(x,y)=L_1
\;\;\;
\lim_\limits{(x,y)\to(x_0,y_0)} v(x,y)=L_2
```

Then:

```math
\lim_\limits{z\to z_0} f(z)=L_1+iL_2
```

## Difference from real functions

For real functions, when considering the limit at a point, the limit could be be
approaching the point either from left or right.

For complex functions, the point can be approached along any path in the complex
plane. The distance $\lvert z − z_0 \rvert$ decreases to $0$.

## Notes for questions

- When 2 arbitrary paths are chosen: if the limits on each are different, then
  the limit DNE.
- When substituting $z=x+imx$: if $m$ doesn't cancel out, then the limit DNE.
- In most limits, subtituting $z=re^{i\theta}$ will simplify the limit a lot.
- In very complex functions, limits can be taken for real and imaginary parts
  separately.

## Important limits

```math
\lim_\limits{z\to 0} \frac{z}{\overline{z}}\;\text{doesn't exist}
```

The above limit is important as it shows up in many questions. Can be disproved
by taking two paths: real, imaginary axes.

```math

\lim_\limits{z\to 0} \frac{z \overline{z}}{z+\overline{z}}\;\text{doesn't exist}

```

Can be proven usign taking 2 paths: real axis, $t+\sqrt{t}i$. $ $
