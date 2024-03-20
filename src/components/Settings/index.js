import { useDispatch } from "react-redux";
import useUsers from "../hooks/useUsers";
import { updateUserAction } from "../reducer/users/actions";

const Settings = () => {
  const profileId = 2;
  const { getUserById, updateUser } = useUsers();

  const profile = getUserById(profileId);

  const handleUpdateBtn = () => {
    updateUser(profile);
  };

  return "Profile : " + profile.name;
};

export default Settings;
