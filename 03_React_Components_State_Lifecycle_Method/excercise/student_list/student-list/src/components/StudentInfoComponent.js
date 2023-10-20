export default function StudentInfo({id, name, age, address}) {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{address}</td>
        </tr>
    )
}
