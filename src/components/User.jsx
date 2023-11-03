import { useState } from "react";

const User = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count - {count}</h1>
      <button onClick={()=> {
        setCount(count + 1)
      }}>Increase Count</button>
      <h2>Name - Himanshu</h2>
      <h3>Location - Bangalore</h3>
      <h3>designation - Software developer</h3>
    </div>
  );
};

export default User;
