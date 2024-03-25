import { useNavigate, useParams } from "react-router-dom";

import { customRender } from "../../utils/testUtils";
import User from ".";
import { fireEvent, screen } from "@testing-library/react";
import { addUserAction, updateUserAction } from "../reducer/users/actions";
import { createStore } from "redux";

// const navigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn().mockReturnValue(jest.fn()),
  useParams: jest.fn().mockReturnValue({}),
}));

jest.mock("../reducer/users/actions", () => ({
  ...jest.requireActual("../reducer/users/actions"),
  addUserAction: jest.fn().mockReturnValue({ type: "foo_type", payload: null }),
  updateUserAction: jest
    .fn()
    .mockReturnValue({ type: "foo_type", payload: null }),
}));

const getAddBtn = () => screen.getByRole("button", { name: "Ajouter" });

describe("User", () => {
  test("display empty form to add new user", () => {
    customRender(<User />);

    const addBtn = getAddBtn();

    expect(addBtn).toBeInTheDocument();

    const inputs = screen.getAllByRole("textbox");
    expect(inputs[0]).toHaveValue("");
  });

  test("handle add user", () => {
    const expectedUser = {
      id: 7,
      name: "driss",
      lastname: "eladrirhi",
    };
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    customRender(<User />);

    // acts
    const inputs = screen.getAllByRole("textbox");

    fireEvent.change(inputs[0], {
      target: { name: "name", value: expectedUser.name },
    });
    fireEvent.change(inputs[1], {
      target: { name: "lastname", value: expectedUser.lastname },
    });

    const addBtn = getAddBtn();
    fireEvent.click(addBtn);

    expect(addUserAction).toHaveBeenNthCalledWith(1, expectedUser);
    expect(navigate).toHaveBeenNthCalledWith(1, "/users");
  });

  test("display user data", () => {
    const expectedUser = {
      id: 2,
      name: "toto",
      lastname: "foo name",
    };
    const store = createStore(() => ({
      users: {
        data: [expectedUser],
      },
    }));
    useParams.mockReturnValue({ id: 2 });
    customRender(<User />, { store });

    const inputs = screen.getAllByRole("textbox");

    expect(inputs[0]).toHaveValue(expectedUser.name);
    expect(inputs[1]).toHaveValue(expectedUser.lastname);

    fireEvent.change(inputs[0], { target: { name: "name", value: "driss" } });
    expect(inputs[0]).toHaveValue("driss");

    const updateBtn = screen.getByRole("button", { name: "Modifier" });
    fireEvent.click(updateBtn);

    expect(updateUserAction).toHaveBeenNthCalledWith(1, {
      ...expectedUser,
      name: "driss",
    });
  });
});
