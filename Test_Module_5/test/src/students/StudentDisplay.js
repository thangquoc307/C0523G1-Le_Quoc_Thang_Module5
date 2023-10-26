import {useEffect, useState} from "react";
import {StudentApi} from "../service/ApiConnection";
import {useNavigate} from "react-router-dom";

export default function StudentDisplay() {
    const navigate = useNavigate();
    const [students, setStudent] = useState();
    const getStudents = async () => {
        let data = await StudentApi();
        setStudent(data);
    }

    useEffect(() => {
        getStudents();
    }, []);

    if (!students) {
        return null;
    } else {
        return (
            <>
                <h2>Student List</h2>
                <button
                    className="add button"
                    onClick={() => navigate("/create")}
                >+Add</button>

                <table>
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {students.map((e, index) => {
                        return (
                            <tr key={e.id}>
                                <td>{index + 1}</td>
                                <td>{e.name}</td>
                                <td>{e.class.className}</td>
                                <td>
                                    <button
                                        className="button edit"
                                        onClick={() => {navigate("/edit/" + e.id)}}
                                    >edit</button>
                                    <button className="button delete">delete</button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </>
            )
    }
}