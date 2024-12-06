---
title: Echelon Form
slug: mathematics/matrices/echelon-form
sidebar:
  order: 9
prev: true
next: true
---

A matrix is in row echelon form (or just "echelon" form) **iff**:

- All rows having only zero entries are at the bottom.
- For all row that does not contain entirely zeros, the first non-zero entry
  is 1.
- For 2 successive non-zero rows, the leading 1 in the higher row is further
  left than the leading 1 in the lower row.

The process of reducing the augmented matrix to row Echelon form is known as
**Gaussian elimination**.

## Column echelon form

A matrix $A$ is in column echelon form if $A^{\text{T}}$ is in row echelon form.
