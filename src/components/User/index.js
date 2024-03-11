import { Modal } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

let USER_IDS = 6;

export default function User( {showModal, closeModal, addUser, id }){
    let [user, setUser] = useState({})
    
    const fetchUser = () => {
        axios.get("http://localhost:3000/users")
            .then( ({data}) => {
                const userData = data.find( x => x.id == id);
                setUser(userData || {} );
            })
            
    }


    useEffect( () => {
        if(id != null){
            fetchUser();
        }else{
            setUser({})
        }
    } , [id])

    const handleUserChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;

        setUser({ ...user, [key]: value})
    }

    const confirmAddUser = () => {
        closeModal();
        addUser({...user, id: USER_IDS++})
    }

    console.log({user})

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
                    <input value={user.name} name="name" onChange={handleUserChange} type="text" />
                </div>
                <br />
                <div>
                    <label>Prénom : </label>
                    <input  value={user.lastname}  name="lastname" onChange={handleUserChange} type="text" />
                </div>
                <br />
                <div>
                    <label>Email : </label>
                    <input  value={user.email}  name="email" onChange={handleUserChange}   type="text" />
                </div>
                <br />
                <div>
                    <label>Password : </label>
                    <input  value={user.password}  name="password"  onChange={handleUserChange}  type="text" />
                </div>
                <br />
                <button onClick={confirmAddUser}>Confirme</button>
                <button onClick={closeModal} >Annuler</button>
            </div>
            
            </Modal>
    )
}