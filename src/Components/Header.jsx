import { useState } from 'react';
import Section from './Section';

function Header() {
    const [page, setPage] = useState('Home');

    function handleClick(event) {
        const clicked = event.target.textContent;
        setPage(clicked);
    }

    return (
        <>
            <header className="flex-center">
                <h1 className='header__title'>Image Gallery</h1>
                <ul className='header__menu flex-center'>
                    <li onClick={handleClick}>Home</li>
                    <li onClick={handleClick}>Galleries</li>
                    <li onClick={handleClick}>Contact</li>
                </ul>
            </header>
            <Section section={page} />
        </>
    );
}

export default Header;