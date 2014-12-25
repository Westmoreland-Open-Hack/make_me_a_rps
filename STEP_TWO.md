### Select an answer using a Random Selection

Now we are going to take a look at your languages concept of collections. A collection is a group of similar data that may need to be sorted or otherwise processed together.
The most common form of a collection is an array. Arrays are commonly of a fixed size but their implementation in your language may not require you to declare a size so make sure you read up about the nature of arrays in your language.
The one important fact about arrays is their order is guaranteed. This means that the order in which items are placed in an array is the same order they will be able to be accessed.
Arrays are also indexed so each item in an array is given a identifier number starting with the first item being 0 and continuing to size - 1 of the array where the size is the number of stored elements.

There are other kinds of collections and you can feel free to use them just as long as we can assume that the collection you use is `order guaranteed`.

### Arrays!

If you have never seen an array this is for you. Lets consider a short array of letters

```
index: | 0 | 1 | 2 | 
data:  | A | B | C |
```

In the above example we see that an array is a series of cells identified by indices. So the index of `A` is `0` and the index of `C` is `2`.

In this case all of the elements or data in the array are unique but this is not required so lets look at a corrolary example.

```
index: | 0 | 1 | 2 | 3 |
data:  | A | B | C | A |
```

Because the data is not unique anymore lets reverse how we describe each cell of the array. Instead of identifiying the index at a value we will refer to the value at an index.
The value at index `0` is `A` just like it was before but the value at index `3` is also `A`.

Lets talk about how we can programatically read and change data in an array. Like the last example we usually access an array through its indicies. The format that is most common when accessing elements of an array uses the `[]` symbols.
Called bracket notation data in our sample array can be read given we assume our array is stored under the variable `arr`.

```
arr[0]
  => A
```

This gets the value of the array at index `0`

```
arr[3] = D
```

This sets the value of the array at index `3` to `D` you will notice that we have overwritten the value that was there before by doing this. So the whole array is now.

```
index: | 0 | 1 | 2 | 3 |
data:  | A | B | C | D |
```

These examples have been a little nieve about arrays so lets expand further. At the start I mentioned that we normally have to know the size of an array before we start working. Lets move on with that assumption to the next example of a array of 10 elements.

```
arr = new Array(10)
```

This creates an new array named `arr` with the size of `10`. You will have to explore your own languages mechanism for creating arrays so treat this an a sudo language that is similar but not the same as yours.
This array looks like this:

```
index: | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
data:  | _ | _ | _ | _ | _ | _ | _ | _ | _ | _ |
```

First, the `_` just means the element is empty. When we create an array of a specified size normally it allocates some memory of that number of elements that are filled with garbage data for us `_`.
Second, remember that array indices start at `0` so the first index is `0` and the last index is `9`. 0 through 9 is 10 numbers so try and remember it because it is often hard to get used to treating number systems as starting from `0` instead of `1`.

To set some values on our array we use `bracket` notation:

```
arr[0] = A
arr[5] = B
arr[9] = C
arr[9]
  => C
```

So our array looks like this:

```
index: | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
data:  | A | _ | _ | _ | _ | B | _ | _ | _ | C |
```

### Wow that is a lot so lets make something finally!

