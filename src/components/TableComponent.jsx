import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import Navbar from './Navbar'
import '../App.css'




function createData(name, calories) {
    return { name, calories };
}

function TableComponent() {
    const location = useLocation();
    console.log(location.state)
    const rows = [
        createData('Full name', location.state.firstName + " " + location.state.lastName),
        createData('Phone number', location.state.phoneNumber),
        createData('Email', location.state.email),
        createData('Place', location.state.place),
        createData('Rooms', location.state.room),
        createData('Date', location.state.date1 + " To " + location.state.date2),

    ];
    return (
        <div>
            <Navbar>
                <h1>Booking.com</h1>
            </Navbar>
            <h1 className='hading'>Thank You For Submition!</h1>
            <TableContainer className='table' component={Paper}>
                <Table sx={{ minWidth: 375 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Heading</TableCell>
                            <TableCell align="right">Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>

                </Table>

            </TableContainer>
            <div className='home-btn'>

                <Link to={`/`}><Button variant="contained">Home</Button ></Link>
            </div>
        </div >
    );
}

export default TableComponent