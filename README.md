# Dropdown Menu

A simple, reusable dropdown menu component that you can easily integrate into your web applications. This dropdown menu supports dynamic button creation with customizable labels and callback functions.

## Features

- **Reusable**: Can be used to create multiple dropdown menus on a page.
- **Customizable**: You can add as many buttons as you need, each with its own callback function.
- **Minimalist**: The dropdown uses simple CSS for visibility toggling and transitions.
- **Easy Integration**: Works with any JavaScript project using ES6 modules.

## Installation

```js
import { dropdownMenu } from './dropdownMenu.js';
```

## Example usage

```js
const dropdown1 = dropdownMenu(
  "Options 1",
  { label: "Button A", callback: () => console.log("Button A clicked") },
  { label: "Button B", callback: () => console.log("Button B clicked") }
);

const dropdown2 = dropdownMenu(
  "Options 2",
  { label: "Button X", callback: () => console.log("Button X clicked") },
  { label: "Button Y", callback: () => console.log("Button Y clicked") }
);
```