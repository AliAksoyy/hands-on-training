import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";
import { useFetch, deleteUser ,editUser} from "../../utils/functions";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Contacts = ({editUser}) => {

  const {isLoading, contactList} =useFetch()

  console.log(contactList)
  return (
    <div>
      <h2 className="contact-header">Contacts</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="left">Phone Number</TableCell>
              <TableCell align="left">Gender</TableCell>
              <TableCell align="left">Delete</TableCell>
              <TableCell align="left">Edit</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
           {isLoading ? (
            <TableRow >
              <TableCell colSpan={5} align="center">
              Loading
              </TableCell>
            </TableRow>
           ) :

           contactList?.lenght===0 ? (
            <TableRow>
                 <TableCell colSpan={5} align="center">
                  No result found
                  </TableCell>
            </TableRow>
           ) : (

            contactList?.map((item,i)=> {
                console.log(item)
                return (
                <TableRow>
                <TableCell align="center">{item?.username}</TableCell>
                <TableCell align="center">{item?.phoneNumber}</TableCell>
                <TableCell align="center">{item?.gender}</TableCell>
                <TableCell align="center" onClick={()=> deleteUser(item.id)}>
                  <DeleteIcon sx={{cursor:"pointer"}} />
                </TableCell>
                <TableCell align="center">
                  <EditIcon sx={{cursor:"pointer"}} onClick={()=> editUser({...item})} />
                </TableCell>
              </TableRow>
              
              )})
           )
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Contacts;
