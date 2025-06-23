---
title: Alternating Series
slug: mathematics/real-analysis/alternating-series
sidebar:
  order: 27
prev: true
next: true
---

Suppose $u_k>0$. An alternating series is:$ $

```math
\sum_{k=1}^n (-1)^{k - 1} u_k = u_1 - u_2 + u_3 - u_4 + \cdots
```

## Convergence test

**If** $\forall k\; u_k>0$, decreasing and $\lim_{n\to \infty} u_n = 0$,
**then**:

```math
\sum_{k=1}^n (-1)^{k - 1} u_k \text{ is converging}
```

:::note[Proof]

For odd-indexed elements:

```math
s_{2m+3} \le s_{2m+1} \le s_1 = u_1
```

For even-indexed elements:

```math
s_{2m+2} \ge s_{2m} \ge s_2 = u_1 - u_2
```

Combining these 2:

```math
0
\le
u_1 - u_2
\le
s_2
\le
s_{2m}
\le
s_{2m+1}
\le
s_1 = u_1
```

$s_{2m}$ is bounded above by $u_1$ and increasing. $s_{2m+1}$ is bounded below
by $0$ and decreasing. So both converges.

```math
\lim_{m\to \infty} (s_{2m+1} - s_{2m}) =
\lim_{m\to \infty} u_{2m + 1} = 0
```

```math
\implies
\lim_{m\to \infty} s_{2m+1} =
\lim_{m\to \infty} s_{2m} = s
```

Both converges to the same number.

:::
