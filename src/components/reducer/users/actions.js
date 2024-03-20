export const FETCH_USERS = "FETCH_USERS";
export const ADD_USER = "ADD_USER";
export const DELETE_USER = "DELETE_USER";
export const UPDATE_USER = "UPDATE_USER";

export const updateUserAction = (user) => ({
  type: UPDATE_USER,
  payload: { user },
});

export const deleteUserAction = (id) => ({
  type: DELETE_USER,
  payload: { id },
});

export const updateUserListAction = (userList) => ({
  type: FETCH_USERS,
  payload: { userList },
});

export const addUserAction = (user) => ({
  type: ADD_USER,
  payload: { user },
});
