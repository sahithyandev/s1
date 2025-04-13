---
title: Inductors
slug: electrical-fundamentals/basics/inductors
sidebar:
  order: 7
prev: true
next: true
---

When there is a current in the inductor, a magnetic field is created. Any change
in current causes the magnetic field to change, this in turn induces a voltage
across the inductor that opposes the original change in current. The polarity of
the induced magnetic field opposes the change in current.

A length of wire turned into a coil works as an inductor.

## Inductance (L)

A property of electrical conductors. Measured in henries ($H$). When the current
through a conductor changes, an electromotive force (emf) is produced. the
magnetic field around it changes. $ $

For an ideal inductor:

```math
v = -L \frac{\text{d}i}{\text{d}t}
```

Here:

- $ v $ - voltage difference across the inductor
- $ i $ - current through the inductor

## Energy stored

Suppose current across an inductor rises from $0$ to $ i $ during a time period
of $t$ seconds.

```math
e = \int_{0}^{t} p\,dt = \int_{0}^{t} vi\,dt = L \int_{0}^{i} i\,di
```

```math
E = \frac{1}{2}LI^2
```
