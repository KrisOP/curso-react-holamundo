import "./App.css";
import Titulo from "./Titulo.tsx";
//import Card from './components/Card.tsx';
import Card, { CardBody } from "./components/Card";
import Button from "./components/Button";
import List from "./components/List.tsx";
import { useState } from "react";
import { TodoItem } from "./components/TodoItem";
import CreateTodoButton from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList/index.tsx";
import React from "react";

interface defautlTodosModel {
  text: string;
  completed: boolean;
}

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

  let firstDefaultTodos = [
    { text: "Cortar cebolla", completed: true },
    { text: "Tomar el cursso de intro a React", completed: false },
    { text: "Llorar con la Llorona", completed: false },
    { text: "Nuevo", completed: true },
  ];

  let parsedTodos = localStorage.getItem("TODO_V1");
  const defaultTodos = JSON.parse(parsedTodos || JSON.stringify(firstDefaultTodos));

  if (defaultTodos.length)
    localStorage.setItem("TODO_V1", JSON.stringify(defaultTodos));



  const [todos, setTodos] = React.useState(defaultTodos);
  const completedTodos = todos.filter(
    (todo: defautlTodosModel) => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  const shearchedTodos = todos.filter((todo: defautlTodosModel) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const saveTodos = (newTodos: defautlTodosModel) => {
    localStorage.setItem("TODO_V1", JSON.stringify(newTodos));
    setTodos(newTodos);
  };

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
    <>
      {/* <Card>
        <Button isLoading={true} onClick={addMinion}>
          Agregar
        </Button>
        <Button isLoading={false} onClick={handleDelete}>
          Eliminar
        </Button>
        <List data={Data} />
      </Card> */}

      <TodoCounter total={totalTodos} completed={completedTodos} />

      <TodoSearch
        propSearchValue={searchValue}
        propSetSearchValue={setSearchValue}
      />

      <TodoList>
        {/* crear un array en base otro array de objetos */}
        {shearchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}

        {/* <TodoItem />
        <TodoItem />
        <TodoItem /> */}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
