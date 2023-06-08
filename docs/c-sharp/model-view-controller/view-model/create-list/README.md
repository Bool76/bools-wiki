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
//index.cshtml

@model List<Animal>

@{
    viewData["Title"] = "Animal/Zoo Overiew";
}
<h2>Animals Name</h2>
<ul>
    @foreach(var animal in Model.Animals){
        <li>@animal.Name</li>
    }
</ul>

<h2>Zoo City</h2>
<ul>
    @foreach(var zoo in Model.Zoos){
        <li>@zoo.City</li>
    }
</ul>
```


### Model Files

**Purpose** - Pulls in original data required

Zoo.cs - Original data file that pulls information in for Zoo `ID` and Zoo `City`

Animal.cs - Original data file that pulls information in for Animal `ID` and Animal `Name`

<br/>

### View Model File

**Purpose** - The ViewModel file compiles the information from difference sources so that it can be called on

```
// AnimalZooViewData.cs

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

**Purpose** - [draft]

This needs to match the configuration that's in the ViewModel file (I think)

You have to submit the correct information to the View file (I think)

Somehow in the Controller you are returning the View

Submit the information of that ViewModel (or Model if that's what you're using) to the View so that it can be used

And how do you know what you're using? By looking at the top of the View file and seeing what is in the `using` statement

Controllers control what's entering the app

The name of the controller has to equal the name of the Model or ViewModel it's tied to (e.g. Model: asdf.cs Controller: asdfController.cs)

The Controller controls where it's entering (Controller endpoint)


```
// HomeController.cs

using TurorialViewModels.ViewModels;

namespacce TutorialViewModels.Controllers

public class HomeController : Controller {
    private List<Animal> animals = new List<Animal>();

    private List<Zoo> zoos = new List<Zoo>();

    public IActionResult Index() {
        AnimalZooViewData vm = new AnimalZooViewData();
        vm.Animals = animals;
        vm.Zoos = zoos;

        return View(vm);
    }
}
```
**Breakdown**

`using TurorialViewModels.ViewModels` == So you have access to the data in the AnimalZooViewData.cs 

`public class HomeController : Controller` == Custom controller created with the name `HomeController` inheriting from the base class `Controller`  

`private List<Animal> animals = new List<Animal>();` == You need to inject data from the ViewModel into the Controller 

`public IActionResult Index() {}` ==   
* This is called the "controller endpoint" which means where it's pointing to
* The endpoint is pointing directly to a View file
* `Index` indicates the name of the View file (This Controller will look for the `index` file)
* Inside this statement you're returning the data that can be used by the View file.     
* Since this data is coming from the ViewModel, what you're returning must reflect how it looks in the ViewModel


`AnimalZooViewData vm` == I don't know what this is doing. We're going to be referencing `vm` as the name of the ViewModel object. But that entire string is using `AnimalZooViewData` twice. Why?   

`AnimalZooViewData vm = new AnimalZooViewData()` == Creating a new instance of AnimalZooViewData  

`return View(vm)` == tbd


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





