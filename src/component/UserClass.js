import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy",
        location: "Default",
        company: "Default",
      },
    };
    // console.log(this.props.name + "children component");
  }

  async componentDidMount() {
    // console.log(this.props.name + "children mounted");
    const data = await fetch("https://api.github.com/users/aashu-akr");

    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  render() {
    // console.log(this.props.name + "children rendered");

    const { name, location, company, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h1 className="m-2 p-2 text-"> Count : {this.state.count}</h1>
        <button
          className="p-2 m-2 border border-solid border-black "
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increment
        </button>
        <button
          className="p-2 m-2 border border-solid border-black"
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Count Decrement
        </button>
        <button
          className="p-2 m-2 border border-solid border-black"
          onClick={() => {
            this.setState({
              count: 0,
            });
          }}
        >
          Reset
        </button>
        {/* <img src={avatar_url}></img> */}
        <h2 className="py-2">Name: {name}</h2>
        <h3 className="py-2">Location: {location}</h3>
        <h4 className="py-2">Company: {company}</h4>
      </div>
    );
  }
}

export default UserClass;
