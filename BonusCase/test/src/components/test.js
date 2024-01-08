export default function Test() {
    const testingDisplay1 = () => {
        return "abc";
    }
    const testingDisplay2 = () => {
        return "def";
    }
    return (
        <>
            <h1>{testingDisplay1()}</h1>
            <h1>{testingDisplay2}</h1>
        </>
    )

}