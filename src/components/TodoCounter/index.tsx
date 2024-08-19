import "./TodoCounter.css";

interface TodoCounter {
  total: number;
  completed: number;
}

function TodoCounter(props: TodoCounter) {
  const { total, completed } = props;

  // if (completed === total) {
  //   return (
  //     <h1 className="TodoCounter">
  //       ¡Felicidades! Has completado todas las tareas
  //     </h1>
  //   );
  // } else {
  //   return (
  //     <h1 className="TodoCounter">
  //       Has completado <span>{completed}</span> de <span>{total}</span> tareas
  //     </h1>
  //   );
  // }

  return completed === total ? (
    <h1 className="TodoCounter">
      ¡Felicidades! Has completado todas las tareas 
    </h1>
  ) : (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span> {total} </span> tareas
    </h1>
  );
}

export { TodoCounter };
