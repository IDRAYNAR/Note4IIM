import React from "react";
import { useEffect, useState } from "react";
import Note from "../components/push/Note";
import { supabase } from "../supabase";

const Notes = () => {
	const [contents, setContents] = useState([]);
	const [selectedPromotion, setSelectedPromotion] = useState("");
	const [selectedCursus, setSelectedCursus] = useState("");
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchContents = async () => {
			let { data: N4I_Lessons, error } = await supabase
				.from("N4I_Lessons")
				.select("id, name, author, content");

			if (error) {
				setError(error);
			} else {
				setContents(N4I_Lessons);
			}
		};

		fetchContents();
	}, []);

	const handlePromotionChange = (event) => {
		setSelectedPromotion(event.target.value);
	};

	const handleCursusChange = (event) => {
		setSelectedCursus(event.target.value);
	};

	const filteredContents = contents.filter((content) => {
		const byPromotion =
			!selectedPromotion || content.author.Promotion === selectedPromotion;

		const byCursus =
			!selectedCursus || content.author.Promotion === selectedCursus;
		return byPromotion && byCursus;
	});

	if (error) {
		return <div>Une erreur s'est produite : {error.message}</div>;
	}

	return (
		<div className="notes wrapper -medium">
			<h1>Toutes les notes</h1>
			<div className="selectContainer">
				<select value={selectedPromotion} onChange={handlePromotionChange}>
					<option value="">Toutes les promotions</option>
					<option value="A1">A1</option>
					<option value="A2">A2</option>
					<option value="A3">A3</option>
					<option value="A4">A4</option>
					<option value="A5">A5</option>
				</select>
				<select value={selectedCursus} onChange={handleCursusChange}>
					<option value="">Tous les cursus</option>
					<option value="Création & Design">Création & Design</option>
					<option value="Développement Web">Développement Web</option>
					<option value="Jeu vidéo">Jeu vidéo</option>
					<option value="Communication Digital">Communication Digital</option>
					<option value="Animation 3D">Animation 3D</option>
				</select>
			</div>
			<div className="card-container">
				{filteredContents.length > 0 ? (
					filteredContents.map((content) =>
						content.name && content.name.trim() !== "" ? (
							<Note
								title={content.name}
								author={content.author}
								link={`/single-note/${content.id}`}
								// year={content.year}
								cursus={content.cursus}
							/>
						) : null
					)
				) : (
					<div className="noResult">Aucun résultat trouvé</div>
				)}
			</div>
		</div>
	);
};

export default Notes;
