import { MouseEvent, useState } from "react";

type Props = {
  data: string[];
};

function List({ data }: Props) {
  //leyendo el evento al hacer click a un objeto de la lista

  // const handleClick = (e:MouseEvent)=>{
  //   console.log(e);
  // }
  const [index, setIndex] = useState(1);

  const handleClick = (i: number) => {
    setIndex(i);
  };
  return (
    <ul className="list-group">
      {/* {data.map(element => <li onClick={handleClick} key={element} className="list-group-item">{element}</li>)} */}

      {data.map((element, i) => (
        <li
          onClick={() => handleClick(i)}
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
