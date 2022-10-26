import React, {useRef, useState} from 'react';

const UseRefHookDemo = () => {
    const [value, setValue] = useState(0)
    const inputRef = useRef();

    const callRefHook = () => {
        console.log(inputRef.current)
    }

    return(
       <div>
           <input
               type='number'
               ref={inputRef}
               value={value}
               onChange={e => setValue(e.target.value)}
           />
           <button onClick={() => callRefHook()}>Show Ref</button>
       </div>
    )
}

export default UseRefHookDemo;
