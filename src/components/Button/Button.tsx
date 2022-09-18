import React from 'react';
import '../../styles/Button.css';

export interface ButtonProps {
    id?: string;
    className?: string;
    label?: string;
}

const Button = (props: ButtonProps) => {
    return <button id={props.id} className={props.className}>{props.label}</button>;
};

export default Button;