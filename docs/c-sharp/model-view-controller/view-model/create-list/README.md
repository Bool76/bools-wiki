# View Model | Create List

Overview - tbd


<br/>

## Example

Overview - The goal of this example was to display both Zoo and Animal information on one View file when the data comes from different sources (Model files)


### Files

Zoo.cs  
 Animal.cs  
 HomeController.cs  
 Index.cshtml

<br/>

### File Overview

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

<br/>

### View File

**Purpose** - Displays the web page and calls data dynamically from either a Model or a View Model file

```
@model List<Animal>

@{
    viewData["Title"] = "Animal/Zoo Overiew";
}

<ul>
    @foreach(var animal in Model){
        <li>@animal.Name</li>
    }
</ul>
```


### Model Files

**Purpose** - Pulls in original data required

Zoo.cs - Original data file that pulls information in for Zoo `ID` and Zoo `City`

Animal.cs - Original data file that pulls information in for Animal `ID` and Animal `Name`

<br/>

### View Model File

**Purpose** - The View-Model file compiles the information from difference sources so that it can be called on

```
using TurorialViewModels.Models;

public class AnimalZooViewData {
    public List<Animal> Animals (get; set;);
    public List<Zoo> Zoos (get; set;);
}

```

**Breakdown**

`using TurorialViewModels.Models;` - Makes Model data available to reference  
`public List<Animal> Animals (get; set;)` - Define a list called `Animal` from the Animals Model so you can use it in the View file 



define the properties (list) of the data that you're going to show



### Controller File

**Purpose** - asdf


#### Code Breakdown

**ActionResult**

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





