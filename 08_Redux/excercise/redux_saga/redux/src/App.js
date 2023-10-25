import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { UserList } from "./components/UserList";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<UserList />}></Route>
        </Routes>
      </div>
  );
}

export default App;