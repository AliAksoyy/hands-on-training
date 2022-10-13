import Event from "./components/1-events/Event";
import Counter from "./components/2-classComponents/Counter";
import { UseStateCounter as Use } from "./components/useStateCounter/UseStateCounter";



function App() {
  return (
    <div>

    <Event />
    <Counter />
    <Counter count={5}/>
    <Use />

    </div>
  );
}
export default App;
