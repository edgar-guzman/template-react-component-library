import React from 'react';
import '../../styles/Footer.css';

export interface FooterProps {
    id?: string;
    className?: string;
    url?: string;
    label?: string;
}

const Footer = (props: FooterProps) => {
    return (
        <footer id={props.id} className={props.className}>
            <section>
                <a href={props.url}>{props.label}</a>
            </section>
        </footer>
    );
};

export default Footer;
