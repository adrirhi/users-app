import { useEffect, useState } from "react";

import useUsers from "../hooks/useUsers";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

let USER_IDS = 6;

export default function User() {
  let [user, setUser] = useState({});

  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("____________ : ", { id });
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
        <label>{t("users-page.name")} : </label>
        <input
          value={user.name}
          name="name"
          onChange={handleUserChange}
          type="text"
        />
      </div>
      <br />
      <div>
        <label>{t("users-page.lastname")} : </label>
        <input
          value={user.lastname}
          name="lastname"
          onChange={handleUserChange}
          type="text"
        />
      </div>
      <br />
      <div>
        <label>{t("users-page.mail")} : </label>
        <input
          value={user.email}
          name="email"
          onChange={handleUserChange}
          type="text"
        />
      </div>
      <br />
      <div>
        <label>{t("users-page.password")} : </label>
        <input
          value={user.password}
          name="password"
          onChange={handleUserChange}
          type="text"
        />
      </div>
      <br />
      <button onClick={confirmBtn}>
        {/* {id ? t("common.update") : t("common.add")} */}
        {t(`common.${id ? "update" : "add"}`)}
      </button>
      <button onClick={goBack}>{t("common.cancel")}</button>
    </div>
  );
}
