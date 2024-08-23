import { TodoItem } from "../TodoItem/index.tsx";
import CreateTodoButton from "../CreateTodoButton/index.tsx";
import { TodoCounter } from "../TodoCounter/index.tsx";
import { TodoSearch } from "../TodoSearch/index.tsx";
import { TodoList } from "../TodoList/index.tsx";
import { DefaultTodosModel } from "../../shared/model/defaultTodos.model.ts";

interface AppUIProps {
  totalTodos: number;
  completedTodos: number;
  searchValue: string;
  setSearchValue: (value: string) => void;
  shearchedTodos: DefaultTodosModel[];
  completeTodo: (text: string) => void;
  deleteTodo: (text: string) => void;
  loading: boolean;
  error: boolean;
}

function AppUI(props: AppUIProps) {
  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    shearchedTodos,
    completeTodo,
    deleteTodo,
  } = props;

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
          {loading && <p>Cargando...</p>}
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

        {/* <TodoItem />
            <TodoItem />
            <TodoItem /> */}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export { AppUI };
