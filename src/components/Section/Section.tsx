import React from 'react';
import '../../styles/Section.css';

export interface SectionProps {
    id?: string;
    className?: string;
    label?: string;
}

const Section = (props: SectionProps) => {
    return (
        <section id={props.id} className={props.className}>
            {props.label}
        </section>
    );
};

export default Section;
