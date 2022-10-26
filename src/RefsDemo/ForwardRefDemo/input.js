import React, {useRef, useState} from 'react';

//a reference for the parent component
const Input = React.forwardRef((props,ref) => {
    return(
        <input
            type='number'
            ref={ref}
        />
    )
})

export default Input;
