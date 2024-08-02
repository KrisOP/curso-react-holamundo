import { MouseEvent } from "react";

type Props = {
  data: string[];
};

function List({data}: Props) {

  //leyendo el evento al hacer click a un objeto de la lista
  const handleClick = (e:string)=>{
    console.log(e);
  }
  return (
    <ul className="list-group">
        {/* {data.map(element => <li onClick={handleClick} key={element} className="list-group-item">{element}</li>)} */}

        {data.map(element => <li onClick={()=>handleClick(element)} key={element} className="list-group-item">{element}</li>)}
    </ul>
  );
}

export default List;
