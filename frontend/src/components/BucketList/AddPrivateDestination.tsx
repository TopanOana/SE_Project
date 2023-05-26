import { useEffect, useState } from "react";
import { BACKEND_API_URL } from "../../constants";
import { Destination } from "../models/Destination";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DestinationForm } from "../Forms/DestinationForm";

export const AddPrivateDestination = () => {
	const navigate = useNavigate();

	const [destination, setDestination] = useState<Destination>(new Destination());

	

	const AddPrivateDestination = async (event: { preventDefault: () => void }) => {
		event.preventDefault();
		try {
			console.log(destination);
			await axios.post(`${BACKEND_API_URL}/userBucketList/add/new`, destination);
			navigate("user/BucketList");
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