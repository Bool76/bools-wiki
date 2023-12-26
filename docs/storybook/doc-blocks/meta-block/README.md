# Storybook | Source Block

Overview - Used in MDX file. It does the following:
1.  Attaches MDX file to a component and it's Stories  
    OR
2. Controls location of unattached documentation in the sidebar (nav)

<br>

### How to use it?
1. In order to use "Meta" it must be imported 
```
import { Meta } from '@storybook/addon-docs';
```
2. In regards to the component you're using it with: 
  1. What is the hierarchy (e.g. Atom, Molecule, etc)? 
  1. What is the name you want to give it so it will appear that way in the sidebar? 
3. Use the Meta tag and for the above answers fill out the `title` property like so:
```mdx
<Meta title="Atoms / Button" />
```
