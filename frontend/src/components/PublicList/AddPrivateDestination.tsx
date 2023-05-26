import { useEffect, useState } from "react";
import { BACKEND_API_URL } from "../../constants";
import { Destination } from "../models/Destination";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DestinationForm } from "../Forms/DestinationForm";
import { Button, Card, CardActions, Container, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

export const AddPrivateDestination = () => {
	const {id} = useParams();
    const navigate = useNavigate();

    const handleAdd = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        await axios.post(`${BACKEND_API_URL}/user/bucketlist/new/${id}`);
        navigate("/user/bucketList");
    }


	return ( 
        <Container>
            <Card>
                <IconButton component={Link} to={`/user/bucketList`}>
                    <ArrowBackIcon/>
                </IconButton>
                Are you sure you want to add the selected destination?
            <CardActions>
               <Button onClick={handleAdd}>Add it!</Button>
               <Button onClick={() => navigate("/user/bucketList")}>Cancel</Button>
            </CardActions>
            </Card>
        </Container>
    )
};