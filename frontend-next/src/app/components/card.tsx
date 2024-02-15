import React from 'react';
import Link from 'next/link';

interface CardProps {
    className: string;
    target: string;
    title: string;
    description: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ className, target, title, description, link }) => {
    return (
        <Link href={link}>
            <a target={target} className={`comp-card ${className}`}>
                <h3>{title}</h3>
                {description ? <p>{description}</p> : null}
            </a>
        </Link>
    );
};

export default Card;