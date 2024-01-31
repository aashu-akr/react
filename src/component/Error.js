import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className=" flex justify-center font-bold py-10">
      <h1>
        <br>Oops!!!</br>
      </h1>
      <h2>
        <span>Error 404 : Not Found</span>
      </h2>
      <h2> Something went wrong...</h2>
    </div>
  );
};

export default Error;
