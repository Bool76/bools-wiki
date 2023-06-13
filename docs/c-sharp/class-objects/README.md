# C# | Class and Objects

Overview - tbd


### What is a Class?
Coming from the work "Classification", a "Class" is a way to create an themed based object (or templant) so it can be reuse throughout the program. Inside this object can include methods() and variables which define it's characteristics and capabilities.

e.g.  
Class: Car   
Variables: Transmission-Type, Number-of-Doors, Color, Engine  
Methods: Stop(), Start(), Accelerate()

<br/><br/>

### What is an Object?
It's an instance of Class so the properties and methods of that Class can be reused

<br/><br/>

### Creating an Object | High level steps
1. Specify the class name 
2. Create a name of your object 
3. Assign the new object a null value which creates an empty container needed for the object 

Example: 
```
Car myObj = new Car();
```

<br/><br/>

### Create Class

```
namespace FordMotor {
    class Car 
    {
        string color = "red";
        string color = "[purple]";

        public Line() {
            Console.WriteLine("Object is being created");
        }
    }
}
```
**Breakdown**  

`namespace FordMotor` == Whatever is inside of this is related to the `FordMotor` namespace  

`class Car` == A new class called `Car` is created  

`*All code in Car*` == All of that code belongs to the class of `Car` and will be accessable if an object is created from `Car`
 

<br/><br/>

### Create an Object 
Overview - An object is created from a class, you can think of it as an instance of the class. In the example below we've already created a class named Car so we can create an _Object_ from the _Class_

```
Car myObj = new Car();
```
**Breakdown** 

Highlevel Steps:
1. Specify the class name 
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
1. [w3school | Create an Object](https://www.w3schools.com/cs/cs_classes.php)
1. [geeksForGeeks | Create an Object](https://www.geeksforgeeks.org/different-ways-to-create-an-object-in-c-sharp/#)

