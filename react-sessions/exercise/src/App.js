


import "../src/App.css"

const App = () => {



  return (
    <div className="App">
   
    <input type="text"  onChange={(e)=> console.log(e)}/>
    <button onClick={()=> alert("ali baba")}>değiştir</button>
      
    </div>
  )
}

export default App
