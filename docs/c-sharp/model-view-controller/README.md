# C# | Model + View + Controller

Overview - How to use the Model, View, Controller (+ ViewModel) in C#. How the files interact and how to use them with a desired goal 


<span class="warning">
This page needs to be worked on! Start removing sections into separate sub sections (e.g. Controllers, Views, View Models)
</span>

## File Type Descriptions

**Model** - Instance of single source data (e.g. Instance of content through the CMS)  

**Controller** - Given the ability to alter data and then submit (make available) the data to the Model or the ViewModel (whichever one is going to use it) 

**View Model** - asdf  

**View** - Display page seen by a user (e.g. asdf.html)

<br><br>

## File Type Details

### View

#### Calling a model
Overview - From a View file, a SINGLE Model file can be called so that you can utilize data in that Model file

```
@model SegmentedControlsModel

<div>Some text</div>
```
If you want to utilize data that's not defined in the Model then you're going to need a Controller and ViewModel

<br><br>


### ViewModel

#### Creating Lists
Overview - When you want to include / add additional data so it's available then you need to create a list

<span class="warning">Q - But where does the list data come from?</span>

```
 public class SegmentedControlsViewModel {
    public List<Topics> Topics {get; set;} 
 } 
```




## [old] What is it?

[old] It's a file that provides the data / defines the data that a View will display

## When do you use it?

[draft] When the data you want to provide is more complex. Situations such as:

1. Different sources of data
2. The data needs to be altered (Q - Doesn't that what the Controller does?)

<br>

## Example

### Files

Zoo.cs  
 Animal.cs  
 HomeController.cs  
 Index.cshtml

### File Details

| Name              | Type       | Summary                        | Defined                              |
| ----------------- | ---------- | ------------------------------ | ------------------------------------ |
| Zoo.cs            | Model      | Retrieves specific data fields | ID (int)                             |
|                   |            |                                | City (string)                        |
| Animal.cs         | Model      | Retrieves specific data fields | ID (int)                             |
|                   |            |                                | Name (string)                        |
| HomeController.cs | Controller | tbd                            | List animals                         |
|                   |            |                                | List zoos                            |
| tbd               | ViewModel  |                                |                                      |
| Index.cshtml      | View       | Display page to the user       | Defined link to model (or ViewModel) |

### Controller Files

#### ActionResult

What is it?
asdf

Example:

```
public ActionResult Index()
    {
        return View(animals);
    }
```

`ActionResult` - Must be added when you want to return any data set  
`Index()` - Refers to the index page that's associated to this (Q - But how do you know what index page?)
