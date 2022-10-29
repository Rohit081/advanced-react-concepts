import React from 'react';

import HigherOrderComponentDemo from './HigherOrderComponentDemo'

//Counter A has a common functionality of increment as Counter B
const CounterA = (props) => {
    //destructuring
    const {counter, incrementFunc} = props;
    return(
        <div>
            <h2>CounterA value: {counter}</h2>
            <button onClick={() => incrementFunc(5)}>Increment 5</button>
        </div>
    )
}

export default HigherOrderComponentDemo(CounterA);
