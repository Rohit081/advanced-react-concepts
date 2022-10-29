import React, {useState} from 'react';

//Higher Order Component could be used when there is a common functionality among different components
//It makes the code reusable
const HigherOrderComponentDemo = (OriginalComponent) => {
    const HigherOrderComponent = (props) => {
        const [counter, setCounter] = useState(0);

        const incrementCounter = (value) => {
            setCounter(counter + value);
        }

        return(
            <OriginalComponent counter={counter} incrementFunc={(value) => incrementCounter(value)}/>
        )
    }

    return HigherOrderComponent;
}

export default HigherOrderComponentDemo;
