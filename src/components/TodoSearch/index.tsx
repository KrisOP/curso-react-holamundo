import React, { ReactElement, ReactNode } from "react";

import "./todosearch.css";
import { TodoContext } from "../../TodoContext";
interface TodoSearchProps {
  propSearchValue: string;
  propSetSearchValue: (value: string) => void;
}

function TodoSearch() {
  const { searchValue: propSearchValue, setSearchValue: propSetSearchValue } = React.useContext(TodoContext)
  
  return (
    <input
      className="TodoSearch"
      type="text"
      placeholder="Nueva tarea"
      value={propSearchValue}
      onChange={(event) => {
        propSetSearchValue(event.target.value);
        //console.log(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
