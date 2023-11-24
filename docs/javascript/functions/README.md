# Javascript | Functions [draft]

Overview - A way to store steps that will typically result in returning a value

### Parts of Function

1. Name
1. Parameters (parentheses) == When input values are needed to perform a function
1. Code Block (curly brackets) == The area of the function that houses the lines of code, statements, tasks, or steps that will most likely result in returning some sort of value

**Example**

```javascript
function getHelloMessage(name) {
  const currentName = name;
  const message = "Well hello";
  const totalMessage = message + currentName;
  return totalMessage;
}
```
