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
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Nested Testing JS"),
    React.createElement("h1", {}, "Nested Testing JS 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Nested Testing JS"),
    React.createElement("h1", {}, "Nested Testing JS 2"),
  ]),
]);

console.log(parent);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello World from React",
);
//console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
