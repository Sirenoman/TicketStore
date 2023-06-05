import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './event.css';

function TicketEvent() {
    // funciones para header y menulateral
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeOption, setActiveOption] = useState('all');

    const handleOptionHover = (option) => {
        setActiveOption(option);
    };

    const toggleMenu = () => {
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
    }
    
  const [formData, setFormData] = useState({
    title: '',
    date_hour: '',
    duration: '',
    sponsor: '',
    category: '',
    location: '',
    image: null,
    description: ''
  });
  const [view, setView] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData((prevData) => ({
        ...formData,
        [name]: files[0]
      }));

      const urlObjet = URL.createObjectURL(files[0]);
      setView(urlObjet);
    } else {
      setFormData((prevData) => ({
        ...formData,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify(formData, null, 2);
    // Aquí realizar la lógica para enviar el archivo JSON por API o almacenándolo localmente.
    console.log(jsonData);
  };

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
      <main>
      <div className="box-save">
          <h1>Tickets Details</h1>
          <p>This section contains the tickets details for you event</p>

          <hr />

          <form onSubmit={handleSubmit}>
          <div className="form-save">
            
          </div>
          </form>
      </div>
      </main>
    </>
  )
}

export default TicketEvent