
import Users from "./component"

export default {
  title: 'components/Users',
  component: Users,
  tags: ['autodocs'],
};

export const WithLoading = {
    args: {
     isLoading: true
    },
  };

  export const WithError = {
    args: {
     isLoading: false,
     error: "reponse error"
    },
  };
  

  export const DisplayUsers = {
    args: {
     isLoading: false,
     error: null,
     users: [{id: 1, name: "driss"}, {id: 2, name: "dridjhdjlkss"}]
    },
  };
  

