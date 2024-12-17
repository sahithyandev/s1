---
title: Interning
slug: programming-fundamentals/a-book/interning
sidebar:
  order: 3
prev: true
next: true
---

Interning is re-using objects of equal value on-demand instead of creating new
objects. This is done for memory efficiency. Frequently used for numbers and
strings in different programming languages.

```py
a = 120
b = 120

print(a is b) # True

c = 2000
d = 2000

print(c is d) # False
```

In the above code, `120` is intered by the Python interpreter but not `2000`.
Python's integer interning is done only for numbers in the range: `[-5, 256]`

Python interpreter also interns small strings.

```py
a = "abcd"
b = "abcd"

print(a is b) # True

# Both text are the same
c = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur perferendis iste ipsa natus placeat. Nostrum quia maiores voluptatem dolor. Alias, laborum deleniti molestias, impedit atque tempore animi culpa fugiat iste illo doloremque debitis ut quibusdam ipsa, aliquam accusantium. Porro architecto non, excepturi minima magnam sunt iusto culpa voluptas reiciendis pariatur nobis maxime laudantium quod, aspernatur harum dolor unde eveniet tempora laboriosam consectetur delectus dolores vero ad quaerat. Excepturi libero, quo nulla amet unde suscipit praesentium harum tempora sunt dolorem ipsam, modi beatae nesciunt illo fuga esse totam debitis repellendus dignissimos molestiae, aliquam quod quam mollitia. In optio eum odit temporibus."
d = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur perferendis iste ipsa natus placeat. Nostrum quia maiores voluptatem dolor. Alias, laborum deleniti molestias, impedit atque tempore animi culpa fugiat iste illo doloremque debitis ut quibusdam ipsa, aliquam accusantium. Porro architecto non, excepturi minima magnam sunt iusto culpa voluptas reiciendis pariatur nobis maxime laudantium quod, aspernatur harum dolor unde eveniet tempora laboriosam consectetur delectus dolores vero ad quaerat. Excepturi libero, quo nulla amet unde suscipit praesentium harum tempora sunt dolorem ipsam, modi beatae nesciunt illo fuga esse totam debitis repellendus dignissimos molestiae, aliquam quod quam mollitia. In optio eum odit temporibus."

print(c is d) # False
```

Strings in python can be manually interned using `sys.intern` function.

```py
a,b=8,8
c=8
d=8
```

Likewise, in the above code, only 1 integer object is created.
