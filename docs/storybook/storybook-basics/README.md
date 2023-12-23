# Storybook | Basics


### Basic Storybook Concepts

1. Components
1. Story

<br>

### What is typically used in Storybook 

1. imports
1. Markdown
1. DocsPage
1. Canvas Block
1. Story Block
1. Meta Block - Used in MDX file
    - Attaches MDX file to a component and it's Stories  
    OR
    - Controls location of unattached documentation in the sidebar (nav)


<br>

### DocsPage

**What is it?**  
 This is a page within each Storybook component that gives general summary of the component, source code, and meta data 

> :memo: **Note:**  DocsPage looks like it has to be installed or included somewhere in the package.json file 


**How to get to it?**
1. Click on the component you want to see from the left hand navigation
1. Once open click on the "Docs" link at the top

 <br> 

*Example*  
![Image from images folder](~@source/images/storybook/storybook-basics/storybook-basics-01.png)

<br>

BREAKDOWN:  
"Button takes a number of arguments" == That whole section is written with Markdown (bullet points, etc)  
Code section | Button and `<SramButton>` section == RIGHT NOW I DON'T KNOW WHERE THAT IS COMING FROM




<br>


### MDX Files

#### What are they?  
Combination of: Markdown + JSX == MDX

#### What do they do? 
1. Display how components are supposed to look / work when applied (JSX)
1. Display documentation (Markdown) on the component (e.g. List properties of the component )

<br>

### Canvas Block

#### What is it?
The section of Storybook where you can see the component in working form. It's also the first "page" you see when you click on a component in Storybook. It also comes with a small tool bar at the top, but I haven't ever used that.
<br>

![Image from images folder](~@source/images/storybook/storybook-basics/storybook-basics_canvas-01.png)

<br>

#### What blocks are typically in it?
1. `<story>`
1. `<source>`

#### Pass in props
You can pass props into the Canvas block but I haven't done or seen anything with that


#### How do you use it?  
1. In order to use "Canvas" it must be imported 
```
import { Canvas } from '@storybook/addon-docs';
```
2. Use the `<canvas>` tag  
1. Inside of `<canvas>` you'll see the `<story>` block


<br>


### Story Block

#### What is it?
<span class="warning">RIGHT NOW I DON'T KNOW WHAT IT DOES. I NEED MORE DETAILS.</span>

#### Where is it seen?
Typically I've seen it inside of the `<canvas>` block

#### Properties

**name** - Controls the title of the component on the left nav

**args** - <span class="warning">TBD. Why do I need this and other args in an MDX file?</span>

#### How do you use it?  
1. In order to use "Story" it must be imported 
```
import { Story } from '@storybook/addon-docs';
```

2. <span class="warning">TBD</span>