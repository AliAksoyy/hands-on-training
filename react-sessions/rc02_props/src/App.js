
import Person from "./component/Person"

import data from "./data";


function App () {
console.log(data);
return(
  <div>

  
   {data.map((item,i)=>{
    return(
      <Person key={item.name} {...item} />
    )
  })}
  
  
  </div>
)

}

export default App