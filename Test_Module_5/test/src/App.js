import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import StudentDisplay from "./students/StudentDisplay";
import StudentCreate from "./students/StudentCreate";
import StudentEdit from "./students/StudentEdit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StudentDisplay/>}></Route>
        <Route path="/create" element={<StudentCreate/>}></Route>
        <Route path="/edit/:id" element={<StudentEdit/>}></Route>
      </Routes>
    </>
  );
}

export default App;
