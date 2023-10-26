import axios from "axios";

export async function getStaticProps() {
    const res = await axios.get("http://localhost:8080/covid")
    const data = res.json();

    return {
        props: {
            data
        }
    };
}
export default function PageCovid({data}) {
    let covidList = getStaticProps();
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
                {data.map((e, index) => {
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
