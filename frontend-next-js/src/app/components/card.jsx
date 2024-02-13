import React from 'react';
import Link from 'next/link';

const Card = ({ className, target, title, description, link }) => {
    return (
            <Link href={link} legacyBehavior>
                <a target={target} className={`comp-card ${className}`}>
                    <h3>{title}</h3>
                    {description ? <p>{description}</p> : null}
                </a>
            </Link>
    );
};

export default Card;