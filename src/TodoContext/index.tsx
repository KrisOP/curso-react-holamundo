import React, { ReactNode, useState } from 'react'
import { useLocalStorage } from './useLocalStorage';
import { DefaultTodosModel } from '../shared/model/defaultTodos.model';


interface TodoContextType {
  loading: boolean;
  error: boolean;
  totalTodos: number;
  completedTodos: number;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  shearchedTodos: any[];
  completeTodo: (text: string) => void;
  deleteTodo: (text: string) => void;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}


const defaultContext: TodoContextType = {
  loading: false,
  error: false,
  totalTodos: 0,
  completedTodos: 0,
  searchValue: "",
  setSearchValue: () => {},
  shearchedTodos: [],
  completeTodo: () => {},
  deleteTodo: () => {},
  openModal : false,
  setOpenModal: () => {}
};


const TodoContext = React.createContext<TodoContextType>(defaultContext);
//const TodoContext = React.createContext<TodoContextType | null>(null);
//const TodoContext = React.createContext(true);


interface ContextProps {
    children: ReactNode;
  }
function TodoProvider(props: ContextProps){

    const { children } = props;

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

  const [openModal, setOpenModal] = React.useState(false);
  //console.log("Los usuarios han escrito: " + searchValue + " ");

  //defaultTodosModel defaultTodos[] = new defaultTodosModel();

  let firstDefaultItems = [
    { text: "Cortar cebolla", completed: true },
    { text: "Tomar el cursso de intro a React", completed: false },
    { text: "Llorar con la Llorona", completed: false },
    { text: "Nuevo", completed: true },
  ];

  //renombrando los parametros item a todos y saveItem a saveTodos
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", firstDefaultItems);

  // React.useEffect(() => {
  //   console.log("useEffect");
  // }, []);

  //se va a ejecutar cuando el array 'todos' cambie

  // React.useEffect(() => {
  //   console.log("useEffect");
  // }, [todos]);

  // console.log("log 3");

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
      <TodoContext.Provider value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        shearchedTodos,
        completeTodo,
        deleteTodo, 
        openModal,
        setOpenModal
       }}> 
            {children}
        </TodoContext.Provider>
         
    );

    
}



export {TodoContext, TodoProvider}