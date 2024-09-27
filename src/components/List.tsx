import { useState } from "react";

type Props = {
  data: string[];
  onSelect?: (element: string) => void; //esta funcion podria ser indefinida
};

function List({ data, onSelect }: Props) {
  //leyendo el evento al hacer click a un objeto de la lista

  // const handleClick = (e:MouseEvent)=>{
  //   console.log(e);
  // }
  const [index, setIndex] = useState(1);

  const handleClick = (i: number, element:string) => {
    setIndex(i);
    onSelect?.(element); //si esta definido element ejecutarlo
  };
  return (
    <ul className="list-group">
      {/* {data.map(element => <li onClick={handleClick} key={element} className="list-group-item">{element}</li>)} */}

      {data.map((element, i) => (
        <li
          onClick={() => handleClick(i,element)}
          key={element}
          className={`list-group-item ${index == i ? "active" : ""}`}
        >
          {element}
        </li>
      ))}
    </ul>
  );
}

export default List;
