# C# | View Models

Overview - This will give you an idea on what a View Model is used for and how to use it; as it relates to the MVC (Model, View, Controler) type development structure

## What is it?

It's a file that provides the data / defines the data that a View will display

## When do you use it?

[draft] When the data you want to provide is more complex. Situations such as:

1. Different sources of data
2. The data needs to be altered (Q - Doesn't that what the Controller does?)

## Example

### Files

Zoo.cs  
 Animal.cs  
 HomeController.cs  
 Index.cshtml

### File Details

| Name              | Type       | Summary                        | Defined       |
| ----------------- | ---------- | ------------------------------ | ------------- |
| Zoo.cs            | Model      | Retrieves specific data fields | ID (int)      |
|                   |            |                                | City (string) |
| Animal.cs         | Model      | Retrieves specific data fields | ID (int)      |
|                   |            |                                | Name (string) |
| HomeController.cs | Controller | tbd                            |               |
