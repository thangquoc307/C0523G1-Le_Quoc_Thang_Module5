import logo from './logo.svg';
import './App.css';
import StudentInfo from './components/StudentInfoComponent';

const students = [
    {id: 1, name: 'Thắng Quốc', age: 30, address:'Đà Nẵng'},
    {id: 2, name: 'Thắng Thua', age: 32, address:'Đà Điểu'},
    {id: 3, name: 'Người không chơi là người Thắng', age: 33, address:'Người lái ò sông Đà'},
    {id: 4, name: 'Người chơi là người Thắng nốt', age: 34, address:'Đà Đà'},
    {id: 5, name: 'Thắng Gấp', age: 31, address:'Đà Lạt'},
]
function App() {
  return (
      <table>
          <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
          </tr>
          {students.map(function (e) {
          return <StudentInfo id={e.id} name={e.name} age={e.age} address={e.address}/>
        })}
      </table>
  );
}

export default App;
