# C# | Class and Objects

Overview - tbd


### What is a Class?
Coming from the work "Classification", a "Class" is a way to create an themed based object (or templant) so it can be reuse throughout the program. Inside this object can include methods() and variables which define it's characteristics and capabilities.

e.g.  
Class: Car   
Variables: Transmission-Type, Number-of-Doors, Color, Engine  
Methods: Stop(), Start(), Accelerate()

<br/>

### Basic Concepts

**"New" Keyword** - [draft] a class object is created using the new operator.


<br/>


### Create Class (and Instance of an Object?)
Overview - Coming from the work "Classification", "Class" is an 

```
namespace FirstProject
{
    public class Student()
    {
        
        public Student()
        {
            //constructor
        }
    }
}

Student mystudent = new Student();
```
**Breakdown**

First `Student` == Refers to the `Student` class and by calling it out we are instantiating it ("Hey we want to use you!")

`mystudent` == The name we're giving our instantiated verison of `Student`

`new` == Keyword to create memory for what we're going to do

`new Student()` == Creating memory for `Student` which is the original name of the class  


<br/><br/>


### Bigger Example
Overview - tbd

```
namespace FirstProject
{
    public class Person()
    {
        public string Name;
        public string Age;

        public void Greeting(){
            Console.Writeline("Hi my name is" + Name);
        }
    }
}
```
**Breakdown**  
tbd

<br/><br/>

### Another Example

```
Car myObj = new Car();
```
**Breakdown** 

Highlevel Explanation - An object is created from a class. In this example we already created the class named Car, so now we can use this to create objects. To create an object of Car:
1. Specify the class name 
2. Create a name of your object 
3. Assign the new object a null value which creates an empty container needed for the object 

A class is a reference type and at the run time, any object of the reference type is assigned a null value unless it is declared using the new operator. The new operator assigns space in the memory to the object only during run time which means the allocation is dynamic. 

`Car` == When creating an object, which is an instance of the Class, you must identify the name of the Class.  
> :memo: **Note:** The Class (`Car`) is also called a "reference type" at run time    

`myObject` == Give the new object a name  
`new` == Is an operator  
`new Car()` == When you create a new object from a Class (reference type), you must assign it a null value or a container to hold the object 



