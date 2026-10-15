import React from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent constructor is called");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent Render is called");
    return (
      <div>
        <h1>About</h1>
        <h1>This is Namaste React About Page</h1>
        <UserClass name="Aditya Jha Class Based" location="Delhi" />
      </div>
    );
  }
}
/*const About = () => {
  console.log("About is rendering");
  return (
    <div>
      <h1>About</h1>
      <h1>This is Namaste React About Page</h1>
      <UserClass name="Aditya Jha Class Based" location="Delhi" />
    </div>
  );
};*/

export default About;
