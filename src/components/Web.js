import React from "react";
import "../assests/css/app.css";
import ContentWrapper from "./ContentWrapper";
import SideBar from "./SideBar";

function Web() {
  return (
    <body>
      <div id="wrapper">
        <SideBar />
        <ContentWrapper />
      </div>
    </body>
  );
}

export default Web;
