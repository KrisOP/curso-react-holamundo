import "./App.css";
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
