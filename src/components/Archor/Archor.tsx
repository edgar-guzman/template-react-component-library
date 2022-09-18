import React from 'react';
import '../../styles/Archor.css';

export interface ArchorProps {
    id?: string;
    className?: string;
    url?: string;
    label?: string;
}

const Archor = (props: ArchorProps) => {
    return (
        <a id={props.id} className={props.className} href={props.url}>
            {props.label}
        </a>
    );
};

export default Archor;
