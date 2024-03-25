import { fireEvent, render, screen } from "@testing-library/react";

import Users from "./component";
import { customRender } from "../../utils/testUtils";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn().mockReturnValue(jest.fn()),
}));

const defaultProps = {
  isLoading: false,
  error: null,
  toggleShowUserModal: jest.fn(),
  selectedUserId: jest.fn(),
  users: [],
  updateUserButtondeleteUser: jest.fn(),
  showModal: false,
  updateUserButton: jest.fn(),
};

describe("Users component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should display loader", () => {
    render(<Users {...defaultProps} isLoading />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("should display error", () => {
    const error = "foo_error";
    render(<Users {...defaultProps} error={error} />);

    expect(
      screen.getByRole("heading", { name: error, level: 3 })
    ).toBeInTheDocument();
  });

  it("should display users's list", () => {
    customRender(<Users {...defaultProps} users={[{ id: 1, name: "toto" }]} />);

    expect(
      screen.getByRole("heading", { name: "list of users", level: 1 })
    ).toBeInTheDocument();

    expect(screen.getAllByRole("row").length).toBe(2);
  });

  it("should call toggleShowUserModal when clic on add btn", () => {
    customRender(<Users {...defaultProps} users={[{ id: 1, name: "toto" }]} />);

    const addBtn = screen.getByRole("button", {
      name: "Ajoute un Utilisateur",
    });
    fireEvent.click(addBtn);

    expect(defaultProps.toggleShowUserModal).toHaveBeenCalledTimes(1);
  });
});
