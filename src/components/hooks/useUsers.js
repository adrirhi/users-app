import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addUserAction,
  updateUserAction,
  updateUserListAction,
} from "../reducer/users/actions";

const useUsers = ({ refetchUsers } = { refetchUsers: false }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store?.users?.isLoading);

  const users = useSelector((store) => store?.users?.data);
  console.log({ users });
  const fetchUsers = () => {
    if ((users && users.length == 0) || refetchUsers)
      axios.get("http://localhost:3002/users").then(({ data }) => {
        dispatch(updateUserListAction(data.users));
      });
  };

  const addUser = (user) => {
    dispatch(addUserAction(user));
  };

  const updateUser = (user) => {
    dispatch(updateUserAction(user));
  };

  const getUserById = (id) => {
    return users.find((x) => x.id == id);
  };

  useEffect(() => {
    console.log("_______________FETCHING_________________");
    fetchUsers();
  }, []);

  return { users, isLoading, addUser, getUserById, updateUser };
};

export default useUsers;
