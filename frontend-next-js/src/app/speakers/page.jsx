"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../supabase";
import Speaker from "../components/speaker";

const speakers = () => {
	const [error, setError] = useState(null);
	const [speakerData, setSpeakerData] = useState([]);
	const [selectedcursus, setSelectedcursus] = useState("");

	useEffect(() => {
		const fetchSpeakers = async () => {
			let { data: speakersData, error } = await supabase
				.from("N4I_Speakers")
				.select("name, email, cursus");

			if (error) {
				setError(error);
			} else {
				setSpeakerData(speakersData);
			}
		};

		fetchSpeakers().then((r) => r);
	}, []);

	const handlecursusChange = (event) => {
		setSelectedcursus(event.target.value);
	};

	const filteredSpeakers = speakerData.filter((speaker) => {
		const bycursus = !selectedcursus || speaker.cursus === selectedcursus;
		return bycursus;
	});

	if (error) {
		return <div>An error occurred: {error.message}</div>;
	}

	return (
		<div className="App speakers wrapper">
			<h1>Intervenants</h1>
			<div className="selectContainer">
				<select value={selectedcursus} onChange={handlecursusChange}>
					<option value="">Tous les cursus</option>
					<option value="Création & Design">Création & Design</option>
					<option value="Développement Web">Développement Web</option>
					<option value="Jeu vidéo">Jeu vidéo</option>
					<option value="Communication Digital">Communication Digital</option>
					<option value="Animation 3D">Animation 3D</option>
				</select>
			</div>
			<div className="personListContainer">
				{filteredSpeakers.map((speaker) => (
					<Speaker
						name={speaker.name}
						cursus={speaker.cursus}
						email={speaker.email}
					/>
				))}
			</div>
		</div>
	);
};

export default speakers;
