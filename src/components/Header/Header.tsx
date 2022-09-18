import React from 'react';
import '../../styles/Header.css';

export interface HeaderProps {
    id?: string;
    className?: string;
    url?: string;
    label?: string;
}

const Header = (props: HeaderProps) => {
    return (
        <header id={props.id} className={props.className}>
            <section>
                <a href={props.url}>{props.label}</a>
            </section>
        </header>
    );
};

export default Header;
