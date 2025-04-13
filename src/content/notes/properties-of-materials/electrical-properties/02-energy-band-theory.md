---
title: Energy Band Theory
slug: properties-of-materials/electrical-properties/energy-band-theory
sidebar:
  order: 2
prev: true
next: true
---

In every atom, electrons occupy discrete energy levels in atomic orbitals,
arranged into shells and subshells. In an isolated atom, electrons occupy
well-defined energy states.

When $N$ atoms are brought together in a solid, each discrete energy levels will
split to $N$ levels, which are closely spaced. A set of closely spaced energy
levels form an energy band. Multiple energy bands are created.

## Energy bands in a solid

- **Valence band**: The highest energy band that can be occupied by electrons at
  $0\,\text{K}$.
- **Conduction band**: The empty band just above the valence band.

At higher temperatures, electrons which have sufficient energy can jump to
conduction band. Electrons can move freely through the material when they are in
the conduction band.

## Fermi Energy

The energy of the highest electron orbital occupied at $0\,\text{K}$. $ $

In $0\,\text{K}$, electrons settle into lowest available energy states and build
a _Fermi Sea_ of electron energy states. Fermi energy is the surface of this sea
and no electron has energy to rise above this surface. $ $

## Fermi Level

The energy level at which has $50\%$ probablity for electron occupancy. Fermi
level is located at the center between valence band and conduction band for pure
elements. $ $

Fermi level of a material affects its electrical properties.

If the Fermi level is close to conduction band, it will be easier for electrons
in the valence band to transition into the conduction band.

For an electron to become free, it must be excited or promoted into one of the
empty and available energy states above $E_f$. In metals, this energy is very
small (or negative). In semiconductors and insulators, this energy is high. $ $

## Fermi-Dirac Distribution

In a system which is in thermodynamic equilibrium, the probability of finding an
electron in a single energy state $E_i$ at temperature $T$ is given by the
Fermi–Dirac (F–D) distribution.

```math
f(E_i)=\frac{1}{\exp{\Big(\frac{E_i-E_f}{K_BT}}\Big)+1}
```

Here:

- $E_f$ - Fermi level
- $E_i$ - Energy of the $i$th energy state
- $K_B$ - Boltzmann constant
- $T$ - Absolute temperature
- $\exp()$ - exponent function

Fermi-Dirac distribution of Fermi level is $0.5$. From this equation, all
materials are insulators at $T=0$.

### At T=0

- $E>E_f \implies f(E)=0$: No electrons above fermi level
- $E<E_f \implies f(E)=1$: All electrons are below fermi level

### At T>0

There is more chance that the electrons can be available in conduction band. The
chance increases with increasing temperature.

## Band gap

The energy gap between conduction band and valence band. Aka. forbidden energy
gap.
