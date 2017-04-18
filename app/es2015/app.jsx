import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header.component.jsx";
import Footer from "./components/footer.component.jsx";
import Main from "./components/main.component.jsx";

var app = document.getElementById("app");
var footerplace = document.getElementById("footerplace");
var headerplace = document.getElementById("headerplace");

ReactDOM.render(<Header />, headerplace);
ReactDOM.render(<Main />, app);
ReactDOM.render(<Footer />, footerplace);



console.log("Все работает! Ура!");