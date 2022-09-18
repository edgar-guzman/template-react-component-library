import React from "react";

export interface HeadingProps {
    id?: string;
    className?: string;
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    label?: string;
};

const Heading = (props: HeadingProps) => {
    return (
        <div id={props.id} className={props.className}>{props.label}</div>
    )
};

export default Heading;