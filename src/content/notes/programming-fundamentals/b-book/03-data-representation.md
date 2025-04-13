---
title: Data Representation
slug: programming-fundamentals/b-book/data-representation
sidebar:
  order: 3
prev: true
next: true
---

There are 2 types of data in computers.

Computer memory can be thought of an array of memory cells that each store 1
bit. Total number of bits a memory can hold is limited.

### Most Significant Bit (MSB)

In a $n$-bit memory, memory cell at the $n-1$-th position is the most
significant bit. Or left-most bit.

### Least Significant Bit (LSB)

In a $n$-bit memory, memory cell at the $0$-th position is the least significant
bit. Or right-most bit.

### Number of states

A $n$-bit memory can denote $2^n$ different states. Each state can be mapped to
some information.

### Word

In **computing**, a word is a fixed-size datum handled as a unit by the
[instruction set](/programming-fundamentals/c-book/cpu-instructions/) or
hardware of a processor.

### Word size

Size of a processor's
[word](/programming-fundamentals/b-book/data-representation/#word).

## Representation methods

:::note

In s1, representation of integers, floating point numbers, strings are studied.

:::

### Numerical

Represents quantifiable and countable things. For example: integers,
floating-point numbers.

Integers are considered in 2 sections: signed and unsigned integers.

- [Intgers](/programming-fundamentals/b-book/integers/)
- [Floating-point numbers](/programming-fundamentals/b-book/floating-point-numbers/)

### Non-numerical

Represents all other data other than numerical. For example: text, images,
videos, phone numbers.

- [Strings](/programming-fundamentals/b-book/strings/)
