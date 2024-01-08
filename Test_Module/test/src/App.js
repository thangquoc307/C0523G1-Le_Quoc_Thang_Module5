import './App.css';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {Route, Routes} from "react-router-dom";
import Products from "./components/Products";
import Create from "./components/Create";
import Edit from "./components/Edit";
function App() {
  return (
      <>
        <ToastContainer/>
        <Routes>
            <Route path="/" element={<Products/>}></Route>
            <Route path="/create" element={<Create/>}></Route>
            <Route path="/edit/:id" element={<Edit/>}></Route>
        </Routes>
      </>
  );
}

export default App;
