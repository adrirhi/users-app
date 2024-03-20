import { useEffect, useState } from "react";

import useUsers from "../hooks/useUsers";
import { useNavigate, useParams } from "react-router-dom";

let USER_IDS = 6;

export default function User() {
  let [user, setUser] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();
  const { getUserById, updateUser, addUser } = useUsers({
    refetchUsers: false,
  });

  useEffect(() => {
    if (id) {
      const userData = getUserById(id);
      setUser(userData || {});
    }
  }, []);

  const goBack = () => {
    navigate("/users");
  };

  const confirmBtn = () => {
    if (id) updateUser(user);
    else addUser({ ...user, id: ++USER_IDS });

    goBack();
  };

  const handleUserChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    setUser({ ...user, [key]: value });
  };

  return (
    <div
      style={{
        margin: "auto",
        padding: "20px",
        width: "50%",
        height: "50%",
        backgroundColor: "white",
      }}
    >
      <div>
        <label>nom : </label>
        <input
          value={user.name}
          name="name"
          onChange={handleUserChange}
          type="text"
        />
      </div>
      <br />
      <div>
        <label>Prénom : </label>
        <input
          value={user.lastname}
          name="lastname"
          onChange={handleUserChange}
          type="text"
        />
      </div>
      <br />
      <div>
        <label>Email : </label>
        <input
          value={user.email}
          name="email"
          onChange={handleUserChange}
          type="text"
        />
      </div>
      <br />
      <div>
        <label>Password : </label>
        <input
          value={user.password}
          name="password"
          onChange={handleUserChange}
          type="text"
        />
      </div>
      <br />
      <button onClick={confirmBtn}>{id ? "Modifier" : "Ajouter"}</button>
      <button onClick={goBack}>Annuler</button>
    </div>
  );
}
