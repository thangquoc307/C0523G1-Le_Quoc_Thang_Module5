import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import DisplayBook from "./components/DisplayBook";
import EditBook from "./components/EditBook";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateBook from "./components/CreateBook";

function App() {
  return (
      <>
      <ToastContainer/>
        <Routes>
          <Route path="/" element={<DisplayBook/>}></Route>
          <Route path="/create" element={<CreateBook/>}></Route>
          <Route path="/edit/book/:id" element={<EditBook/>}></Route>
        </Routes>
      </>
  );
}

export default App;
