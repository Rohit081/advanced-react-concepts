import React, {useRef, useState} from 'react';
import Input from "./input";

const ForwardRefDemo = () => {
    const inputRef = useRef();

    const callRefHook = () => {
        inputRef.current.focus()
    }

    return(
        <div>
            <Input ref={inputRef}></Input>
            <button onClick={() => callRefHook()}>Show Ref</button>
        </div>
    )
}

export default ForwardRefDemo;
