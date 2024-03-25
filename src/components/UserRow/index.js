import { TableCell, TableRow } from "@mui/material";
import { useDispatch } from "react-redux";

import { deleteUserAction } from "../reducer/users/actions";
import { useNavigate } from "react-router-dom";

export default function UserRow({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteUser = () => {
    dispatch(deleteUserAction(user.id));
  };

  const handleUpdateUserBtn = () => {
    navigate(`${user.id}`);
  };

  return (
    <TableRow
      data-testid={user.id}
      key={user.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {user.name}
      </TableCell>
      <TableCell>{user.lastname}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>
        <button onClick={handleUpdateUserBtn}>Modifier</button>
        <button onClick={handleDeleteUser}>Supprimer</button>
        <button>Voir</button>
      </TableCell>
    </TableRow>
  );
}
