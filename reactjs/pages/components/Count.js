import React, {useState} from "react";


function Countbutton(props){
    const [count, setCount] = useState(0)

    function increment(){
        if(count === 10){
            setCount(0)
        }else{
            setCount(count + props.incrementBy)
        }
        
    }

    return(
        <div>
            <button onClick={increment}>+{props.incrementBy}</button>
            <div>{count}</div>
        </div>
    )
}

export default Countbutton