import './App.css'
import Titulo from './Titulo.tsx';
//import Card from './components/Card.tsx';
import Card, {CardBody} from './components/Card'

function App() {
  return  (
    <>
      <Titulo/>
      <Card body={"Hola mundo xD"}/>

      <CardBody title={"Hola mundo xD"} text={"El texto del componente "}/>

      
    </>
  )
}

export default App
