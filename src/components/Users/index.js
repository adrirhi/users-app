import { useState } from "react";
import Users from "./component";
import useUsers from "../hooks/useUsers";
import { useNavigate } from "react-router-dom";

export default function UsersContainer() {
  let [showModal, setShowModal] = useState(false);
  let [selectedUserId, setSelectedUserId] = useState();

  const navigate = useNavigate();

  // first instance of useUsers
  const { users, isLoading } = useUsers();
  console.log("users::::: ", { users });

  const toggleShowUserModal = () => {
    navigate("/users/add");
  };

  const updateUserButton = (userId) => {
    setSelectedUserId(userId);
    toggleShowUserModal();
  };

  return (
    <Users
      updateUserButton={updateUserButton}
      selectedUserId={selectedUserId}
      users={users}
      isLoading={isLoading}
      showModal={showModal}
      toggleShowUserModal={toggleShowUserModal}
    />
  );
}
