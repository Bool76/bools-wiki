# Flex | Single Row

Summary - How to limit one item per row / single row in the Flexbox framework

<br/>

### Overview

1. Center the main container in the page
1. Allow content items to wrap to the next row
1. Set a 100% on the content items indicating only one per row

<br>

### General Settings

#### Main Flex Container

```
.main-flex-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
}
```

**Explanation**

`display: flex` == Sets the main container as a flexbox display container  
`justify-content: center` == Centers the main container in the center of the page  
`flex-wrap: wrap` == Defines whether the flex items in the main container are forced in a single line or can be flowed into multiple lines. `wrap` means it will flow to mulitple lines. If set to `nowrap` it would be one single line.  
`text-align: center` == Will center the content of the item containers to the center of the page (NOTE: I don't know if there's a more Flexbox friendly way of doing this)

<br>

*Screenshot*  
![Image from images folder](~@source/images/css/flexbox/flex-single-row/flex-single-row_justify-center_example.png)

<br>

#### Flex Item(s)
```
.flex-item {
    flex-basis: 100%;
}
```

**Explanation**
`flex-basis:100%` == Percentage identifying how many items per row. `100%` identifies only one item can be per row.  

<br>

*Screenshot*  
![Image from images folder](~@source/images/css/flexbox/flex-single-row/flex-single-row_flex-basis_example.png)