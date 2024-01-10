# CSS | Flexbox

Overview - [draft] The basics of how to use Flexbox

#### When to use it

Better for one dimensional applications. If you want something to work with more rows then I would checkout Flex Grid.

<br/>

### Basic Concepts

**Flexbox Container** - Not an offical term but will be used to reference the main container for Flexbox

**Flex Items** - All objects (divs, buttons, etc) inside of a Flexbox container become _Flex Items_

<br/>

### How to Setup

1. A main Flexbox container must be selected
1. The main Flexbox container must have a display type of `flex`

```
display: flex;
```

3. All of the items in the main Flexbox container will become "flex items"

<br/><br>

### Attributes

| Attribute       | Value         | Location            | Description                                                                                               |
| --------------- | ------------- | ------------------- | --------------------------------------------------------------------------------------------------------- |
| display         | flex          | Main flex container | Sets container as a flex type and it's children as flex items                                             |
| flex-direction  | row           | Main flex container | Arranges flex items in a row format (default)                                                             |
|                 | column        |                     | Arranges flex items in a column format                                                                    |
| flex-grow       | 0             | Flex Items          | All flex item sizes will vary depending on their content                                                  |
|                 | 1             |                     | All flex item sizes will be the same size in order to fill up the entire size of the Main Flex container  |
|                 | 2             |                     | When you want only 2 flex items per row                                                                   |
|                 | _mixed_       |                     | Individual Flex Items can have different number values. This changes the sizes on those individual items. |
| justify-content | flex-start    | Main flex container | Defines the alignment of content (flex items) based on x axis. "flex-start" aligns content to the left.   |
|                 | flex-end      |                     | Aligns content to the right                                                                               |
|                 | center        |                     | Aligns content in the middle                                                                              |
|                 | space-between |                     | Items are evenly distributed in the row. First item on far left and last item is far right                |
|                 | space-evenly  |                     | Items are distributed so that the spacing between any two items (and the space to the edges) is equal     |
| flex-wrap       | nowrap        | Main flex container | All Flex Items will be on one line (default)                                                              |
|                 | wrap          |                     | Flex Items will wrap onto multiple lines, from top to bottom                                              |
|                 | wrap-reverse  |                     | Flex Items will wrap onto multiple lines from bottom to top                                               |

<br><br><br>

<br/>

#### flex

|         |                                                                           |
| ------- | ------------------------------------------------------------------------- |
| Type    | Flex specific CSS attribute                                               |
| Purpose | To be used as a shortcut and includes: flex-grow, flex-basis, flex-shrink |
| Where   | Used on an item within the Flexbox Container                              |

Example:

```
.product-items {
        flex: 2 1 auto;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: flex-start;
}
```

BREAKDOWN - The above is a shortcut for the following  
flex-grow: 2  
flex-basis: 1  
flex-shrink: auto

<br/>

<br/>




<br/>

#### stretch (w/ align-items CSS attribute)

|         |                                                                                          |
| ------- | ---------------------------------------------------------------------------------------- |
| Type    | Value for `align-items` CSS attribute                                                    |
| Purpose | Only the target will stretch along the whole cross height axis even when content varies. |
| Where   | <span class="warning">tbd</span>                                                         |
| Notes   | CSS property overrides a grid or flex item's align-items                                 |
