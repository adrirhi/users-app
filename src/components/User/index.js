import { Modal } from "@mui/material";
import { useState } from "react";

let USER_IDS = 6;

export default function User(props){
    let [user, setUser] = useState({})
    const showModal = props.showModal;
    const closeModal = props.closeModal;
    const addUser = props.addUser;

    const handleUserChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;

        setUser({ ...user, [key]: value})
    }

    const confirmAddUser = () => {
        closeModal();
        addUser({...user, id: USER_IDS++})
    }

    return (
        <Modal
            open={showModal}
            // open={open}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <div style={{ margin: "auto", padding: "20px",  width: "50%", height: "50%", backgroundColor: "white" }}>
                <div>
                    <label>nom : </label>
                    <input name="name" onChange={handleUserChange} type="text" />
                </div>
                <br />
                <div>
                    <label>Prénom : </label>
                    <input name="lastname" onChange={handleUserChange} type="text" />
                </div>
                <br />
                <div>
                    <label>Email : </label>
                    <input name="email" onChange={handleUserChange}   type="text" />
                </div>
                <br />
                <div>
                    <label>Password : </label>
                    <input name="password"  onChange={handleUserChange}  type="text" />
                </div>
                <br />
                <button onClick={confirmAddUser}>Confirme</button>
                <button onClick={closeModal} >Annuler</button>
            </div>
            
            </Modal>
    )
}