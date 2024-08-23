import React, { ReactElement, ReactNode } from "react";

import "./todosearch.css";
interface TodoSearchProps {
  propSearchValue: string;
  propSetSearchValue: (value: string) => void;
}

function TodoSearch(props: TodoSearchProps) {
  const { propSearchValue, propSetSearchValue } = props;

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
