import logo from './logo.svg';
import './App.css';
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['ăn', 'ngủ', 'nghỉ'],
      item: ''
    }
  }
  handleChange = (event) => {
      this.setState({
          item: event.target.value
      })
  };
  handleAddItem = () => {
      if (this.state.item.trim() != ''){
          this.setState({
              list: [...this.state.list, this.state.item],
              item: ''
          })
      }
  };
  render() {
    return (
        <div>
          <h2>Todo List</h2>
          <input
              type={"text"}
              value={this.state.item}
              onChange={this.handleChange}
          />
          <button onClick={this.handleAddItem}>Add</button>
          <table>
              <thead>
              <tr>
                  <th>No.</th>
                  <th>Description</th>
              </tr>
              </thead>
              <tbody>
                  {this.state.list.map(function (e,index) {
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
}
export default App
