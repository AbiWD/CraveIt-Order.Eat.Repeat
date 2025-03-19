import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //Api calls
  }, []);

  return (
    <div className="user-card">
      <h2>Name: {props.name}</h2>
      <h3>Location: Mangalore</h3>
      <h4>Contact: abhhilash@gmail.com</h4>
    </div>
  );
};

export default User;
