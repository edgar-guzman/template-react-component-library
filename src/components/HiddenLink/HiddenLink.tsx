import React from 'react';
import '../../styles/HiddenLink.css';

export interface HiddenLinkProps {
    id?: string;
    className?: string;
    url?: string;
    label?: string;
}

const HiddenLink = (props: HiddenLinkProps) => {
    return (
        <a id={props.id} className='skip-link' href={props.url}>{props.label}</a>
    );
};

export default HiddenLink;
