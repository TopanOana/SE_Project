import { useEffect, useState } from "react";
import { BACKEND_API_URL } from "../../constants";
import { Destination } from "../models/Destination";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DestinationForm } from "../Forms/DestinationForm";
import { usernameToSend } from "../GloabalUsername";

export const AddPrivateDestination = () => {
	const navigate = useNavigate();

	const [destination, setDestination] = useState<Destination>(new Destination());

	const user = usernameToSend;

	const AddPrivateDestination = async (event: { preventDefault: () => void }) => {
		event.preventDefault();
		try {
			console.log(destination);
			await axios.post(`${BACKEND_API_URL}/user/bucketlist/new?username=${user}`, destination);
			navigate("/bucketList");
		} catch (error) {
			console.log(error);
		}
	};

	return(
		<DestinationForm
			apiCallMethod={AddPrivateDestination}
			destination={destination}
			setDestination={setDestination}
			btnMsg="Add destination"
		/>
	)
};