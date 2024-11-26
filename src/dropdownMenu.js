// ...buttons expects objects of {label, callback}
export function dropdownMenu(label, ...buttons) {
  //helper functions

  function showButtons() {
    menuButton.style.visibility = "hidden";
    menuButton.style.opacity = "0";
    buttonContainer.style.visibility = "visible";
    buttonContainer.style.opacity = "1";
  }

  function hideButtons() {
    menuButton.style.visibility = "visible";
    menuButton.style.opacity = "1";
    buttonContainer.style.visibility = "hidden";
    buttonContainer.style.opacity = "0";
  }

  function generateButton(label, callback, hideDropdownCallback) {
    const button = document.createElement("button");
    button.textContent = label;
    button.className = "dropdown-button";
  
    // add in our dropdown functionality to the users function
    const combinedCallback = () => {
      hideDropdownCallback();
      callback(); 
    };
    
  
    button.addEventListener("click", combinedCallback);
    return button;
  }
  

  //main body
  const container = document.createElement("div");
  container.className = "dropdown-menu";

  const menuButton = document.createElement("button");
  menuButton.textContent = label;
  menuButton.className = "dropdown-menu-button";
  menuButton.addEventListener("click", showButtons);
  container.appendChild(menuButton);

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "dropdown-buttons";
  buttons.forEach(b => {
    const button = generateButton(b.label, b.callback, hideButtons);
    buttonContainer.appendChild(button);
  });
  container.appendChild(buttonContainer);

  hideButtons();

  return container;
}