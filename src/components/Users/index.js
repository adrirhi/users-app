import axios from "axios";
import { useEffect, useState } from "react";
import Users from "./component";
import { useDispatch, useSelector } from "react-redux";
import { updateUserListAction } from "../reducer/users/actions";

export default function UsersContainer() {
  let [showModal, setShowModal] = useState(false);
  let [selectedUserId, setSelectedUserId] = useState();

  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.users.isLoading);
  const users = useSelector((store) => store.users.data);

  const fetchUsers = () => {
    axios.get("http://localhost:3000/users").then(({ data }) => {
      dispatch(updateUserListAction(data));
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const toggleShowUserModal = () => {
    setShowModal(!showModal);
    if (showModal) setSelectedUserId(null);
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
