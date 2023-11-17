import React, { useState } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import HomeRepairServiceOutlinedIcon from '@mui/icons-material/HomeRepairServiceOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import CloseIcon from '@mui/icons-material/Close';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import './Header.css';

const Header = ({ darkMode, toggleDarkMode }) => {
    const [Toggle, showMenu] = useState(true);


    return (
        <header className='header'>
            <nav className="nav container">
                <a href="index.html" className='nav__logo'>Yash Gaur</a>
                <button onClick={toggleDarkMode} className='darkmode'>
                    {darkMode ? <WbSunnyIcon /> : <DarkModeTwoToneIcon />}
                    
                </button>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className='nav__link active-link'>
                                <HomeOutlinedIcon className='nav__icon' />
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className='nav__link'>
                                <PersonIcon className='nav__icon' />
                                About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className='nav__link'>
                                <DescriptionOutlinedIcon className='nav__icon' />
                                Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className='nav__link'>
                                <HomeRepairServiceOutlinedIcon className='nav__icon' />
                                Services
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className='nav__link'>
                                <FileCopyOutlinedIcon className='nav__icon' />
                                Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className='nav__link'>
                                <RecentActorsIcon className='nav__icon' />Contact
                                {/* <i className='uil uil-message nav__icon'></i>Contact */}
                            </a>
                        </li>
                    </ul>
                    {/* <i className='uil uil-times nav__close' onClick={() => showMenu(!Toggle)}></i> */}
                    <CloseIcon className='nav__close' onClick={() => showMenu(!Toggle)} />

                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    {/* <i className='uil uil-apps'></i> */}
                    <AppsOutlinedIcon />

                </div>

            </nav>

        </header>
    )
}

export default Header;
