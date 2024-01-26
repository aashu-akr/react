import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      count: 0,
    };
    console.log(this.props.name + "children component");
  }

  componentDidMount() {
    console.log(this.props.name + "children mounted");
  }

  render() {
    console.log(this.props.name + "children rendered");

    const { name, location, contact } = this.props;
    return (
      <div className="user-card">
        <h2>Count : {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increment
        </button>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          Count Decrement
        </button>
        <button
          onClick={() => {
            this.setState({
              count: 0,
            });
          }}
        >
          Reset
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
