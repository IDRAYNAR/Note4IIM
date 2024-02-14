import React, { useState } from "react";
import Card from "../components/Card";
import { handleSignOut } from "./Register";

const Home = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const logout = async () => {
		await handleSignOut();

		setIsLoggedIn(false);
		window.location.href = "/login";
	};

	const renderSignOutButton = isLoggedIn ? (
		<button onClick={logout}>Sign Out</button>
	) : null;

	return (
		<div className="home wrapper -medium">
			<h1>
				Bienvenue sur{" "}
				<strong style={{ fontSize: "larger", color: "#ED7000" }}>
					Note4IIM
				</strong>
			</h1>
			<div className="doc">
				<p>
					Grâce à{" "}
					<strong style={{ fontSize: "larger", color: "#ED7000" }}>
						Note4IIM
					</strong>
					, n'importe quel etudiant de l'etablissement, si connecté peut acceder
					aux differents cours des differentes années (de 1 à 5) et des
					differents cursus. Les professeurs ont également accès à toutes les
					informations concernant les cours et les notes des élèves.
				</p>
			</div>
			<div className="card-container">
				<Card title="Notes" description="Accédez aux les notes" link="/notes" />
				<Card
					title="Étudiants"
					description="Liste des étudiants"
					link="/students"
				/>
				<Card
					title="Professeurs"
					description="Liste des professeurs"
					link="/speakers"
				/>
				<Card
					title="Portail De-Vinci"
					target="_blank"
					link="https://www.leonard-de-vinci.net/"
					className="-portal"
				/>
			</div>
			{renderSignOutButton}
		</div>
	);
};

export default Home;
