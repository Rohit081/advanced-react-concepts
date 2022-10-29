import React from 'react';

import HigherOrderComponentDemo from './HigherOrderComponentDemo'

const CounterB = (props) => {
    const {counter, incrementFunc} = props;
    return(
        <div>
            <h2>CounterB value: {counter}</h2>
            <button onClick={() => incrementFunc(10)}>Increment 10</button>
        </div>
    )
}

export default HigherOrderComponentDemo(CounterB);
