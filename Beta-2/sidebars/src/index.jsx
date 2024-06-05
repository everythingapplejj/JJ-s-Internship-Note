/*
import React from "react";
import ReactDOMClient from "react-dom/client";
import { Sidebar } from "./screens/Sidebar";
import { Bar } from "../top_element/src/screens/Bar";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);

root.render(
  <React.Fragment>
    <Bar />
    <Sidebar />
  </React.Fragment>
);
*/
import React from "react";
import ReactDOMClient from "react-dom/client";
import { Sidebar } from "./screens/Sidebar";
import { Bar } from "../top_element/src/screens/Bar";


const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);

root.render(
  <div style={{ display: 'side' }}>
    <Bar />
    <Sidebar />
  </div>
);



/*
this is for bookkeeping
import React from "react";
import ReactDOMClient from "react-dom/client";
import { Sidebar } from "./screens/Sidebar";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Sidebar />);
*/
