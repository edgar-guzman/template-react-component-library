import React from 'react';
import '../../styles/Input.css';

export interface InputProps {
    id?: string;
    className?: string;
    label?: string;
    disabled?: boolean;
    placeholder?: string;
}

const Input = (props: InputProps) => {
    return (
        <input id={props.id} className={props.className} aria-placeholder={props.placeholder} placeholder={props.placeholder} disabled={props.disabled} value={props.label} />
    );
};

export default Input;
