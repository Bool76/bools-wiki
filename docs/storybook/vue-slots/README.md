# Storybook | Vue Slots

Overview - In a Storybook story, if you call an instance of a component that has a slot, you can place in dummy content in that slot in the story so you can demo the slot being used. But how? 


#### Outline
1. What are Slots in Vue?
1. Types of Slots
1. How to use Slots in Storybook (highlevel) 
1. Vue | Declare Default Slot
1. Vue | Declare Custom Slot
1. Storybook | Use Default Slot
1. Storybook | Use Custom Slot

<br><br>

### What are Slots in Vue?
 When creating Vue components you can utilize something called "slots". Slots give containers if you will for content to be placed. A Vue component will have a default slot but you can create additional slots and give them a unique name so you can reference it. 

<br><br>

### Two Types of Slots
1. Default Slot - Each Vue component that has a `<template>` section has a default slot where content can be placed. A `<slot>` without name implicitly has the name "default".
1. Custom Slot - A Vue component with a `<slot>` can be given a custom name by using the name attribute.  

<br><br>

### How to use Slots in Storybook 
*Highlevel*
1. In Vue file create a component
1. In the component declare Slots in Template section (whether just a default Slot or a custom slot)
1. In Storybook file (mdx) import the use of the Vue component
1. In the Story block: 
  1. Use `component` attribute to state what component you want to work with
  1. Use `template` attribute use the component by it's component name in tag format
  1. To use the default Slot:
      1. Between the component tags use a `<template>` tag 
      1. Place any content you want between the template tags
  1. To use a custom Slot:
      1. Between the component tags use a `<template>` tag 
      1. Using the name of the custom slot place that inside of the template tag with a # before the name `<template #customName>`
      1. Place any content you want between the templates tags

<br><br>

## Vue | Declare Slots

<br>

### Vue | Declare Default Slot

1. Find or create a `<template>` tag
1. Where ever you want the default slot to be just add the slot tag
1. No need to do anything further (e.g. No need to add a default name)

*Example*
```
<template>
  <div>
    <slot></slot>
  </div>
</template>
```

<br><br>

### Vue | Declare Custom Slot (w/ a default Slot)

1. Find or create a `<template>` tag
1. Where ever you want the default slot to be just add the slot tag
1. No need to do anything further (e.g. No need to add a default name)

*Example*
```
<template>
  <div class="header-nav-left">
    <slot name="left-slot"></slot>
  </div>
  <div>
    <slot></slot>
  </div>
</template>
```

<br><br><br>

## Storybook | Use Slots

<br>

### Storybook | Use Default Slot
1. Declare default slot in Vue file by using the `<slot>` tag (no need to give it a name)

```vue
<template>
  <div class="asdf">
    <slot></slot>
  </div>
</template>
```
1. In the Storybook file use the `<Canvas>` and `<Story>` doc blocks
1. In the Story block: 
  1. Use `component` attribute to state what component you want to work with
  1. Use `template` attribute use the component by it's component name in tag format
  1. To use the default Slot:
      1. Between the component tags use a `<template>` tag 
      1. Place any content you want between the template tags
<br>

```mdx
<Canvas>
  <Story name="Default">
      {{
        components: { SramHeaderNav },
        template: 
        `<SramHeaderNav>
          custom content
        <SramHeaderNav/>`
      }}
  </Story>
</Canvas>
```

<br>

**Result:**  
![Image from images folder](~@source/images/storybook/vue-slot/storybook_vue-slot_default-slot.png)

<br><br>

### Storybook | Use 2 Custom Slot (w/ a Default Slot)

1. Open the Vue file with the component you want to work with
1. Declare two custom slots in Vue file by using the `<slot>` tag and the name attribute 

```vue
<template>
  <div class="header-nav-left">
    <slot name="left-slot"></slot>
  </div>
  <div class="header-nav-right">
    <slot name="right-slot"></slot>
  </div>
</template>
```
Breakdown:
- Two custom slots were declared
- First is called "header-nav-left"
- Second is called "header-nav-right"
<br>

*Storybook File*
```mdx
<Canvas>
  <Story name="Default">
      {{
        components: { SramHeaderNav },
        template: 
        `<SramHeaderNav>
          <template #left-slot>Left slot content</template>
          <template #right-slot>Right slot content</template>
          <SramHeaderNav/>`
      }}
  </Story>
</Canvas>
```

<br>

**Result:**  
![Image from images folder](~@source/images/storybook/vue-slot/storybook_vue-slot_2-custom-slots.png)
