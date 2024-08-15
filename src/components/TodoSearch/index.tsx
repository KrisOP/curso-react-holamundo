import React from "react";

import "./todosearch.css";

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState("");

  console.log("Los usuarios han escrito: " + searchValue + " ");
  
  return (
    <input
      className="TodoSearch"
      type="text"
      placeholder="Nueva tarea"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
        console.log(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
