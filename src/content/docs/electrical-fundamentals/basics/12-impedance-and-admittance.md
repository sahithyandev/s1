---
title: Impedance & Admittance
slug: electrical-fundamentals/basics/impedance-and-admittance
sidebar:
  order: 12
prev: true
next: true
---

### Impedance (Z)

```math
Z=\frac{V}{I}=R+jX
```

Here:

- $R$: Resistance
- $X$: Reactance

:::note

When mentioning the reactance of an element, the $j$ should not be included. $ $

:::

### Admittance (Y)

Inverse of impedance.

```math
Y=\frac{1}{Z}=\frac{I}{V}=G+jB
```

Here:

- $G$: Conductance
- $B$: Susceptance

From the definitions:

```math
G=\frac{R}{R^2+X^2}
\;\land
B=-\frac{X}{R^2+X^2}
```

## For simple circuit elements

### Resistor

Let $i=I_m\sin{(\omega t + \phi_0)}$ is applied across a resistor with
resistance $R$. From Ohm's law:

```math
v=RI_m\sin{(\omega t + \phi_0)}
\implies
Z_R = R
```

No changes in frequency, phase angle. $v$ is in phase with $i$. $R$ doesn't have
reactance.

### Inductor

Let $i=I_m\sin{(\omega t + \phi_0)}$ is applied across an inductor with
inductance $L$.

```math
v=L\omega I_m\sin{\bigg(\omega t + \Big(\phi_0+\frac{\pi}{2}\Big)\bigg)}
\implies
Z_L = j\omega L
```

Reactance of the inductor is $X_L=L\omega$. $ $

:::note

$v$ leads $i$ by $\frac{\pi}{2}$. No changes in frequency.

:::

### Capacitor

Let $i=I_m\sin{(\omega t + \phi_0)}$ is applied across an capacitor with
capacitance $c$.

```math
v=\frac{I_m}{c\omega}
\sin{(\omega t + (\phi_0 - \frac{\pi}{2}))}
\implies
Z_C = -j\frac{1}{c\omega}
```

Reactance of the capacitor (capacitive reactance) is $X_c=-\frac{1}{c\omega}$.
$
$

:::note

$v$ lags $i$ by $\frac{\pi}{2}$. No changes in frequency.

:::

:::note

If $v$: $ $

- lags $i$ - circuit is capacitive
- leads $i$ - circuit is inductive

:::

## For complex circuit elements

### For a series circuit

Resultant impedance is the sum of each component's impedance.

### For a parallel circuit

Resultant admittance is the sum of each component's admittance.
