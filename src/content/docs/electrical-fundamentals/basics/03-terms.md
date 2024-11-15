---
title: Common Terms
slug: electrical-fundamentals/basics/terms
sidebar:
  order: 3
prev: true
next: true
---

## Branch

A branch represents a single element, such as a resistor or a battery.

## Node

A node is the point connecting more than 1 branches. Denoted by a dot.

:::note

All points in a circuit that are connected directly by ideal conductors can be
considered to be a single node.

:::

## Two terminal element

An element connected to two nodes. Branches are two terminal elements.

## Loop

A loop is a closed path through a circuit in which no node is encountered more
than once except the start/finish node.

## Mesh

A mesh is a loop without having other loops inside it. Subset of loops.

![Common Terms Explanation](/electrical/common-terms-explanation.jpg)

## Connection types

### Delta connection

![Delta connection](/electrical/delta-connection.jpg)

- Doesn't have a neutral wire. Neutral point is imaginary.
- Delivers more power

```math
V_P = V_L
\;\;\;
\land
\;\;\;
I_L = \sqrt{3} I_P
```

### Star connection

![Star connection](/electrical/star-connection.jpg)

```math
I_P = I_L
\;\;\;
\land
\;\;\;
V_L = \sqrt{3} V_P
```

### Delta-Star conversion

![Delta-Star conversion](/electrical/delta-star-conversion.jpg)

#### Delta to Star

```math
R_{\text{A}} = \frac{R_\text{AB} \times R_\text{AC}}{R_\text{AB} + R_\text{BC} + R_\text{AC}}
```

$R_\text{B}, R_\text{C}$ can be found similarily. $ $

#### Star to Delta

```math
R_{\text{AB}} = \frac{(R_\text{A} \times R_\text{B}) + (R_\text{B}\times R_\text{C}) + (R_\text{C} \times R_\text{A})}{R_\text{C}}
```

$R_\text{BC}, R_\text{AC}$ can be found similarily. $ $
