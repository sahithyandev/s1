---
title: Inductors
slug: electrical-fundamentals/inductors
sidebar:
  order: 8
prev: true
next: true
---

When there is a current in the inductor, a magnetic field is created. Any change
in current causes the magnetic field to change, this in turn induces a voltage
across the inductor that opposes the original change in current.

A length of wire turned into a coil works as a inductor.

## Inductance (L)

For an ideal inductor:

```math
v = L \frac{\text{d}i}{\text{d}t}
```

Here the $ v $ is the voltage difference between the inductor, and $ i $ is the
current through the inductor.

The polarity is such as to oppose the change in current.

## Energy stored

Assume voltage across an inductor rises from $0$ to $ i $ during a time period
of $t$ seconds.

```math
e = \int_{0}^{t} p\,dt = \int_{0}^{t} vi\,dt = L \int_{0}^{i} i\,di
```

```math
E = \frac{1}{2}Li^2
```
