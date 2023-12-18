import React from 'react';
import { Link } from 'react-router-dom';
import style from './navbar.module.css'




const Navbar = () => {
    return (
        <nav className={style.nav}>
            <ul className={style.ul}>
                <li className={style.li}>
                    <Link className={style.link} to="/homeworkinfo">HOMEWORK INFO</Link>
                </li>
                <li className={style.li}>
                    <Link className={style.link} to = "/movieslist">MOVIES LIST</Link>
                </li>
                <li className={style.li}>
                    <Link className={style.link} to = "/aboutauthor">ABOUT AUTHOR</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar