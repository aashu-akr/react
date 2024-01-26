import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>This is About Us page🚀</h1>
      <User
        name={"Ashu Kumar (using props)"}
        location={"Noida "}
        contact={"aashu-akr "}
      />
      <UserClass
        name={"ashu (using class)"}
        location={"Noida "}
        contact={"aashu-akr "}
      />
    </div>
  );
};

export default About;
