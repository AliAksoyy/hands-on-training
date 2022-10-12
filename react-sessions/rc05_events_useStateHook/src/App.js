import Events from "./components/1-events/Events";
import Counter from "./components/2-classComponent/Counter";

function App() {
  return (
    <div>

      <Events />
      <Counter  />
      <Counter counter={5} />

    </div>
  );
}
export default App;
