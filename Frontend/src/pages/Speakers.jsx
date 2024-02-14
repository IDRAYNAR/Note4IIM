import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";

const App = () => {
	const [speakers, setSpeakers] = useState([]);
	const [error, setError] = useState(null);
	const [selectedCursus, setSelectedCursus] = useState("");

	const handleCursusChange = (event) => {
		setSelectedCursus(event.target.value);
	};

	useEffect(() => {
		const fetchSpeakers = async () => {
			let { data: speakersData, error } = await supabase
				.from("N4I_Speakers")
				.select("name, email, cursus");

			if (error) {
				setError(error);
			} else {
				setSpeakers(speakersData);
			}
		};

		fetchSpeakers();
	}, []);

	const filteredSpeakers = speakers.filter((speaker) => {
		const byCursus = !selectedCursus || speaker.cursus === selectedCursus;
		return byCursus;
	});

	if (error) {
		return <div>An error occurred: {error.message}</div>;
	}

	return (
		<div className="App students wrapper">
			<h1>Professeurs</h1>
			<div className="selectContainer">
				<select value={selectedCursus} onChange={handleCursusChange}>
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
					<div key={speaker.email} className="personCard">
						<p>
							<b>{speaker.name.toUpperCase()}</b>
						</p>
						<code>{speaker.email}</code>
						<div className="more-infos">
							<p>
								Cursus: <b>{speaker.cursus}</b>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default App;
