import {useIncrement} from "./useIncrement";
export default function Counter({name, init}) {
    let [count, changeCount] = useIncrement(init);

    return (
        <div>
            {name} : {count}
            <br/>
            <button onClick={changeCount}>Add {name}</button>
        </div>
    )
}