import { Button, Card, CardActions, CardContent, IconButton, InputLabel, Select, TextField, MenuItem, Autocomplete} from "@mui/material";
import { Container } from "@mui/system";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BACKEND_API_URL } from "../../constants";
import { Destination } from "../models/Destination";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import axios from "axios";

export const DestinationForm = (
    { apiCallMethod, destination, setDestination, btnMsg} : 
    { apiCallMethod: any, destination: Destination, setDestination: any, btnMsg: any}) =>{

	const [destinations, setDestinations] = useState<Destination[]>([]);

    const [selectedVal, setSelectedVal] = useState(0);

    return (
		<Container>
			<Card>
				<CardContent>
					<IconButton component={Link} to={`/publicList`} sx={{float: "left"}}>
						<ArrowBackIcon/>
					</IconButton>
					<IconButton component={Link} sx={{ mr: 3 }} to={`/publicList`}>
					</IconButton>{" "}
					<form onSubmit={apiCallMethod}>
						<TextField
							id="geolocation"
							label="Geolocation"
							variant="outlined"
                            value={destination.geolocation}
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setDestination({ ...destination, geolocation: event.target.value })}
						/>
						<TextField
							id="title"
							label="Title"
							variant="outlined"
                            value={destination.title}
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setDestination({ ...destination, title: event.target.value })}
						/>
						<TextField
							id="image"
							label="Image"
							variant="outlined"
                            value={destination.image}
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setDestination({ ...destination, image: event.target.value })}
						/>
						<TextField
							id="description"
							label="Description"
							variant="outlined"
                            value={destination.description}
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setDestination({ ...destination, description: event.target.value })}
						/>
                        <TextField
							id="arrivalDate"
							label="Arrival Date"
							variant="outlined"
                            value={destination.arrivalDate}
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setDestination({ ...destination, arrivalDate: event.target.value })}
						/>
                        <TextField
							id="departureDate"
							label="Departure Date"
							variant="outlined"
                            value={destination.departureDate}
							fullWidth
							sx={{ mb: 2 }}
							onChange={(event) => setDestination({ ...destination, departureDate: event.target.value })}
						/>
                        <Button type="submit" sx={{float: "left"}}>{btnMsg}</Button>
					</form>
				</CardContent>
				<CardActions></CardActions>
			</Card>
		</Container>
	);
}