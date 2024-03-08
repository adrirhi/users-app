import axios from "axios"
import { useEffect, useState } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CircularProgress } from "@mui/material";
import User from "../User";

export default function Users(){
    let [users, setUsers] = useState([])
    let [error, setError] = useState(null)
    let [isLoading, setIsloading] = useState(true)
    let [showModal, setShowModal] = useState(false);

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
        setUsers([...users, user])
    }

    useEffect( () => {
        fetchUsers()
    } , []);

    const toggleShowUserModal = () => {
        setShowModal(!showModal)
    }

    if(isLoading) return <CircularProgress />

    if(error != null ) return <h3>{error}</h3>

    return(
        <div>
            <h1>list of users</h1>
            <button onClick={toggleShowUserModal}>Ajoute un Utilisateur</button>
            <User addUser={addUser} closeModal={toggleShowUserModal} showModal={showModal} />
            <TableContainer >
                <Table  sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nom</TableCell>
                            <TableCell >Prénom</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell >Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            users.map(user => (
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">{user.name}</TableCell>
                                        <TableCell >{user.lastname}</TableCell>
                                        <TableCell >{user.email}</TableCell>
                                        <TableCell >
                                            <button>Modifier</button>
                                            <button>Supprimer</button>
                                            <button>Voir</button>
                                        </TableCell>
                                    </TableRow>
                                ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}