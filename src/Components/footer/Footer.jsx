import React from 'react';
import './footer.css';

export default function Footer() {
    return (
        <footer className='flex'>
            <div className="social-links">
               
                <a href="https://www.instagram.com/elz_iko/" target="_blank" rel="noopener noreferrer" className="icon icon-instagram"></a>
                <a href="https://github.com/ziad845" target="_blank" rel="noopener noreferrer" className="icon icon-github"></a>
                <a href="https://www.linkedin.com/in/ziad-khaled-bab395341/" target="_blank" rel="noopener noreferrer" className="icon icon-linkedin"></a>
            </div>
            <p className='dom'>Ziad Fahim</p>
        </footer>   
    )
}
