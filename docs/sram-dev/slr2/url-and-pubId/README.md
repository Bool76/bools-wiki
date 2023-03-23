# slr2 | Url + PubID

Summary - This article is to help understand the slr2 URL in your local environment and how to write a URL for your local environment

#### Understanding the URL 

Local Example:
```
http://localhost:32673/en-US/preview/publications/dev?pubId=5fIZnRHg4dwjA8CcjcbLLG
```
localhost: Indicates you're in local env  
32673: Port number - This can change from time to time 
en-us: Selected language
preview: When in local I believe you're normally in preview mode
dev: The environment that's related to the pudID that's used 

#### How do you create a local URL to use?
1. From Visual Studio click on - IIS Express button
2. Browswer will open with a generic banner: DOCS.SRAM.COM
3. From the browser you'll see the port you're going to use
4. Add the language you're going to use, add preview, and publication:
```   
/en-us/preview/publications/
```
5. Select an an environment either:
    1. dev
    2. stage
    3. master
6. Find a pubID to use through Contentful (go to the section "How do you get a pubID")
7. Add the pudID at the end
8. This is what your url can look like:
```
http://localhost:32673/en-US/preview/publications/dev?pubId=5fIZnRHg4dwjA8CcjcbLLG
```


#### What environment's can be used?
1. dev
2. master(though had issues w/ this working)
3. stage

#### How do you get a pubID
1. Login to Contentful
2. Start from the Home page
3. Make the call on what env you want to grab the pubID from
4. Click - Hamburger menu
5. Expand - november2021
6. Click on the env you choose to work from
7. From the list - Click on a publication
8. On right hand side - Cick on Info 
9. Find the section - Entry ID
10. That's the pubID you're going to use 