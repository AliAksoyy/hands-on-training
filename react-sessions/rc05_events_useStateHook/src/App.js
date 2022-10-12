import Events from "./components/1-events/Events";
import Counter from "./components/2-classComponent/Counter";
import { UseStateCounter as Use } from "./components/3-useStateHook/UseStateCounter";

function App() {
  return (
    <div>

      <Events />
      <Counter  />
      <Counter counter={5} />
      <Use />

    </div>
  );
}
export default App;
