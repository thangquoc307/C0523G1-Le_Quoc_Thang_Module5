
import './App.css';
import Counter from "./components/Counter";
function App() {
  return (
      <div>
        <Counter name={"Count 1"} init={0}/>
          <br/>
        <Counter name={"Count 2"} init={10}/>
      </div>
  );
}

export default App;
