# Storybook | Importing JSON

Summary - How you import JSON and use it in the Template section for custom props

*Prerequisites*
1. Have a JSON file in your project
2. Know the location of your JSON file

### How to Import JSON
3. Place in import statement at the top of your page
```
import translatedStringsExample from "../../../data/example-translations.json";
```  
- translatedStringsExample == Custom title you're going to use on this page
- Note that it's tied to the location of the JSON file

4. You have to identify the JSON object to be used. That's done in the data() function
5. Locate the data() function on your page (It might be located in your &lt;Canvas> &lt;Story>) 
```
<Canvas>
  <Story name="Dropdown">
    {{
      components: { SramSelectInput },
      data() {
```

6. Locate the return section and set your custom instantiated JSON variable to a new variable
```
data() {
        return {
          selected: "",
          defaultValue: "",
          translatedStringsExampleData: translatedStringsExample,
        };
      },
```
 - translatedStringsExampleData is being set to translatedStringsExample  
7. Now you can reference the JSON object in your &lt;template> and utilize specific values from the JSON file 
8. See the following example:
```
template: 
    `<SramSelectInput label="Select an Item" 
        :clearButtonTitle="translatedStringsExampleData.clearButton">
    </SramSelectInput>`,
``` 
- SramSelectInput == Custom component being used
- translatedStringsExampleData == The new instantiated var tied to the JSON file
- clearButton == Variable listed in the JSON file that has some sort of value set to it


