import './App.css';
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import Mainpage from "./components/mainpage/Mainpage";
import Create from "./components/create/Create";

function App() {
  return (
      <div id="body" className="color2">
        <Header/>
          <Routes>
              <Route path="/" element={<Mainpage/>}/>
              <Route path="/create" element={<Create/>}/>
          </Routes>
      </div>
  );
}

export default App;
