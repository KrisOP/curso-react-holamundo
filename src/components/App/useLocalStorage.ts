//import { useState } from "react";
import React from "react";

interface defautlTodosModel {
    text: string;
    completed: boolean;
  }

function useLocalStorage(itemName:string, initialValue:any){

    let parsedItems = localStorage.getItem(itemName);
    const defaultItems = JSON.parse(parsedItems || JSON.stringify(initialValue));
  
    if (defaultItems.length)
      localStorage.setItem(itemName, JSON.stringify(defaultItems));
  
    const [item, setItem] = React.useState(defaultItems);
  
    const saveItem = (newItem: defautlTodosModel[]) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    //retornando el estado y la funcion saveItem
    return [item ,saveItem];
  }

  export {useLocalStorage}