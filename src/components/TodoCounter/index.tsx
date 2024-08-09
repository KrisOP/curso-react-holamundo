import './TodoCounter.css'

interface TodoCounter {
    total: number;
    completed: number;
  }

function TodoCounter(props: TodoCounter){

    const {total, completed} = props;
  
    return (
      <h1 className='TodoCounter' >
        Has completado <span>{completed}</span>  de <span> {total} </span>  tareas
      </h1>
    )
  }

  export {TodoCounter} ;