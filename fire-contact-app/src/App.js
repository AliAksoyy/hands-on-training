
import './App.css';
import Form from './components/Form';
import Tables from './components/Tables';


function App() {
  return (
      <div className='px-5' style={{display:"flex", alignItems:"center", justifyContent:"space-between", height:"100vh",width:"80rem", margin:"0 auto"}}>
        <Form />
        <Tables/>
      </div>
  );
}

export default App;
