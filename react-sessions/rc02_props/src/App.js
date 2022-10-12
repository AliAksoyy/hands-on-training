
import Person from "./component/Person"

import data from "./data";


function App () {
console.log(data);
return(
  <div>

  
   {data.map((item,i)=>{
    return(
      <Person key={i} name={item.name} img={item.img} tel={item.tel} />
    )
  })}
  
  
  </div>
)

}

export default App