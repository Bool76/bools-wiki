# Storybook | Vue Slots

Overview - In a Storybook story, if you call an instance of a component that has a slot, you can place in dummy content in that slot in the story so you can demo the slot being used. But how? 


#### Outline
1. What are Slots in Vue?
1. Types of Slots
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

*Vue File*  
```vue
<template>
  <div class="asdf">
    <slot></slot>
  </div>
</template>
```
<br>

*Storybook File*
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

*Vue File*  
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
