import { useEffect, useState } from "react";
import { BACKEND_API_URL } from "../../constants";
import { Destination } from "../models/Destination";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DestinationForm } from "../Forms/DestinationForm";

export const AddPublicDestination = () => {
	const navigate = useNavigate();

	const [destination, setDestination] = useState<Destination>(new Destination());	

	const AddPublicDestination = async (event: { preventDefault: () => void }) => {
		event.preventDefault();
		try {
			console.log(destination);
			await axios.post(`${BACKEND_API_URL}/destination/`, destination);
			navigate("/BucketList");
		} catch (error) {
			console.log(error);
		}
	};

	return(
		<DestinationForm
			apiCallMethod={AddPublicDestination}
			destination={destination}
			setDestination={setDestination}
			btnMsg="Add destination"
		/>
	)
};