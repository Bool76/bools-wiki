# C# | Class and Objects

Overview - tbd


### Basic Concepts

**"New" Keyword** - [draft] a class object is created using the new operator.


<br/><br/>


### Create an Instance of an Object
Overview - tbd

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