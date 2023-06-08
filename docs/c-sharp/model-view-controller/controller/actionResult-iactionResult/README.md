# Controller | ActionResult vs IActionResult

Overview - What is the difference between ActionResult and IActionResult in the Controller endpoint and when to use them


### ActionResult
To be used when you only want to return a predefined response such as a View or a resource. Don't forget that in a Controller you can return or point to a View

```
public ActionResult Index() {

        return View();
    }
```



### IActionResult
To be used when you want to customize the return response (e.g. Return an error state)