import {useEffect, useState} from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Tooltip,
    Container,
    Button,
    Typography,
    List,
    ListItem,
    TextField,
    CircularProgress,
    TableSortLabel
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit"
import {Link} from "react-router-dom"
import {BACKEND_API_URL} from "../../constants";
import { Destination } from "../models/Destination";

function GetAllDestinationsUser() {
    const [destinations,
        setDestinations] = useState < Destination[] > ([]);
    const [loading,
        setLoading] = useState(false);
    const [count,
        setCount] = useState(1);

    useEffect(() => {
        setLoading(true);
        fetch(`${BACKEND_API_URL}/publiclist`)
            .then(res => res.json())
            .then(data => {
                setDestinations(data)
                setLoading(false);
            });
    });

    return (
        <Container sx={{
            marginTop: "40px",
        }}>
            <Typography variant="h3" color="black" align="left">Public List</Typography>
            {!loading && (
                <TableContainer component={Paper} >
                    <Table>
                        <TableHead
                            sx={{
                            backgroundColor: '#F5F5F5'
                        }}>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell>
                                    Geolocation
                                </TableCell>
                                <TableCell>
                                    Title
                                </TableCell>
                                <TableCell>
                                    Image
                                </TableCell>
                                <TableCell>
                                    Description
                                </TableCell>
                                <TableCell>
                                    Arrival Date
                                </TableCell>
                                <TableCell>
                                    Departure Date
                                </TableCell>
                                <TableCell>Add</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {destinations.map((destination : Destination, index) => (
                                <TableRow key={index}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{destination.geolocation}</TableCell>
                                    <TableCell>{destination.title}</TableCell>
                                    <TableCell>{destination.image}</TableCell>
                                    <TableCell>{destination.description}</TableCell>
                                    <TableCell>{destination.arrivalDate}</TableCell>
                                    <TableCell>{destination.departureDate}</TableCell>
                                    <TableCell>
                                        <IconButton
                                            component={Link}
                                            sx={{
                                            mr: 3
                                        }}
                                            to={`/destinationsUser/addToBucketList/${destination.id}`}>
                                            <Tooltip title="Add" arrow>
                                                <AddIcon
                                                    sx={{
                                                    color: "green"
                                                }}/>
                                            </Tooltip>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Container>
    );
}

export default GetAllDestinationsUser