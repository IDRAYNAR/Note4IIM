import React from "react";

const Speaker = ({ name, cursus, email }) => {
	return (
		<div key={email} className="personCard">
			<p>
				<b>{name.toUpperCase()}</b>
			</p>
			<p>
				<b>{cursus}</b>
			</p>

			<div className="more-infos">
			<code><a href={`mailto:${email}`}>{email}</a></code>
			</div>
		</div>
	);
};

export default Speaker;
