
import React, { useState } from "react";

function Hook(){
    let  [input, setInput] =  useState("");
    function changeState(event){
        setInput(event.target.value);
    }
    return {input, changeState};
}
export default Hook;