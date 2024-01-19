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

<br/><br>

### Basic Setup

1. A main Flexbox container must be selected
1. The main Flexbox container must have a display type of `flex`

```
display: flex;
```

<br/><br>

### Attributes

| Attribute             | Location            | Value       | Description                                                                 |
| --------------------- | ------------------- | ----------- | --------------------------------------------------------------------------- |
| display               | Main flex container | grid        | Designates a container as a Grid Container (parent container of the Grid)   |
| display               | Main flex container | inline-grid | Generates an inline-level grid.                                             |
| grid-template-rows    | tbd                 |             | Set row size - WHAT DOES ROW SIZE MEAN IS THAT LIKE HOW BIG OR HOW MANY?    |
| grid-template-columns | tbd                 |             | Set column size - WHAT DOES ROW SIZE MEAN IS THAT LIKE HOW BIG OR HOW MANY? |
| grid-row              |                     |             | Used to place child element into the grid                                   |
| grid-column           |                     |             | Used to place child element into the grid                                   |
