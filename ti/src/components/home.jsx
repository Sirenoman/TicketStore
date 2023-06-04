import { BrowserRouter as Router } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./home.css"
import React, { useState } from 'react';

const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeOption, setActiveOption] = useState('all');

    const handleOptionHover = (option) => {
        setActiveOption(option);
    };

    const toggleMenu = () => {
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
    }
    //Informacion de las cartas
    const [cards] = useState([
        {   
            title: 'Card 1',
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            precio: '$15.00'
        },
        {
            title: 'Card 2',
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            precio: '$25.00'
        },
        {
            title: 'Card 3',
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            precio: '$35.00'
        },
        {
            title: 'Card 4',
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            precio: '$45.00'
        },
        {   
            title: 'Card 5',
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            precio: '$55.00'
        },
        {
            title: 'Card 6',
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            precio: '$65.00'
        },
        {
            title: 'Card 7',
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            precio: '$75.00'
        },
        {
            title: 'Card 8',
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            precio: '$85.00'
        },
        {
            title: 'Card 9',
            text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`,
            precio: '$95.00'
        }

    ])

    return (
        <div className='main-container'>
            {/* Aqui esta el menu de navegacion */}
            <header className='header'>
                <div className='logo'><a href="#">LOGO</a></div>
                <nav className='nav'>
                    <ul className='nav-list'>
                        <li
                            className={`all ${activeOption === 'all' ? 'active' : ''}`}
                            onMouseEnter={() => handleOptionHover('all')}
                        >
                            <a href="#">All</a>
                        </li>
                        <li
                            className={`new ${activeOption === 'new' ? 'active' : ''}`}
                            onMouseEnter={() => handleOptionHover('new')}
                        >
                            <a href="#">New</a>
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

            {/* Aqui irian las cartas de los tickets */}
            <section className='sectionCards'>
                <div className="container">
                    {cards.map((card, i) => (
                        <div key={i} className='card'>
                            <div className='baseRectangle'></div>
                            <img className='card-image' src='https://www.xtrafondos.com/descargar.php?id=5283&vertical=1' alt="imagenAlternativa"/>
                            <div className='title'>{card.title}</div>
                            <div className='text'>{card.text}</div>
                            <div className='price'>{card.precio}</div>
                            <button className='buy-btn'>Buy</button>
                        </div>
                    ))}
                </div>
            </section>



        </div>
    );
}

export default Home;
