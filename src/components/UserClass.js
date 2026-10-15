import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
        avatar_url: "http://dummyImage.com",
      },
    };
    console.log("Child constructor is called");
  }

  async componentDidMount() {
    console.log("Child componentDidMount");
    const data = await fetch("https://api.github.com/users/adityajha94");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("component did update is called");
  }

  componentWillUnmount() {
    console.log("component will unmount is called");
  }

  render() {
    console.log("Child Render is called");
    const { name, location, login, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2> Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {login}</h4>
      </div>
    );
  }
}

export default UserClass;
