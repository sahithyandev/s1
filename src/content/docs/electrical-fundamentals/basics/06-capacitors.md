---
title: Capacitors
slug: electrical-fundamentals/basics/capacitors
sidebar:
  order: 6
prev: true
next: true
---

Made of two conductive plates separated by a
[dielectric](/properties-of-materials/electrical-properties/dielectric-behavior/)
layer.

In an ideal capacitor, the charge imbalance $ Q $ is proportional to the voltage
$ V $ across the plates.

```math
Q = CV
```

The proportionality constant is the capacitance ($ C $), in terms of physical
dimensions: $ $

```math
C = \frac{\epsilon A}{d}
```

Here:

- $\epsilon$: permittivity of the material in-between
- $ d $: distance between the plates
- $ A $: area of a plate

## v and i

Current $ i $ passing through the capacitor and the voltage $ v $ across the
capacitor are related by:

```math
i = C \frac{\text{d}v}{\text{d}t}
```

## Energy stored

Suppose voltage across an initially uncharged capacitor rises from $0$ to $ V $
during a time period of $ t $.

```math
e = \int_{0}^{t} p\,dt = \int_{0}^{t} vi\,dt = C \int_{0}^{v} v\,dv
```

```math
E = \frac{1}{2}CV^2
```
