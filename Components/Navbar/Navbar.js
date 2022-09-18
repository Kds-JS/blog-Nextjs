import React from 'react';
import Link from 'next/link';

function Navbar(props) {
    return (
        <nav className='bg-primary fs-5 mb-5'>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link href="/">
                        <a className="nav-link text-white" aria-current="page" >Accueil</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/blog">
                        <a className="nav-link text-white" aria-current="page" >Blog</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/liste">
                        <a className="nav-link text-white" aria-current="page" >Liste</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;