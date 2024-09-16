import "./App.css";
import Titulo from "../../Titulo.tsx";
//import Card from './components/Card.tsx';
import Card, { CardBody } from "../Card.tsx";
import Button from "../Button/index.tsx";
import List from "../List.tsx";
import { useState } from "react";

import React from "react";
//import { useLocalStorage } from "../../TodoContext/useLocalStorage.ts";

import { DefaultTodosModel } from "../../shared/model/defaultTodos.model.ts";
import { AppUI } from "./AppUI.tsx";
import { TodoProvider } from "../../TodoContext/index.tsx";


function App() {
  

  return (

    <TodoProvider>
    
    <AppUI
      // loading={loading}
      // error={error}
      // totalTodos={totalTodos}
      // completedTodos={completedTodos}
      // searchValue={searchValue}
      // setSearchValue={setSearchValue}
      // shearchedTodos={shearchedTodos}
      // completeTodo={completeTodo}
      // deleteTodo={deleteTodo}
    />
    </TodoProvider>
 
  );
}

export default App;
