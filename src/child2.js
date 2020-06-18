import React, { useReducer } from 'react'
import counterReducer from './counterReducer';

const Child2=()=>{
    let [state,dispatch]=useReducer(counterReducer,3);
    return(
        <div>
            <h3>The value of Reducer Counter is {state}</h3>
            <button onClick={()=>{dispatch('INCREMENT')}}>
                Reducer INCREMENT
            </button>
            <span>  </span>
            <button onClick={()=>{dispatch('DECREMENT')}}>
                Reducer DECREMENT
            </button>
        </div>
    )
}
export default Child2