import { useState } from "react";

export default function MyTest(){

    

    const [test, setTest] = useState(0);

    const increment = () =>
    {
        setTest(test+1);
    };
    return (
        <div>
            <p>value is {test}</p>
            <button onClick={increment}>+ Add</button>
        </div>
    );
    

}

