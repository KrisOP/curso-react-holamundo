import "./App.css";
import Titulo from "../../Titulo.tsx";
//import Card from './components/Card.tsx';
import Card, { CardBody } from "../Card.tsx";
import Button from "../Button/index.tsx";
import List from "../List.tsx";
import { useState } from "react";

import React from "react";
import { useLocalStorage } from "./useLocalStorage.ts";

import { DefaultTodosModel } from "../../shared/model/defaultTodos.model.ts";
import { AppUI } from "./AppUI.tsx";

function App() {
  const [Data, setData] = useState(["uno", "dos", "tres"]);
  // const [isLoading, setIsLoading] = useState(false);

  // const handleClick = () => setIsLoading(!isLoading);

  // const list = ["uno", "dos", "tres"];
  // //const list: string[] = [];
  // const handleSelect = (element: string) => {
  //   console.log("Imprimiendo " + element);
  // };

  // const handleSelect2 = (element: string) => {
  //   console.log("Mostrando " + element);
  // };

  // // si hay elementos en la lista mostrarlos
  // // const contenido = list.length ? (
  // //   <>
  // //   <List data={list} onSelect={handleSelect} />
  // //   <List data={list} onSelect={handleSelect2} /></>

  // // ) : (
  // //   "Sin elementos que mostrar"
  // // );

  // const contenido =
  //   list.length !== 0 ? (
  //     <>
  //       <List data={list} onSelect={handleSelect} />
  //       <List data={list} onSelect={handleSelect2} />
  //     </>
  //   ) : (
  //     "Sin elementos que mostrar"
  //   );

  // return (
  //   <>
  //     <Titulo />
  //     {/* <Card body={'Hola mundo'}/> */}
  //     <Card>
  //       <CardBody title={"Hola mundo xD"} text={"El texto del componente "} />
  //       {/* <List data={list} onSelect={handleSelect} />

  //       <List data={list} onSelect={handleSelect2} /> */}
  //       {contenido}
  //       <Button isLoading={isLoading} onClick={handleClick}>
  //         Hola mundo dat
  //       </Button>
  //     </Card>
  //   </>
  // );

  const addMinion = () => setData([...Data, "Minion"]);

  const handleDelete = () => setData(Data.slice(0, -1));

  const [searchValue, setSearchValue] = React.useState("");
  console.log("Los usuarios han escrito: " + searchValue + " ");

  //defaultTodosModel defaultTodos[] = new defaultTodosModel();

  let firstDefaultItems = [
    { text: "Cortar cebolla", completed: true },
    { text: "Tomar el cursso de intro a React", completed: false },
    { text: "Llorar con la Llorona", completed: false },
    { text: "Nuevo", completed: true },
  ];

  const [todos, saveTodos] = useLocalStorage("TODOS_V1", firstDefaultItems);

  const completedTodos = todos.filter(
    (todo: DefaultTodosModel) => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  const shearchedTodos = todos.filter((todo: DefaultTodosModel) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text: string) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text: string) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
 
  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      shearchedTodos={shearchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  ) 
}

export default App;
