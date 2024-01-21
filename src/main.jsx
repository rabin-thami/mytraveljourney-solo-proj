import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./style.css"


import App from "./App"
import Navbar from "./Navbar"

ReactDOM.createRoot(document.querySelector("#root")).render(
    <React.StrictMode>
        <Navbar />
        <App />
    </React.StrictMode>
)