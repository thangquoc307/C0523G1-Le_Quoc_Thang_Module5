import logo from './logo.svg';
import './App.css';
import BookManage from "./books/Book";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<BookManage />} />
              <Route path={id} element={<BookManage id={id}/>} />
          </Routes>
        <BookManage/>
      </>
  );
}

export default App;
