import React, { useState } from 'react'
const Counter = () => {
const [counter, setCounter ] = useState(4)
const [user, setUser ] = useState("chaya")
const onAdd1=()=>{
   setCounter(counter+1)
   if(counter+1 > 10){
    setUser("jack")
   } 
}

    return (
        <div className='container'>
            <h2>counter of {user} : {counter}</h2>
            <button onClick={onAdd1}>add 1</button>
            <button onClick={()=>{setCounter(counter-5)}}>reduce 5</button>
        </div>
    )
}

export default Counter