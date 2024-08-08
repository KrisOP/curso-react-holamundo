interface TodoCounter {
    total: number;
    completed: number;
  }

function TodoCounter(props: TodoCounter){

    const {total, completed} = props;
  
    return (
      <h1>
        Has completado {completed} de {total} tareas
      </h1>
    )
  }

  export {TodoCounter} ;