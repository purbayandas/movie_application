import React from "react";
import Hook from "./Hookfile";
function OnInputChange(e){     

       let {input, setInput} = Hook();
       setInput(e); 
}

export default OnInputChange;