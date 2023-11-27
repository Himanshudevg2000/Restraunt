import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class AboutClass extends React.Component {
  render() {
    return (
      <div>
        {/* <h1>About</h1> */}
        <UserClass name={"Himanshu"} />
      </div>
    );
  }
}

export default AboutClass;
