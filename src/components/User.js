import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <h2>Count = {count}</h2>
      <h2>Count2 = {count2}</h2>
      <h2> Name: {props.name}</h2>
      <h3>Location: Mumbai</h3>
      <h4>Contact: adityajha@94</h4>
    </div>
  );
};

export default User;
