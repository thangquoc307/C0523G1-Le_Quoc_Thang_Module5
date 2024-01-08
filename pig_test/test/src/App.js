import logo from './logo.svg';
import './App.css';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {Route, Routes} from "react-router-dom";
import {Pigs} from "./components/Pigs";
import {CreatePigs} from "./components/CreatePigs";
import {EditPigs} from "./components/EditPigs";

function App() {
  return (

      <>
        <ToastContainer/>
        <Routes>
          <Route path={"/"} element={<Pigs/>}/>
          <Route path={"/create"} element={<CreatePigs/>}/>
          <Route path={"/edit/:id"} element={<EditPigs/>}/>
        </Routes>
      </>
  );
}

export default App;
