export default function StudentInfo({id, name, age, address}) {
    return (
        <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{address}</td>
        </tr>
    )
}
