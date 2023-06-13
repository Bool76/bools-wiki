# C# | List&lt;T> Class


### Description
represents the list of objects which can be accessed by index

List class can be used to create a collection of different types like integers, strings etc.

Represents a strongly typed list of objects that can be accessed by index. Provides methods to search, sort, and manipulate lists.



#### Constructor
Initializes a new instance of the `List<T>` class that is empty and has the default initial capacity

```
List<T>()
```


#### Creating new instance

```
List<int> firstlist = new List<int>();
```

Highlevel Steps:
1. Specify the List name (<span class="warning">Include something about int?</span> ) 
2. Create a name of your object 
3. Assign the new object a null value which creates an empty container needed for the object 

A class is a reference type and at the run time, any object of the reference type is assigned a null value unless it is declared using the new operator. The new operator assigns space in the memory to the object only during run time which means the allocation is dynamic. 

`Car` == When creating an object, which is an instance of the Class, you must identify the name of the Class.  
> :memo: **Note:** The Class (`Car`) is also called a "reference type" at run time    

`myObject` == Give the new object a name  

`new` == Is an operator  

`new Car()` == When you create a new object from a Class (reference type), you must assign it a null value or a container to hold the object (creating memory)

<br/><br/>

### Helpful Links
1. [ GeeksForGeeks | List Class](https://www.geeksforgeeks.org/c-sharp-list-class/#)