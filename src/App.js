import "./scss/main.scss";
import React from "react";


import LeftSide from "./components/leftside/index";
import RightSide from "./components/rightside/index";
import Feed from "./components/feed/index";

function App() {
 


  return (
    <div className="container">
      <LeftSide />
      <div className="main">
        <Feed />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
