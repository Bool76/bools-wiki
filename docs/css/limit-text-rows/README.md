# Limit Rows of Text

Summary - How through CSS do you limit the lines / rows of text

### Option 1
Use "line-clamp"

```
.text {
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
           line-clamp: 2; 
   -webkit-box-orient: vertical;
}
```

### Option 2

Use "max-height"

```
.multipromo-slider-container p {
    font-family: Roboto-Regular,Helvetica,Arial,sans-serif;
    color: #000;
    font-size: 16px;
    line-height: 30px;
    width: 250px;
    overflow: hidden;
    max-height: 5.5em;
}
```
