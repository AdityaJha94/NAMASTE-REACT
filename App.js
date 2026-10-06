import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const temp = <h3>This is Temp</h3>;
const Title = () => (
  <h1 className="head" tabIndex="1">
    Namaste Dev by JSX
  </h1>
);

// React Functional Components
const HeadingComponent = () => (
  <div id="container">
    {console.log("Adityaaaaaa")}
    {temp}
    <Title />
    <h1 className="header">This is my first functional component.</h1>
  </div>
);

// Assignment
// React Element
const title = React.createElement("div", { className: "title" }, [
  React.createElement("h1", { key: "h1" }, "Heading 1"),
  React.createElement("h2", { key: "h2" }, "Heading 2"),
  React.createElement("h3", { key: "h3" }, "Heading 3"),
]);

// JSX element
const jsxTitle = (
  <div className="title">
    <h1>Heading 1 JSX</h1>
    <h2>Heading 2 JSX</h2>
    <h3>Heading 2 JSX</h3>
    jsxDesc
  </div>
);

const jsxDesc = (
  <div className="title">
    <h4>Heading 1 JSX Dummy</h4>
  </div>
);

const DescComponent = () => {
  return (
    <div className="desc">
      <h4>Heading 1 Desc JSX Component</h4>
    </div>
  );
};

// JSX Component
const TitleComponent = () => {
  return (
    <div className="title">
      <h1>Heading 1 JSX Component</h1>
      <h2>Heading 2 JSX Component</h2>
      <h3>Heading 2 JSX Component</h3>
      <DescComponent></DescComponent>
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img
          className="logo"
          src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
          alt="Logo"
        />
        <h2 className="brand-name">MyApp</h2>
      </div>

      <div className="header-middle">
        <input
          type="text"
          className="search-bar"
          placeholder="Search here..."
        />
      </div>

      <div className="header-right">
        <img
          className="user-icon"
          src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
          alt="User Icon"
        />
      </div>
    </header>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<HeadingComponent />);
root.render(<Header />);
