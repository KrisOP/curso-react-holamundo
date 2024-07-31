import './App.css'
import Titulo from './Titulo.tsx';
//import Card from './components/Card.tsx';
import Card, {CardBody} from './components/Card';
import List from './components/List.tsx';

function App() {
  const list = ['uno','dos','tres'];
  return  (
    <>
      <Titulo/>
      {/* <Card body={'Hola mundo'}/> */}
      <Card>
        <CardBody title={"Hola mundo xD"} text={"El texto del componente "}/>
        <List data={list}/>
      </Card>

   

      
    </>
  )
}

export default App
