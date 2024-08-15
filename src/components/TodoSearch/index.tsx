import './todosearch.css';

function TodoSearch() {
    return (
      <input  className="TodoSearch" type="text" placeholder="Nueva tarea" onChange={(event) => console.log(event.target.value)}/>
    );
  }
  
  export { TodoSearch };