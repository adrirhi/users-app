import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(() => ({}));

export const customRender = (ui, options) => {
  render(<Provider store={options?.store || store}>{ui}</Provider>);
};
