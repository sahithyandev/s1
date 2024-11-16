---
title: Number Systems
slug: programming-fundamentals/b-book/number-systems
sidebar:
  order: 2
prev: true
next: true
---

A writing system for expressing numbers. Each number system defines a set of
symbols that each represent a specific value.

### Base (or radix)

Number of symbols defined by a number system.

## Commonly used number systems

- Base 10 - $0\text{ - }9$
- Base 2 - $0,1$
- Base 8 - $0\text{ - }7$
- Base 16 - $0\text{ - }9, \text{A - F}$

## Conversion between number systems

### 10 --> n

#### Integer part

- Repeatedly divide the number (and the quotients) by $n$ until reaching 1
- Write the remainders in reverse order

#### Fractional part

- Repeatedly multiply by $n$ until fractional part reaches 0
- Write the integer parts in normal order

### n --> 10

Multiply each digit by its positional value, and sum those values. Positional
value is $n^k$ where $k$ is the position.

### 2 --> 8

- Split the given binary number into length 3 parts (prepend 0s if required)
- Convert each part to octal
- Join those together

### 2 --> 16

- Split the given binary number into length 4 parts (prepend 0s if required)
- Convert each part to hexagonal
- Join those together

### 16 --> 2

Convert each digit to 4-bit binary and join them together.

### 8 --> 2

Convert each digit to 3-bit binary and join them together.

### 8 <--> 16

Convert the number to base 2 or 10 and then conver to the target base.

:::caution

These are required in s1:

- Addition, subtraction in base 2, 8, 16
- Multiplication, division in base 2

But I don't know how to include them in a easy-to-understand way. 🌝

:::

## Confusion about unit prefixes

In computing, the prefix _kilo_ —just like other prefixes— has been used to
refer either $2^{10}$ or $10^3$ depending on the context.

- $10^3$ - Marketing of disk capacities (by disk manufacturers)
- $2^{10}$ - Memory capacities, and file sizes, disk capacities by operating
  systems

To avoid this confusion, 2 unit prefixes are used while measuring amounts of
data.

- SI prefixes Defined by ISO. Based on powers of $10^3$. Examples: kilo, mega,
  giga.
- Binary prefixes Defined by IEC. Based on powers of $2^{10}$. Examples: kibi,
  mebi, gibi.
