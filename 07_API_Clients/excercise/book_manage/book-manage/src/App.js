import logo from './logo.svg';
import './App.css';
import BookManage from "./books/Book";
import {Route, Routes} from "react-router-dom";
import BookDetail from "./books/BookDetail";
import CreateBook from "./books/CreateBook";

function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<BookManage />} />
              <Route path="/create" element={<CreateBook />} />
              <Route path="/detail/:id" element={<BookDetail />} />
          </Routes>
      </>
  );
}

export default App;
