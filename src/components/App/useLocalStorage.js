
import React from "react";

function useLocalStorage(itemName, initialValue) {
  
    // Se parsea desde localStorage (de string a json)
    const localStorageItem = localStorage.getItem(itemName);
    console.log(localStorageItem);
    let parsedItem;
    
    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
    } else {
      parsedItem = JSON.parse(localStorageItem);
    }
    
    const [item, setItem] = React.useState(parsedItem);
  
    // Guardar estado y en localStorage
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return [item, saveItem];
  
}

export { useLocalStorage };