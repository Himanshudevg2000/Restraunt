import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy",
        location: "Dummy",
        avatar_url: "http://dummy.com"
      },
    };
    console.log("constructor")
  }

  async componentDidMount() {
    console.log("firstComponentDidMount")
    const data = await fetch("https://api.github.com/users/Himanshudevg2000");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log("lastComponentDidMount")
  }

  render() {
    // const { name } = this.props;
    console.log("render")

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div>
        <div>
          <h2>Count - {this.state.count}</h2>
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            Count Increase
          </button>
          {/* <h2>Name - {name}</h2>
          <h3>Location - Bangalore</h3>
          <h3>designation - Software developer</h3> */}
        </div>
        <div>
          <h2>User Details</h2>
          <h3>Name - {name}</h3>
          <h3>Avatar - </h3>
          <img src={avatar_url} height="200px"></img>
        </div>
      </div>
    );
  }
}

export default UserClass;
