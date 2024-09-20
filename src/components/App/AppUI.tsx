import { TodoItem } from "../TodoItem/index.tsx";
import CreateTodoButton from "../CreateTodoButton/index.tsx";
import { TodoCounter } from "../TodoCounter/index.tsx";
import { TodoSearch } from "../TodoSearch/index.tsx";
import { TodoList } from "../TodoList/index.tsx";
import { DefaultTodosModel } from "../../shared/model/defaultTodos.model.ts";
import { TodosLoading } from "../TodosLoading/index.tsx";
import { TodoContext } from "../../TodoContext/index.tsx";
//import { TodoForm } from "../../TodoForm/index.tsx";
import React from "react";
import Modal from "../Modal/index.tsx";
import {TodoForm} from "../TodoForm/index.tsx";

function AppUI(
  //props: AppUIProps
) {

  const {
    loading,
                error,
                shearchedTodos,
                completeTodo,
                deleteTodo,
                openModal,
                setOpenModal
  } = React.useContext(TodoContext);

  // const {
  //   loading,
  //   error,
  //   totalTodos,
  //   completedTodos,
  //   searchValue,
  //   setSearchValue,
  //   shearchedTodos,
  //   completeTodo,
  //   deleteTodo,
  // } = props;

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

      {/* <TodoCounter total={totalTodos} completed={completedTodos} />

      <TodoSearch
        propSearchValue={searchValue}
        propSetSearchValue={setSearchValue}
      /> */}

        <TodoCounter/>

        <TodoSearch/>

        <TodoList>
              {loading && <TodosLoading/>  }
              
              {error && <p>Hubo un error...</p>}
              {(!loading && !shearchedTodos.length) && <p>No hay tareas</p>}
  
            {/* crear un array en base otro array de objetos */}
            {shearchedTodos.map((todo: DefaultTodosModel) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
              </TodoList>

              <CreateTodoButton
          setOpenModal={setOpenModal}
      />

     {openModal && (
       <Modal>
     <TodoForm />
     </Modal>
     )}
    </>
  );
}

export { AppUI };
