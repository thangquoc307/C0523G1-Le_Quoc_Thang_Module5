import './App.css';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import Vegatable from "./components/Vegatable";
import {Route, Routes} from "react-router-dom";
import Test from "./components/test";
function App() {
  return (
      <>
          <ToastContainer/>

          <Routes>
              {/*<Route path="/" element={<Test/>} />*/}
              <Route path="/" element={<Vegatable/>} />
          </Routes>
      </>
  );
}

export default App;
