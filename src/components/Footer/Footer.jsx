import React from 'react';
import cl from './Footer.module.css'
const Footer = () => {
    return (
        <div className={cl.footer}>
            <h4 className={cl["footer__header"]}>Проект сделал Морозов А.С.</h4>
        </div>
    );
};

export default Footer;