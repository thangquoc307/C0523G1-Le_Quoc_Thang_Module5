import {useState} from "react";
function Counter(props) {
    const name = props.name;
    let [count, setCount] = useState(0);
    const handleClick = () => {
        const newValue = count + 1;
        setCount(newValue);
    };
    return (
        <div>
            {name} : {count}
            <br/>
            <button onClick={handleClick}>Add {name}</button>
        </div>
    )
}
export default Counter;