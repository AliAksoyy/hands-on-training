import Event from "./components/1-events/Event";
import Counter from "./components/2-classComponents/Counter";



function App() {
  return (
    <div>

    <Event />
    <Counter />
    <Counter count={5}/>

    </div>
  );
}
export default App;
