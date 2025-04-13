---
title: Properties of Fluids
slug: fluid-mechanics/statics/properties-of-fluids
sidebar:
  order: 2
prev: true
next: true
---

## Mass Density

```math
\rho = \frac{\text{Mass}}{\text{Volume}} = \frac{m}{v}
```

At a point:

```math
\rho = \lim_{\delta v \to 0} \frac{\delta m}{\delta v}
```

### For liquids

Varies very slightly with temperature (negligible in calculations).

Example: Water

- $ 100\,\text{kgm}^{-3} $ - at $ 4\degree \text{C}$
- $ 995.7\,\text{kgm}^{-3} $ - at $ 30\degree \text{C}$

### For gases

Highly dependent on pressure & temperature.

## Specific Weight / Unit Weight

```math
\omega = \gamma = \frac{\text{Weight}}{\text{Volume}} = \frac{w}{v}
```

## Relative Density / Specific Density

```math
s = \sigma = \frac{\text{Density of the substance}}{\text{Density of standard
substance}}
```

For solids and liquids, water is the standard substance.

## Pressure

A force is exerted on all surfaces in contact with a fluid. A scalar.

```math
P = \frac{\text{Normal Force}}{\text{Area}} = \frac{F}{A}
```

## Vapour Pressure

Vaporisation is when evaporation happens at the free surface of a liquid.

Vapour Pressure is the pressure due to liquid vapour just above the free surface
of the liquid. Increases with temperature.

A liquid boils when:
$\text{vapour pressure} = \text{external pressure on the liquid}$ $ $

## Bulk Modulus

```math
k = \frac{\text{Change in pressure}}{\text{Change in volume, per volume}} =
-\cfrac{\Delta p}{\frac{\Delta v}{v}} = -v \frac{\text{d}p}{\text{d}v}
```

In terms of the density:

```math
k = \rho \frac{\text{d}p}{\text{d}\rho}
```

High bulk modulus means hard to compress.

## Surface Tension

```math
\sigma = \frac{\text{Tensile Force}}{\text{length}} = \frac{F}{L}
```

Negligible in many applications. Considered in small-scale applications. Causes
capillary effect.

## Viscosity

The force resisting the flow of a liquid.

In liquids, viscosity is mainly caused by inter-molecular attraction. Decreases
slightly with temperature.

In gases, mainly due to momentum exchange between molecules. Increases with
temperature.

### Newton's law of viscosity

In straight & parallel flow, the shear stress $\tau$ (as in $\frac{F}{A}$)
between adjacent layers is proportional to the velocity gradient perpendicular
to the layers.

```math
\tau \propto \frac{\delta v}{\delta y} (= \text{velocity gradient})
```

As $ \delta y \to 0 $, $ $

```math
\tau = \mu \frac{\partial v}{\partial y}
```

### Coefficient of dynamic viscosity

Above, $ \mu $ is **coefficient of dynamic viscosity** or **coefficient of
absolute viscosity** or **coefficient of viscosity**.$ $

Fluids can be divided into 2 types:

- $ \mu $ is a constant: Newtonian fluid
- $ \mu $ is not a constant: Non-newtonian fluid (**not** focused on for s1)

### Coefficient of kinematic viscosity

```math
v = \frac{\mu}{\rho}
```
