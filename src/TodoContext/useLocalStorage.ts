
import React from "react";
import { DefaultTodosModel } from "../shared/model/defaultTodos.model";

interface defautlTodosModel {
    text: string;
    completed: boolean;
  }

function useLocalStorage(itemName:string, initialValue:any){


  let initValue: any[] | (() => any[]) = []

  const [item, setItem] = React.useState(initValue);

  const [loading, setLoading] = React.useState(true);

  const [error, setError] = React.useState(false);

    React.useEffect(() => { 
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2752928364.
      setTimeout(() => {try {
        let parsedItems = localStorage.getItem(itemName);
      const defaultItems = JSON.parse(parsedItems || JSON.stringify(initialValue));
    
      if (defaultItems.length){
        localStorage.setItem(itemName, JSON.stringify(defaultItems));
        setItem(defaultItems);
        // if (!parsedItems) {
        //   setItem(defaultItems);
        //   console.log(" ok")
        // } else {
        //   //setItem(defaultItems);
        // }
        setLoading(false);
      } 
       
      }
      catch (error) {
        setError(true);
        setLoading(false)
      } },2000) 

      //para que se ejecute solo una vez el render al cargar la app
    }, []);

  
  
  
    const saveItem = (newItem: defautlTodosModel[]) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    //retornando el estado y la funcion saveItem
    return {item ,saveItem, loading, error};
  }

  export {useLocalStorage}