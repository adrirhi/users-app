import { ADD_USER, DELETE_USER, FETCH_USERS } from "./actions";

const initialState = {
  isLoading: true,
  data: [],
};

const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USERS:
      return { ...state, isLoading: false, data: payload.userList };

    case ADD_USER:
      return { ...state, data: [payload.user, ...state.data] };

    case DELETE_USER:
      return {
        ...state,
        data: state.data.filter((user) => user.id !== payload.id),
      };

    default:
      return state;
  }
};

export default usersReducer;
