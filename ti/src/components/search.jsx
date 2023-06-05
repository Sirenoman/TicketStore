import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './event.css'
import { Link, useNavigate } from 'react-router-dom'

function Search() {
    // funciones para header y menulateral
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeOption, setActiveOption] = useState('searchI');
    // Funcion para navegacion

    const handleOptionHover = (option) => {
        setActiveOption(option);
    };

    const toggleMenu = () => {
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
    }


  return (
    <>
    <header className='header'>
    <div className='logo'><a href="#">LOGO</a></div>
      <nav className='nav' >
          <ul className='nav-list'>
              <li
                className={`all ${activeOption === 'all' ? 'active' : ''}`}
                onMouseEnter={() => handleOptionHover('all')}
              >
                <Link to="/home">All</Link>
              </li>
              <li
                className={`new ${activeOption === 'new' ? 'active' : ''}`}
                onMouseEnter={() => handleOptionHover('new')}
              >
                <Link to="/event">New</Link>
              </li>
              <li
                className={`cultural ${activeOption === 'cultural' ? 'active' : ''}`}
                onMouseEnter={() => handleOptionHover('cultural')}
              >
                <a href="#">Cultural</a>
              </li>
              <li
                className={`artistic ${activeOption === 'artistic' ? 'active' : ''}`}
                onMouseEnter={() => handleOptionHover('artistic')}
              >
                <a href="#">Artistic</a>
              </li>
              <li
                className={`searchI ${activeOption === 'searchI' ? 'active' : ''}`}
                onMouseEnter={() => handleOptionHover('searchI')}
              >
                <a href="#">
                    <FontAwesomeIcon icon={faSearch} />
                </a>
              </li>
              <li className='cartI'>
                <a href="#">
                    <FontAwesomeIcon icon={faCartArrowDown} />
                </a>
              </li>
              <li className='barsI'>
                <a href="#">
                    <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
                </a>
              </li>
          </ul>
      </nav>
    </header>
    {menuOpen && (
        <ul className="menu-list">
            <li>Enlace 1</li>
            <li>Enlace 2</li>
            <li>Enlace 3</li>
        </ul>
    )}
    </>
  )
}

export default Search
