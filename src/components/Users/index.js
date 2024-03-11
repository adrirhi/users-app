import axios from "axios"
import { useEffect, useState } from "react"
import Users from "./component";

export default function UsersContainer(){
    let [users, setUsers] = useState([])
    let [error, setError] = useState(null)
    let [isLoading, setIsloading] = useState(true)
    let [showModal, setShowModal] = useState(false);
    let [selectedUserId, setSelectedUserId] = useState();

    const fetchUsers = () => {
        axios.get("http://localhost:3000/users")
            .then( ({data}) => {
                setUsers(data)
                setIsloading(false);
            })
            .catch(({message}) => {
                setError(message);
                setIsloading(false);
            })
    }

    const addUser = (user) => {
       setUsers([user, ...users ])
    }

    useEffect( () => {
        fetchUsers()
    } , []);

    const toggleShowUserModal = () => {
        setShowModal(!showModal)
        if(showModal) setSelectedUserId(null);
    }

    const updateUserButton = (userId)  => {
        setSelectedUserId(userId)
        toggleShowUserModal();

    }

    const deleteUser = (userId) => {
        const new_users = users.filter( user => user.id !== userId);
        setUsers(new_users)
    }

    return <Users deleteUser={deleteUser} updateUserButton={updateUserButton}
    addUser={addUser} selectedUserId={selectedUserId}
                    users={users} 
                    error={error} 
                    isLoading={isLoading} 
                    showModal={showModal} toggleShowUserModal={toggleShowUserModal} />

                }