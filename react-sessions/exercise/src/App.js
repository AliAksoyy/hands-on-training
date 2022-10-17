


import "../src/App.css"

const App = () => {

  const handleClick = (a,e) => {
    console.log(a,e)
  }


  return (
    <div className="App">
   
    <h2>ali</h2>
    <button onClick={() => {
    handleClick("beyda")}}>add</button>
    </div>
  )
}

export default App
