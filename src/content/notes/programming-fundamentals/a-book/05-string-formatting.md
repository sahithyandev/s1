---
title: String formatting
slug: programming-fundamentals/a-book/string-formatting
sidebar:
  order: 5
prev: true
next: true
---

Techniques used to create formatted strings by embedding expressions within
string literals. Here are the main methods:

### `%` Operator

Older and less preferred now.

```python
name = "Alice"
age = 30
formatted_string = "Name: %s, Age: %d" % (name, age)
print(formatted_string) # Name: Alice, Age: 30
```

### `str.format()` Method

More flexible and readable than the `%` operator.

```python
name = "Bob"
age = 25
formatted_string = "Name: {}, Age: {}".format(name, age)
print(formatted_string) # Name: Bob, Age: 25
```

### f-strings

Most concise and readable way to format strings. Expressions can be embedded
inside string literals using curly braces `{}`. Supports more complex
expressions as well.

```python
name = "Charlie"
age = 35
formatted_string = f"Name: {name}, Age: {age}"
print(formatted_string) # Name: Charlie, Age: 35
```

```python
import math
formatted_string = f"The value of pi is approximately {math.pi:.4f}"
print(formatted_string) # The value of pi is approximately 3.1416
```
