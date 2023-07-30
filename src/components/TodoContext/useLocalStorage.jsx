
import React from "react";

function useLocalStorage(itemName, initialValue) {
  
  const [item,    setItem]    = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error,   setError]   = React.useState(false);
  
  React.useEffect(() => {
      setTimeout(() => {
        try {
          // Se parsea desde localStorage (de string a json)
          const localStorageItem = localStorage.getItem(itemName);
          console.log(localStorageItem);
          let parsedItem;
          
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }  
  
          setLoading(false);
  
        } catch (error) {
          setLoading(false);
          setError(error);
        } 
      }, 2000);
  }, []);
    
  // return [item, saveItem];
    // Guardar estado y en localStorage
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  console.log(item);

  return {
    item,
    saveItem,
    loading,
    error
  };
  
}

export { useLocalStorage };