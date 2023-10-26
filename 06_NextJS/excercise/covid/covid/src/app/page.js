import PageCovid from "@/app/page/PageCovid";

export default function Home({data}) {
    return (
        <>
            <h1>Vietnam's COVID-19 Information</h1>
            <PageCovid data={data}></PageCovid>
        </>
    )
}
