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

1. All of the items in the main Flexbox container will become "flex items"

<br/>

### Attributes / Values

#### flex (w/ display CSS attribute)

|         |                                                                                                               |
| ------- | ------------------------------------------------------------------------------------------------------------- |
| Type    | Value for `display` CSS attribute                                                                             |
| Purpose | When a div is given a display type of `flex` it becomes a Flex Container any object in it becomes a Flex Item |
| Where   | In any `<div>`                                                                                                |
| Notes   | Only need to declare it once                                                                                  |

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

#### flex-direction

|         |                                                                                               |
| ------- | --------------------------------------------------------------------------------------------- |
| Type    | Flex specific CSS attribute                                                                   |
| Purpose | Sets how flex items are placed in the flex container defining the main axis and the direction |
| Where   | <span class="warning">(Verify)</span> Normally used in Flexbox Container                      |
| Values  | `row` -> Places Flex Items in row                                                             |
|         | `column`-> Places Flex Items in column                                                        |

sets how flex items are placed in the flex container defining the main axis and the direction

<br/>

#### flex-grow

_Please see "flex-grow" specific page_

<br/>

#### flex-start (w/ align-items CSS attribute)

|         |                                                                                                                       |
| ------- | --------------------------------------------------------------------------------------------------------------------- |
| Type    | Value for `display` CSS attribute                                                                                     |
| Purpose | <span class="warning">(Reword)</span> Moves items up and down if "justify content" is set to move items left to right |
| Where   | <span class="warning">tbd</span>                                                                                      |

<br/>

#### flex-wrap

|         |                                                                                          |
| ------- | ---------------------------------------------------------------------------------------- |
| Type    | Flex specific CSS attribute                                                              |
| Purpose | Different wrapping options depending on value                                            |
| Where   | <span class="warning">tbd</span>                                                         |
| Values  | `wrap` -> Wraps content to next line when the content is too wide for the viewport width |

<br/>

#### justify-content

|         |                                                                                                                        |
| ------- | ---------------------------------------------------------------------------------------------------------------------- |
| Type    | Flex specific CSS attribute                                                                                            |
| Purpose | <span class="warning">tbd</span>                                                                                       |
| Where   | <span class="warning">tbd</span>                                                                                       |
| Values  | <span class="warning">(varify)</span> `space-around` -> Places equal space between content items and centering content |

<br/>

#### stretch (w/ align-items CSS attribute)

|         |                                                                                          |
| ------- | ---------------------------------------------------------------------------------------- |
| Type    | Value for `align-items` CSS attribute                                                    |
| Purpose | Only the target will stretch along the whole cross height axis even when content varies. |
| Where   | <span class="warning">tbd</span>                                                         |
| Notes   | CSS property overrides a grid or flex item's align-items                                 |
