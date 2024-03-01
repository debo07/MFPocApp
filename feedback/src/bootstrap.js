import React from "react";
import ReactDOM from "react-dom";
import Feedback from "./components/Feedback";
import enableMocking from "./utils/utils";

function start() {
    enableMocking().then(() => {
        console.log("Mocking enabled");
        ReactDOM.render(<Feedback />, document.getElementById("root"));
    });
}

start();
