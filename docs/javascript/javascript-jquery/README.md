# Javascript + Jquery Book

Overview - Breaking down some basic important concepts to remember about Javascript

### General Notes

### Objects

Can have:

- Properties
- Methods
- Events

<br>

Cont.

- Each property will have a name and a value. You can also call this "name" a "key"
- An event is like saying "Hey this just happened"
- You can respond to an Event
- Also you might want to think of Events as a way to interact with an object OR to notify when something needs to happen
- An event can be used to then fire off some sort of additional code or Method
  _Example_

```
Someone books a motel room online. The event might be the booking occuring, that event might trigger a method to run that would update the total number of rooms available
```

Methods can also interact with an Object. Updating or changing property values for example.

#### Objects

- Remember that JS is all about interacting with what you see on the screen

Types of Objects:

1. Window Object == The browser
1. Document Object == Current webpage that's loaded in the browser

- Object have properties and by identifying properties could be the way that you interact with the browser or page

<br>

Window Object Property Example == Location -> Which can grab the URL

```
window.location
```

Document Object Property Example == Title -> Which can grab the title of the page

```
document.title
```

<br>

Utilizing the Document Object can not only control the content that's seen but also control how a user interacts with it

### Variables

Looks like multiple vars can be declared and set on the same line:

- You use a comma to separate them
- You only have to use the `var` keyword once

_Example_

```
var price = 5, cost = 6;
```

<br>

Variables can also hold a reference to an html element

_Example_

```
var asdf = document.getElementById('cost');
```

<br>

REMEMBER ABOUT VARIABLES:

1. A custom variable name CANNOT have: Dashes
1. A custom variable name CANNOT have: Start with a number
1. Case sensitive

<br>

### Arrays

An array is a list of values

With an array you don't need to know how many items or values are in it

The values in the array don't need to be the same data type

#### Creating an Array

1. Using Square Brackets

_Example_

```
const colors;
colors = ['white', 'red', 'black'];
```

2. Using keyword "New" and Array()

_Example_

```
const colors = new Array
  ('white',
    'red',
    'black');
```

<br>

Each item in an Array has a number associated to it called either an index or a key

The first items index in an array starts with "0" and then goes on to "1, 2, 3..."

<br>

#### Accessing Array Values and setting to a variable

```
const singers = ['Bob', 'Georgie', 'Mike'];

const firstSinger = singers[0];
```
