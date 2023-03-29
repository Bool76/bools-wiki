# slr2 | Start Local Environment

Summary - How to start your local slr2 environment

You have two options:
1. VS Code
2. Visual Studio

### VS Code

#### Start
1. In VS Code open the slr2 project 
2. Go to menu:  
Run > Run Without Debugging
3. This will open up a browser with the path:  
http://localhost:5147/
4. From there you'll have to go to a URL like:
```
http://localhost:32673/en-US/preview/publications/dev?pubId=5fIZnRHg4dwjA8CcjcbLLG
```

> :memo: **Note:** You might have to alter the port # and the pubId  

#### Stop
1. Go to menu:
Run > Stop Debugging

### Visual Studio

#### Start
1. In Visual Studio open the slr2 project 
2. From the menus above go to:  
Debug > Start Debugging 

> :memo: **Note:** I'm sure you could also select "Start Without Debugging"  

3. This will open up a browser with the path:  
http://localhost:5147/

#### Stop
1. Go to menu:  
Debug > Stop Debugging