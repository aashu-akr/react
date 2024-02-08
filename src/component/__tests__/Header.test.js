import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";

it("should load Header Component with a login button ", () => {
  render(
    <Provider store={appStore}>
      <Header />
    </Provider>
  );
});
