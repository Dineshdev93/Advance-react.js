import "./App.css";
import React from "react";
// import Getapicall from "./Components.js/Getapicall"
// import Postapi from "./Components.js/Postapi";
import Postapi2 from "./Components.js/Postapi2";  //(Managed)
import Getapi2 from "./Components.js/Getapi2";    //(Managed)
function App() {
 
  return (
    <div className="App">
       {/* <Postapi/> */}
      {/* <Getapicall/> */}
      <Postapi2/><br/>
      <Getapi2/>
    </div>
  );
}

export default App;

