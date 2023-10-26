import axios from "axios";
export default function List({covid}) {
    return (
        <>
            <h1>Vietnam's COVID-19 Information</h1>
            <table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Date</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                </tr>
                </thead>
                <tbody>
                {!covid ? "" : covid.map((e, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{e.date}</td>
                            <td>{e.confirmed}</td>
                            <td>{e.active}</td>
                            <td>{e.recovered}</td>
                            <td>{e.deaths}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </>
    )

}
export const getStaticProps = async () => {
    const res = await axios.get("http://localhost:8080/covid");
    return {
        props: {
            covid: res.data
        }
    }
};