---
title: Built-in Functions
slug: programming-fundamentals/a-book/built-in-functions
sidebar:
  order: 4
prev: true
next: true
---

Only the required built-in functions for S1 are mentioned here.

## `bin`

Converts an integer to a binary string.

```python
print(bin(10))  # Output: '0b1010'
```

## `chr`

Returns the string representing a character for the given Unicode code.

```python
print(chr(97))  # Output: 'a'
```

## `complex`

Creates a complex number.

```python
print(complex(1, 2))  # Output: (1+2j)
```

## `dict`

Creates a dictionary.

```python
print(dict(a=1, b=2))  # Output: {'a': 1, 'b': 2}
```

## `float`

Converts a number or string to a float.

```python
print(float("3.14"))  # Output: 3.14
```

## `hex`

Converts an integer to a hexadecimal string.

```python
print(hex(255))  # Output: '0xff'
```

## `id`

Returns the identity of an object.

```python
print(id(5))  # Output: (an integer)
```

## `int`

Converts a number or string to an integer.

```python
print(int("10"))  # Output: 10
```

## `len`

Used to return the number of items in an object. Commonly used with sequences
(like lists, tuples, and strings) and collections (like dictionaries and sets).

```python
# Example with a list
fruits = ["apple", "banana", "cherry"]
print(len(fruits))  # Output: 3

# Example with a string
name = "Alice"
print(len(name))  # Output: 5
```

## `max`

Returns the largest item.

```python
print(max(1, 2, 3))  # Output: 3
```

## `min`

Returns the smallest item.

```python
print(min(1, 2, 3))  # Output: 1
```

## `open`

Opens a file and returns a file object. The `open` function is fundamental for
file operations in Python.

Basic syntax: `open(filename, mode='r', encoding=None)`

Common modes:

- `'r'`: Read (default)
- `'w'`: Write (overwrites)
- `'a'`: Append
- `'b'`: Binary mode

```python
# Reading a file
with open('file.txt', 'r') as f:
	content = f.read()
	print(content)

# Writing to a file
with open('output.txt', 'w') as f:
	f.write('Hello, World!')

# Appending to a file
with open('log.txt', 'a') as f:
	f.write('New log entry\n')
```

When `with` statement is used, the file will be automatically closed after use.
If not, the file has to be closed using `f.close()`.

## `ord`

Returns the Unicode code for a given character.

```python
print(ord('a'))  # Output: 97
```

## `pow`

Returns the power of a number.

```python
print(pow(2, 3))  # Output: 8
```

## `print`

Prints to the console.

```python
print("Hello, World!")  # Output: Hello, World!
```

## `range`

Used to generate a sequence of numbers. Commonly used in `for` loops to iterate
over a sequence of numbers. The `range` function can take 1, or 2, or 3
arguments, similar to
[string slicing](/programming-fundamentals/a-book/python-programming/#string).

1. `range(stop)`: Generates numbers from 0 to `stop - 1`.
2. `range(start, stop)`: Generates numbers from `start` to `stop - 1`.
3. `range(start, stop, step)`: Generates numbers from `start` to `stop - 1`,
   incrementing by `step`.

Here are some examples:

```python
# Using range with one argument
for i in range(5):
	print(i)  # Output: 0, 1, 2, 3, 4

# Using range with two arguments
for i in range(2, 5):
	print(i)  # Output: 2, 3, 4

# Using range with three arguments
for i in range(1, 10, 2):
	print(i)  # Output: 1, 3, 5, 7, 9
```

The `range` function returns an immutable sequence type, which can be converted
to a list if needed:

```python
numbers = list(range(5))
print(numbers)  # Output: [0, 1, 2, 3, 4]
```

## `reversed`

Returns a reversed iterator.

```python
print(list(reversed([1, 2, 3])))  # Output: [3, 2, 1]
```

## `round`

Rounds a number to a specified number of digits.

```python
print(round(3.14159, 2))  # Output: 3.14
```

## `set`

Creates a set.

```python
print(set([1, 2, 3]))  # Output: {1, 2, 3}
```

## `str`

Converts an object to a string.

```python
print(str(123))  # Output: '123'
```

## `sum`

Returns the sum of a collection.

```python
print(sum([1, 2, 3]))  # Output: 6
```

## `tuple`

Creates a tuple.

```python
print(set([1, 2, 3]))  # Output: {1, 2, 3}
```

## `type`

Returns the type of an object.

```python
print(type(123))  # Output: <class 'int'>
```
