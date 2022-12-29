
import './App.css';
import Card from './component/card/Card';
import data from "./utils/data"



function App() {
 
  
 return <>
  {data.map((item)=> {
   
    return(
      <Card key={item.id} {...item}  />
    )
  })}
 </>

}

export default App;
