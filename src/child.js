import React, { useContext } from 'react'
import counterContext from './counterContext';

const Child=()=>{

    const counterValue=useContext(counterContext);
    return(
        <div>
            <h1>Context counter is {counterValue} </h1>
            <button onClick={()=>{ counterValue[1](++counterValue[0])}  }>
                Context counter
            </button>
        </div>
    )
}

export default Child