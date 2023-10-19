import './App.css';
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import Mainpage from "./components/mainpage/Mainpage";

function App() {
  return (
      <div id="body" className="color2">
        <Header/>
          <Routes>
              <Route path="/" element={<Mainpage/>}/>
          </Routes>
      </div>
  );
}

export default App;
