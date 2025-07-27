import { useEffect, useState } from "react";
const User = ({name}) => {
    const [value, setValue] = useState(0);
    const [value1] = useState(1);

    useEffect(() => {
        setValue(27);
        console.log("UseEffectttt");
        const interval = setInterval(() => {
            console.log("INSIDE INTERVAL");
        }, 2000);

        return ()=> {
            clearInterval(interval);
        }

    },[]);

    return (
        <div className="user-card">
            <h5>Count: {value}</h5> <h5>Count1: {value1}</h5>
            <button onClick={() => setValue(value+1)}>Increase Count</button>
            <h5>Name: {name}</h5>
        </div>
    )
}
export default User;