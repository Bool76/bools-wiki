# Vue | Nuxt

Overview - General notes and helpful details about Nuxt

### General Notes

- "Reactive" - If something is reactive then when that variable or object changes then it will automatically change throughout the application
- v-model is a way to connect things. I know that's a generic explanation. You are binding two things. It's also a way to update values. 
```
If you click this thing - Then this value should update
```
- Square Brackets - Another way to think of their usage is that they interpert values. This is a JS thing. 
```
v-model=query[key]
```
- You might want to look into what are the other ways that you can interpert values in JS - Maybe even look at your JQuery book
- Think abut how you want to always write to your "reactive" variables throughout because those will update throughout Nuxt
- "Hydration" is a term that's used in JS that refers to sort of preloading things on a page
- `.length` is a property that doesn't exist for an Object. BUT... for an array it does exist
```
arrayExample.length
```
- In Vue you need to list out or define if there's going to be an emit event (as in an event you'd want to listen for)