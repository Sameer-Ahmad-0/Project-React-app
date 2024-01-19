import { useState } from "react";

function Add(){
    

   let [counter ,setCounter]= useState(15);
    // let counter=15;
    const addValue=()=>{
        counter=counter+1;
        setCounter(counter)
        console.log("clicked",counter) 
    }

    return(<>
        <h2>Click the add button and increase value one by one!</h2>
        <h3>counter value:{counter}</h3>
        <button
        onClick={addValue}>Add here!</button>
        
        </>
        )



}

export default Add;