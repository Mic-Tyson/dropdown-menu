import ("./styles.css")
import { dropdownMenu } from "./dropdownMenu.js";

// example menus

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

document.body.appendChild(dropdown1);
document.body.appendChild(dropdown2);