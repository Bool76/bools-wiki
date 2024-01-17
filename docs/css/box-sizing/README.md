# CSS | Box-Sizing

Overview - The `box-sizing` property sets how the total width and height of an element is calculated - changing it from it's default behavior

<br> 

### Content Box's Dimension Calculations by Default


By default when you define a content box's width and height and if a border or padding is a part of that box, then those attributes will be included in those dimensions. 

*Example*
```
.example-box {
    width: 100px;
    height: 100px; 
    padding: 10px;
}
```
**Breakdown**
- A width and height of `100px` has been defined
- Since a `10px` padding is also defined, that `10px` is going to be included as getting us there to that width and height of `100px`
- This means that the actual width and height seen will be 90px by 90px 

<br>

> :memo: **Note:** Use the `box-sizing` attribute in order to change how dimension calcuations are done

<br><br>

### Box-Sizing Values
1. content-box
1. border-box

<br><br>

### "content-box"


<br><br>

### "border-box"

<br><br>

### Box-Sizing's Affect on Flexbox