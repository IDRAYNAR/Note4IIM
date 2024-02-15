import React from "react";

const Student = ({ name, email, cursus, year }) => {
	return (
		<div key={email} className="personCard">
			<p className="studentData">
				<b>{name.toUpperCase()}</b>
				<code>A{year}</code>
			</p>

			<div className="more-infos">
				<b>{cursus}</b>
				<code><a href={`mailto:${email}`}>{email}</a></code>
			</div>
		</div>
	);
};

export default Student;
