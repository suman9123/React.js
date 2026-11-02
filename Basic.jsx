import { userState } from "react";

const App = () => {
    const [count, setCount] = userState(10);

    function clickHandler() {
        setCount(count++)
        console.log(count);
    }

    return (
        <div style={{ textAlign: 'center', fontSize: '50px', fontWeight: '900px' }}>
            <h1>{count}</h1>
            <button onClick={clickHandler}>increment</button>
        </div>
    )
}

export default App