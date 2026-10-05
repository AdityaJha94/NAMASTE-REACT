import React from "react";
import ReactDOM from "react-dom/client";
/**
 * <div id="parent">
 *     <div id= "child">
 *        <h1>Nested Testing JS</h1>
 *        <h2>Nested Testing JS 2</h2>
 *     </div>
 *     <div id= "child2">
 *        <h1>Nested Testing JS</h1>
 *        <h2>Nested Testing JS 2</h2>
 *     </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "child" }, [
    React.createElement("h1", { key: "child1-h1" }, "Nested Testing JS"),
    React.createElement("h1", { key: "child1-h2" }, "Nested Testing JS 2"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "child2-h1" }, "Nested Testing JS"),
    React.createElement("h1", { key: "child2-h2" }, "Nested Testing JS 2"),
  ]),
]);

console.log(parent);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello World from React",
);
//console.log(heading);
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(parent);
