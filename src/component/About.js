import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("parent component");
  }

  componentDidMount() {
    // console.log("parent mounted");
  }
  render() {
    // console.log("parent rendered");

    return (
      <div className="text-center m-10 p-10">
        <h1 className="text-xl font-bold">This is About Us page🚀</h1>
        <UserClass
          name={"ashu (using class)"}
          location={"Noida "}
          contact={"aashu-akr "}
        />
      </div>
    );
  }
}

export default About;
