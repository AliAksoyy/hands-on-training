import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function Tables({users}) {
   console.log(users)

 

  return (
    <div>
    <h1 className='border border-3 bg-light my-5 text-center'>CONTACTS</h1>
    <TableContainer  sx={{width:"35rem",marginTop:"5rem"}} component={Paper}>
      <Table sx={{ Width: 400 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell align="right">Phone Number</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {users.map((user,i)=> {

         (Object.values(user))
          console.log(user)
          return(
       
            <StyledTableRow key={i}>

              <StyledTableCell component="th" scope="row">{user.username}</StyledTableCell>
              <StyledTableCell align="center">{user.phone}</StyledTableCell>
              <StyledTableCell align="center">{user.gender}</StyledTableCell>
              <StyledTableCell align="center"><DeleteForeverIcon /></StyledTableCell>
              <StyledTableCell align="center"><ModeEditTwoToneIcon /></StyledTableCell>
            </StyledTableRow>
            )
          })}
          
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}