# C# | Constructor


### Description

A constructor is a special method that is used to initialize objects from a _Class_

> :memo: **Remember:** An instance of a _Class_ is called an _Object_

<br/><br/>

### Examples of Constructors

#### List&lt;T>() 

```
List<int> firstlist = new List<int>();
```
**Overview** - An object of the _List_ class is being created that has an integer type  

The `List<int>()` is the specific constructor for the _List_ Class that actually creates the instance and thus creates the container for that instance


#### Car()
```
Car myObj = new Car();
```

<br/><br/>


**Breakdown** 

Highlevel Steps:
1. Specify the class name 
2. Create a name of your object 
3. Assign the new object a null value which creates an empty container needed for the object 


`Car` == When creating an object, which is an instance of the Class, you must identify the name of the Class.  
> :memo: **Note:** The Class (`Car`) is also called a "reference type" at run time    

`myObject` == Give the new object a name  

`new` == Is an operator  

`new Car()` == When you create a new object from a Class (reference type), you must assign it a null value or a container to hold the object (creating memory)
<br/><br/>





### Helpful Links
1. [ GeeksForGeeks | List Class](https://www.geeksforgeeks.org/c-sharp-list-class/#)

