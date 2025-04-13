---
title: Python Programming
slug: programming-fundamentals/a-book/python-programming
sidebar:
  order: 2
prev: true
next: true
---

Python is an interpreted, high-level, dynamic language.

## Variables and Data Types

Python supports various data types including integers, floats, strings, and
booleans.

### Boolean

```py
y = True
z = False
```

### Numericals

```python
# Integer
x = 5

# Float
y = 3.14

# Complex
z = 3 + 4j # j is used instead of i
```

### String

```py
name = "Alice"
```

Strings can be sliced.

```python
text = "Hello World"

# Basic slicing: text[start:end]
print(text[0:5])    # "Hello" (index 0 to 4)
print(text[6:])     # "World" (index 6 to end)
print(text[:5])     # "Hello" (start to index 4)

# Using step: text[start:end:step]
print(text[::2])    # "HloWrd" (every 2nd character)
print(text[::-1])   # "dlroW olleH" (reverse string)
```

## Operator precedence

| Operator                                        | Description                              |
| ----------------------------------------------- | ---------------------------------------- |
| `**`                                            | Exponentiation                           |
| `~`, `+`, `-`                                   | Complement, unary plus, and minus        |
| `*`, `/`, `%`, `//`                             | Multiply; divide, modulo, floor division |
| `+`, `-`                                        | Addition and subtraction                 |
| `>>`, `<<`                                      | Right and left bitwise shift             |
| `&`                                             | Bitwise `AND`                            |
| `^`, `\|`                                       | Bitwise `XOR` and `OR`                   |
| `<=`, `<`, `>`, `>=`                            | Comparison operators                     |
| `==`, `!=`                                      | Equality operators                       |
| `=`, `%=`, `/=`, `//=`, `-=`, `+=`, `*=`, `**=` | Assignment operators                     |
| `is`, `is not`                                  | Identity operators                       |
| `in`, `not in`                                  | Membership operators                     |
| `not`, `or`, `and`                              | Logical operators                        |

## Control Structures

Python uses indentation to define blocks of code.

### Selection

```python
if x > 0:
		print("x is positive")
elif x < -2:
		print("x is lesser than -2")
else:
		print("x is between -2 and 0 (inclusive)")
```

`elif` and `else` sections are optional.

`match-case` syntax can be used for pattern matching.

```python
point = (0, 0)
match point:
	case (0, 0):
		print("Origin")
	case (0, y):
		print(f"Y axis at {y}")
	case (x, 0):
		print(f"X axis at {x}")
	case (x, y):
		print(f"Point at {x}, {y}")
```

### Repetition

Executing a block of code multiple times.

```python
# For loop
for i in range(5):
	print(i) # i ranges from 0 (inclusive) to 5 (exclusive)
```

In `for` loop, the looping variable is automatically incremented.

```py
# While loop
count = 0
while count < 5:
	print(count)
	count += 1
```

### Subprogram (functions)

A reusable block of code that is used to perform a single action. Defined using
the `def` keyword, followed by its name and `()`.

```python
def greet(name):
		return f"Hello, {name}!"

print(greet("Alice"))
```

## Lists

Lists are ordered collections of items. The items can be of any type. Items are
indexed sequentially starting from 0.

```python
fruits = ["apple", "banana", "cherry"]
print(fruits[0])  # Output: apple

# Adding an item to the list
fruits.append("date")

# Removing an item from the list
fruits.remove("banana")

# Accessing the last item
print(fruits[-1])  # Output: date

# Slicing the list
print(fruits[1:3])  # Output: ['cherry', 'date']

# Printing all the elements
## 1st way
for index in range(len(fruits)):
	print(fruits[index]) # index is a number between 0 and len(fruits)
## 2nd way
for fruit in fruits:
	print(fruit) # fruit is an item of the list

```

## Tuples

Similar to lists but immutable (cannot be changed after creation). `()` are used
instead of `[]`.

```python
# Creating a tuple
coordinates = (4, 5)
print(coordinates[0])  # Output: 4

# Tuple with different data types
mixed_tuple = (1, "hello", True)

# Cannot modify tuple
# This will raise an error:
# coordinates[0] = 10

# Creating tuple with one element
single_tuple = (1,)  # Note the comma

# Multiple assignment using tuple
x, y = coordinates
print(x)  # Output: 4
print(y)  # Output: 5
```

Commonly used for returning multiple values from functions or when you want to
ensure data cannot be modified.

## Dictionary

Stores key-value pairs.

```python
student = {
		"name": "Alice",
		"age": 21,
		"is_student": True
}

print(student["name"])  # Output: Alice

# Adding a new key-value pair
student["major"] = "Computer Science"

# Updating an existing value
student["age"] = 22

# Removing a key-value pair
del student["is_student"]

# Accessing all keys
print(student.keys())  # Output: dict_keys(['name', 'age', 'major'])

# Accessing all values
print(student.values())  # Output: dict_values(['Alice', 22, 'Computer Science'])
```

There are a handful of
[built-in functions in Python](/programming-fundamentals/a-book/built-in-functions/).

## Error Handling

Python uses try-except blocks for error handling.

```python
try:
	# Code that might raise an exception
	x = 1 / 0
except ZeroDivisionError:
	print("Cannot divide by zero!")
except Exception as e:
	print(f"An error occurred: {e}")
else:
	# Runs if no exception occurs
	print("Operation successful")
finally:
	# Always runs
	print("Cleanup code")
```

Common exceptions:

- `ValueError`: Invalid value
- `TypeError`: Invalid operation on types
- `FileNotFoundError`: File doesn't exist
- `IndexError`: List index out of range
- `KeyError`: Dictionary key not found

Exceptions can be raised when required.

```python
def divide(a, b):
	if b == 0:
		raise ValueError("Division by zero!")
	return a / b
```
