---
title: Convergence Tests
slug: mathematics/real-analysis/convergence-tests
sidebar:
  order: 25
prev: true
next: true
---

## Divergence test

```math
\lim_\limits{k \to \infty} u_k \neq 0
\implies
\sum_{k=1}^n u_k\; \text{is diverging}
```

## Direct Comparison Test

Let $0<u_k<v_k$. $ $

```math
\sum_{k=1}^\infty v_k\;\text{is converges}
\implies
\sum_{k=1}^\infty u_k\;\text{is converges}
```

:::note[Proof Hint]

- Note that $\sum_{k=1}^n u_k$ and $\sum_{k=1}^n v_k$ are increasing
- Show that $\sum_{k=1}^\infty v_k$ converges to its supremum $v$ which is an
  upper bound of $\sum_{k=1}^n u_k$

:::

:::note[Example]

Proving the convergence of $\sum_{k=1}^\infty \frac{1}{k!}$, by using
$k! \ge 2^{k-1}$ for all $k\ge 0$.

:::

## Limit Comparison Test

Let $0<u_k,v_k$ and $\lim_\limits{n\to \infty}{\frac{u_n}{v_n}} =R$.

```math
R \gt 0\implies \bigg(\sum_{n=1}^\infty u_n\;\text{is converging}\iff  \sum_{n=1}^\infty v_n\;\text{is converging}\bigg)
```

```math
R = 0\implies \bigg(\sum_{n=1}^\infty v_n\;\text{is converging} \implies  \sum_{n=1}^\infty u_n\;\text{is converging}\bigg)
```

```math
R = \infty\implies\bigg(\sum_{n=1}^\infty v_n\;\text{is diverging} \implies  \sum_{n=1}^\infty u_n\;\text{is diverging}\bigg)
```

:::note[Proof Hint]

Only possibilities are $R=0,R\gt 0, R=\infty$. $ $

For $R \gt 0$: $ $

- Consider limit definition with $\epsilon=\frac{L}{2}$
- Direct comparison test can be used for the 2 set of inequalities

For $R=0$: $ $

- Consider limit definition with $\epsilon=1$
- Direct comparison test can be used now

For $R=\infty$: $ $

- Consider limit definition with $M=1$
- Direct comparison test can be used now

:::

## Integral Test

Let $u(x) \gt 0$, decreasing and integrable on $[1,M]$ for all $M \gt 1$. Then:

```math
\sum_{n=1}^\infty u_n\text{ is converging}
\iff
\int_1^\infty {u(x)\,\text{d}x}\text{ is converging}
```

:::note[Proof Hint]

As $u(x)$ is decreasing, it is apparent that it is integrable. $ $

Make use of this inequality:

```math
s_n - u_1
\le
\int_1^n {u(x)\,\text{d}x}
\le
s_n - u_n
```

For $\impliedby$: $ $

- Note that $s_n$ is increasing
- Show that $s_n$ is bounded above by $\int_1^\infty {u(x)\,\text{d}x} + u_1$

For $\implies$: $ $

- Define $F(n)=\int_1^n {u(x)\,\text{d}x}$
- Note that $F(n)$ is increasing
- Note that $\lim_\limits{n\to\infty}{u_n} = 0$
- Show that $F(n)$ is bounded above by $\lim_\limits{n\to\infty}{s_n}$

:::

:::note

```math
\sum_{n=1}^\infty u_n\text{ is converging}
\implies
\lim_\limits{k \to \infty} u_k = 0

```

```math
\int_1^\infty {u(x)\,\text{d}x}\text{ is converging}
\implies
\lim_\limits{k \to \infty} u(k) = 0
```

:::

## Ratio Test

Let $u(x) \gt 0$ and $\lim_\limits{n\to \infty}{\frac{u_{n+1}}{u_n}} =L$.

```math
 L \lt 1 \implies \sum_{n=1}^\infty u_n\;\text{is converging}
```

```math
 L \gt 1 \implies \sum_{n=1}^\infty u_n\;\text{is diverging}
```

:::note[Proof Hint]

- Consider the limit definition with:
  - For the $L \lt 1$ case: $\epsilon=\frac{1}{2}(1-L)$
  - For the $L \gt 1$ case: $\epsilon=\frac{1}{2}(L-1)$
- Show that: $\frac{1}{2}(3L-1) \lt \frac{u_{k+1}}{u_k} \lt \frac{1}{2}(1+L)$
- Recursively simplify the inequality to reach $u_{N+1}$ which is a constant
- Use $\sum_{k=1}^\infty r^k$ is converging **iff** $r < 1$

:::

## Root Test

Let $u_n$ is a sequence and
$\lim_\limits{n\to \infty}{(\rvert u_n\rvert)^{1/n}} =L$.

```math
 L \lt 1 \implies \sum_{n=1}^\infty u_n\;\text{is absolutely converging}
```

```math
(L \gt 1 \lor L=\infty) \implies \sum_{n=1}^\infty u_n\;\text{is diverging}
```

:::note[Proof Hint]

Consider the limit definition with:

- For $L<1$: $\epsilon=\frac{1}{2}(1-L)$
- For $L > 1$: $\epsilon=\frac{1}{2}(L-1)$
- For $L=\infty$:$M>1$

:::

## Dirichlet's test

Let:

- $b_n$ is a decreasing sequence, converging to $0$ **and**
- $a_n$ is a sequence **and**
- $A_n = \sum_{k=1}^n a_k$ is bounded

```math
\implies \sum_{n=1}^\infty a_nb_n\; \text{is converging}
```
