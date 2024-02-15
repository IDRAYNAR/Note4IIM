import React from 'react';

const Student = ({ name, email, cursus, year }) => {
    return (
        <div key={email} className="personCard">
            <p>
                <b>{name.toUpperCase()}</b>
            </p>
            <div className='studentData'>
                <code>{email}</code>
                <code>A{year}</code>
            </div>
            <div className="more-infos">
                <p><b>{cursus}</b></p>
            </div>
        </div>
    );
};

export default Student;