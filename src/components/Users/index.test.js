import { createStore } from "redux";
import { customRender } from "../../utils/testUtils";

import UsersContainer from "./";
import { fireEvent, screen, waitFor, within } from "@testing-library/react";
import { useNavigate } from "react-router-dom";

import { deleteUserAction } from "../reducer/users/actions";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn().mockReturnValue(jest.fn()),
}));

jest.mock("../reducer/users/actions", () => ({
  ...jest.requireActual("../reducer/users/actions"),
  deleteUserAction: jest.fn(() => ({ type: "test", payload: 1 })),
}));

const users = [
  { id: 1, name: "toto" },
  { id: 2, name: "fooname" },
];

const store = createStore(() => ({
  users: {
    data: users,
    isLoading: false,
  },
}));

describe("Users Container", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("render correctly", () => {
    customRender(<UsersContainer />, { store });
  });

  it("redirect client to user page when clic on add user", () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    customRender(<UsersContainer />, { store });

    const addBtn = screen.getByRole("button", {
      name: "Ajoute un Utilisateur",
    });
    fireEvent.click(addBtn);

    expect(navigate).toHaveBeenNthCalledWith(1, "/users/add");
  });

  it("handle delete user", async () => {
    customRender(<UsersContainer />, { store });

    screen.getByRole("rowheader", { name: users[0].name });

    // const
    const rows = screen.getAllByRole("row");
    const deleteBtn = within(rows[1]).getByRole("button", {
      name: "Supprimer",
    });
    // const deleteBtn = screen.getByRole("button", { name: "Supprimer" });
    fireEvent.click(deleteBtn);

    expect(deleteUserAction).toHaveBeenNthCalledWith(1, 1);
  });

  it("handle update user", () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    customRender(<UsersContainer />, { store });

    const rows = screen.getAllByRole("row");
    const updateBtn = within(rows[2]).getByRole("button", { name: "Modifier" });
    fireEvent.click(updateBtn);

    expect(navigate).toHaveBeenNthCalledWith(1, "2");
  });

  it("handle update user 'by data test id'", () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    customRender(<UsersContainer />, { store });

    const row = screen.getByTestId("2");
    const updateBtn = within(row).getByRole("button", { name: "Modifier" });
    fireEvent.click(updateBtn);

    expect(navigate).toHaveBeenNthCalledWith(1, "2");
  });
});
