import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { CircularProgress } from "@mui/material";
import propTypes from "prop-types";

import User from "../User";
import UserRow from "../UserRow";
//

export default function Users({
  isLoading,
  error,
  toggleShowUserModal,
  addUser,
  selectedUserId,
  users,
  updateUserButtondeleteUser,
  showModal,
  updateUserButton,
  deleteUser,
}) {
  console.log({ isLoading });
  if (isLoading) return <CircularProgress />;

  if (error != null) return <h3>{error}</h3>;

  return (
    <div>
      <h1>list of users</h1>
      <button onClick={toggleShowUserModal}>Ajoute un Utilisateur</button>
      <User
        id={selectedUserId}
        addUser={addUser}
        closeModal={toggleShowUserModal}
        showModal={showModal}
      />
      <TableContainer>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Nom</TableCell>
              <TableCell>Prénom</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <UserRow
                key={user.id}
                user={user}
                deleteUser={deleteUser}
                updateUserButton={updateUserButton}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

Users.defaultProps = {
  isLoading: true,
  error: null,
  users: [],
};

const userProps = propTypes.shape({
  id: propTypes.number,
  name: propTypes.string,
});

Users.propTypes = {
  isLoading: propTypes.bool,
  error: propTypes.string,
  users: propTypes.arrayOf(userProps),
  // ...
};
