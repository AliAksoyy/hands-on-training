import Card from "./components/card/Card";

import data from "./util/data"



function App() {
  return (
    <>
     {data.map((item)=> {
      console.log(item)
      const {id,languages,img,btnName} = item
     return <Card key= {id} languages={languages} img={img} btn= {btnName} />

     })}

    </>
  );
}
export default App;
