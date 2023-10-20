import logo from './logo.svg';
import './App.css';
import {useState} from "react";

export default function App (){
    const [list, setList] = useState(['ăn', 'ngủ', 'nghỉ']);
    const [item, setItem] = useState('');

  const handleChange = (event) => {
      setItem(event.target.value);
  };
  const handleAddItem = () => {
      if (item.trim() != ''){
          setList(() => {
              return [...list, item];
          })
          setItem('');
      }
  };
    return (
        <div>
          <h2>Todo List</h2>
          <input
              type={"text"}
              value={item}
              onChange={handleChange}
          />
          <button onClick={handleAddItem}>Add</button>
          <table>
              <thead>
              <tr>
                  <th>No.</th>
                  <th>Description</th>
              </tr>
              </thead>
              <tbody>
                  {list.map(function (e,index) {
                              return (
                                  <tr key={index}>
                                      <td>{index + 1}</td>
                                      <td>{e}</td>
                                  </tr>
                              )
                          }
                      )
                  }
              </tbody>
          </table>
        </div>
    )
}
