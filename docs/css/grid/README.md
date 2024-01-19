# CSS | Grid

Overview - The Grid type display is a simple way to present content in a grid or table format

<br>

#### When to use it

When a design calls for a simple grid layout / table of content and it makes more sense to use this rather than Flexbox

<br/>

#### Basic Terms

Grid Container - Main / parent container of the Grid

Grid Item - Children of the Grid Container

Grid Line - Dividing lines that make up the Grid structure that can be either vertical (column grid lines) or horizontal (row grid lines)

Grid Cell - Single unit of the Grid (think of it like a table cell)

Grid Track - The general term for either a grid row or a grid column

<br/><br>

### Basic Setup

1. Define a main container as a Grid Container w/ the use of `display: grid`
1. Set row size w/ the attribute `grid-template-row`
1. Set column size w/ the attribute `grid-template-column`
1. Place child elements into the grid w/ `grid-row` and `grid-column`

```
display: flex;
```

<br/><br>

### Attributes

| Attribute             | Location       | Value       | Description                                                                                             |
| --------------------- | -------------- | ----------- | ------------------------------------------------------------------------------------------------------- |
| display               | Grid Container | grid        | Designates a container as a Grid Container (parent container of the Grid)                               |
| display               | Grid Container | inline-grid | Generates an inline-level grid.                                                                         |
| grid-template-rows    | Grid Container | px, %       | Use when you want a specific row height. Otherwise don't use this and it will be based on content       |
| grid-template-columns | Grid Container | px, %, auto | Specify the number of columns you want by listing all of their separate widths                          |
| grid-row              | Grid Item      |             | A row oriented control - Specify a grid item's row size and location (e.g. Make item span 2 rows)       |
| grid-column           | Grid Item      |             | A column oriented control - Specify a grid item's column size and location (e.g. Make item span 2 cols) |
| column-gap            | Grid Container |             | Formats space between columns                                                                           |
| row-gap               | Grid Container |             | Formats space between rows                                                                              |
| gap                   | Grid Container |             | Short hand for `row-gap` and `column-gap`                                                               |
