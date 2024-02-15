import React from 'react';

const Speaker = ({ name, cursus, email }) => {
    return (
        <div key={email} className="personCard">
            <p>
                <b>{name.toUpperCase()}</b>
            </p>
            <code>{email}</code>
            <div className="more-infos">
                <p><b>{cursus}</b></p>
            </div>
        </div>
    );
};

export default Speaker;