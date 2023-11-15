import React from "react";
import Countbutton from "./Count"

function App(){
    //const item = "mike"
    return(
      <div>
        <Countbutton incrementBy={1}/>
        <Countbutton incrementBy={2}/>
      </div>
    )
  }

  export default App