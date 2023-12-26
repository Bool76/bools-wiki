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



