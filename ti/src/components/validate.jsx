import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import './validate.css';

function Validate() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeOption, setActiveOption] = useState('all');
  const [scanResult, setScanResult] = useState(null);

  const handleOptionHover = (option) => {
    setActiveOption(option);
  };

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };
  const toggleMenuClose = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      'reader',
      {
        fps: 5,
      },
      true
    );

    scanner.render((result) => {
      if (result) {
        setScanResult(result);
      }
    });

    return () => {
      scanner.clear();
      scanner.stop();
    };
  }, []);

  return (
    <div className="main-container">
      <header className="header">
        <div className="logo">
          <Link to="/home">LOGO</Link>
        </div>
        <nav className="nav">
          <ul className="nav-list">
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
              <Link to="/search">
                <FontAwesomeIcon icon={faSearch} />
              </Link>
            </li>
            <li className="cartI">
              <a href="#">
                <FontAwesomeIcon icon={faCartArrowDown} />
              </a>
            </li>
            <li className="barsI">
              <a href="#">
                <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {menuOpen && (
        <div className="menu-container">
          <ul className="menu-list">
            <li>
              <FontAwesomeIcon icon={faXmark} onClick={toggleMenuClose} />
            </li>
            <li>Dashboard</li>
            <li>Resume</li>
            <Link to="/transfer">
              <li>Transfer</li>
            </Link>
            <Link to="/statistics">
              <li>Statistic</li>
            </Link>
            <Link to="/validate">Validate</Link>
            <li>Settings</li>
            <button>
              <Link to="/">LogOut</Link>
            </button>
          </ul>
        </div>
      )}
      <section className="sectionValidate">
        <h1 className="scantodiscover">
          Scan to discover!
          <hr />
        </h1>
        {scanResult ? (
          <div>
            Success: <a href={`${scanResult}`}>{scanResult}</a>
          </div>
        ) : (
          <div id="reader"></div>
        )}
      </section>
    </div>
  );
}

export default Validate;
