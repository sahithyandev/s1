---
title: AC Theory
slug: electrical-fundamentals/basics/ac-theory
sidebar:
  order: 10
prev: true
next: true
---

:::note

Only sinusoidal AC supply are considered in s1.

:::

Say $v$ is alternating as in $v=V_{m}\sin(\omega{t}+\phi)$.

### Why AC instead of DC?

- Production of AC is less expensive
- AC devices are efficient and require less maintenance

## Peak value

Maximum instantaneous value. $V_m$ in the example. $ $

## Peak-to-peak value

Maximum variation between maximum positive and negative instantaneous values.
For a sinusoidal waveform, this is twice the peak value. $2V_m$ in the example.
$ $

## Mean value

```math
v_{\text{mean}}=
\frac{1}{T}
\int_{T_0}^{T_0+T}{v(t)\text{d}t}
```

Here:

- $T_0$ is the starting time of a cycle
- $T$ is the periodic time

For any symmetric waveform, mean value is $0$. $ $

## Average value

Mean value of the rectified version of a waveform.

For symmetric waveforms, half-cycle mean value is taken as the average value.

```math
v_{\text{average}}=
\frac{2}{T}
\int_{T_0}^{T_0+\frac{T}{2}}{v(t)\,\text{d}t}
```

For sinusoidal waveforms, from the example:

```math
v_{\text{average}}
=
\frac{2}{T}
\int_{T_0}^{T_0+\frac{T}{2}}{V_{m}\sin(\omega{t}+\phi)\,\text{d}t}
```

```math
=
\frac{2}{\pi}V_m
=
0.637V_m
```

## rms value

Aka. effective value. rms value is always used to express the magnitude of a
time varying quantity.

```math
v_{\text{rms}}=
\sqrt{
\frac{1}{T}
\int_{T_0}^{T_0+T}{v(t)^2\,\text{d}t}
}
```

For sinusoidal waveforms:

```math
v_{\text{rms}}=
V_m
\sqrt{
\frac{1}{T}
\int_{T_0}^{T_0+T}{\sin^2{(\omega{t}+\phi)}\,\text{d}t}
}
=
\frac{V_m}{\sqrt{2}}
```

:::note

$i_{\text{rms}}$ is the equivalent current that dissipates same amount of power
across a resistor $R$ in time $T$ as $i(t)$. Similar for voltage.

:::

## Instantaneous power

```math
P=vi=i^2R
```

## Form factor

```math
\text{Form factor}
=
\frac{\text{rms value}}{\text{average value}}
=
{\frac{V_m}{\sqrt{2}}}\times{\frac{\pi}{2{V_m}}}
=1.111
```

## Peak factor

```math
\text{Peak factor}
=\frac{\text{peak value}}{\text{rms value}}
={V_m}\times{\frac{\sqrt{2}}{V_m}}
=1.412
```
