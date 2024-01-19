import { useState } from "react";

function Remove(){
    let [counter,setCounter]=useState(25);

    const removeValue=()=>{
        // counter=counter-1;
        // setCounter(counter)
        // console.log("clicked",counter)
        if (counter>=0){
            console.log("Value will change")
        }
        else {
           console.log("value will not b changed")
        }
    }


return(
    <>
    <h2>Click the button and see the value increase one by one!</h2>
    <h3>counter value:{counter}</h3>
    <button
    onClick={removeValue}>Remove Value!</button>    
    </>
)

}
export default Remove;