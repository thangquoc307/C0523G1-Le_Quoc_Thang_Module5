import { Component } from "react";
class StudentInfo extends Component {
    render() {
        return (
    <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.age}</td>
        <td>{this.props.address}</td>
    </tr>
        )
    }
}
export default StudentInfo;
