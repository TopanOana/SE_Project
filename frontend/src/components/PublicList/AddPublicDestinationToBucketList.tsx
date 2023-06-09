import { useEffect, useState } from "react";
import { BACKEND_API_URL } from "../../constants";
import { Destination } from "../models/Destination";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DestinationForm } from "../Forms/DestinationForm";
import { Button, Card, CardActions, Container, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { usernameToSend } from "../GloabalUsername";

export const AddPublicDestinationToBucketList = () => {
	const {id} = useParams();
    const navigate = useNavigate();

    const data = {
        destination: id, // include the id in the destination object
        username: usernameToSend
      };
    const handleAdd = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        await axios.post(`${BACKEND_API_URL}/user/bucketlist/public`, data);
        navigate("/bucketList");
    }


	return ( 
        <Container>
            <Card>
                <IconButton component={Link} to={`/publicListUser`}>
                    <ArrowBackIcon/>
                </IconButton>
                Are you sure you want to add the selected destination?
            <CardActions>
               <Button onClick={handleAdd}>Add it!</Button>
               <Button onClick={() => navigate("/publicListUser")}>Cancel</Button>
            </CardActions>
            </Card>
        </Container>
    )
};