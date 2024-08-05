import "./App.css";
import Titulo from "./Titulo.tsx";
//import Card from './components/Card.tsx';
import Card, { CardBody } from "./components/Card";
import List from "./components/List.tsx";

function App() {
  //const list = ['uno','dos','tres'];
  const list: string[] = [];
  const handleSelect = (element: string) => {
    console.log("Imprimiendo " + element);
  };

  const handleSelect2 = (element: string) => {
    console.log("Mostrando " + element);
  };

  //si hay elementos en la lista mostrarlos
  // const contenido = list.length ? (
  //   <>
  //   <List data={list} onSelect={handleSelect} />
  //   <List data={list} onSelect={handleSelect2} /></>
 
  // ) : (
  //   "Sin elementos que mostrar"
  // );

  const contenido = list.length !== 0 ? (
    <>
    <List data={list} onSelect={handleSelect} />
    <List data={list} onSelect={handleSelect2} /></>
 
  ) : (
    "Sin elementos que mostrar"
  );


  return (
    <>
      <Titulo />
      {/* <Card body={'Hola mundo'}/> */}
      <Card>
        <CardBody title={"Hola mundo xD"} text={"El texto del componente "} />
        {/* <List data={list} onSelect={handleSelect} />

        <List data={list} onSelect={handleSelect2} /> */}
        {contenido}
      </Card>
    </>
  );
}

export default App;
