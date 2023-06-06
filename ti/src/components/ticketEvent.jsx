import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './event.css';

function TicketEvent() {
  // Variables para header y menulateral
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeOption, setActiveOption] = useState('new');
  // Variables para el formulario
  const [formValues, setFormValues] = useState({
    vip: false,
    premium: false,
    standar: false,
    basic: false,
    sunBasic: false,
    shadowBasic: false,
  });

  const [inputValues, setInputValues] = useState({
    vipInput1: "",
    vipInput2: "",
    premiumInput1: "",
    premiumInput2: "",
    standarInput1: "",
    standarInput2: "",
    basicInput1: "",
    basicInput2: "",
    sunBasicInput1: "",
    sunBasicInput2: "",
    shadowBasicInput1: "",
    shadowBasicInput2: "",
  });

  // funciones para el header y menulateral
  const handleOptionHover = (option) => {
    setActiveOption(option);
  };

  const toggleMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  }
  const toggleMenuClose = () => {
    setMenuOpen(false);
  }
  // funciones del formulario
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = [];

    for (const [key, value] of Object.entries(formValues)) {
      if (value) {
        const input1 = inputValues[`${key}Input1`];
        const input2 = inputValues[`${key}Input2`];

        data.push({
          location: key,
          amount: input1 || "N/A",
          price: input2 || "N/A",
        });
      }
    }
    const jsonData = JSON.stringify(data, null, 2);
    // Aquí realizar la lógica para enviar el archivo JSON por API o almacenándolo localmente.
    console.log(jsonData);
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
      <div className="menu-container">
          <ul className="menu-list">
              <li><FontAwesomeIcon icon={faXmark} onClick={toggleMenuClose}  /></li>
              <li>Dashboard</li>
              <li>Resume</li>
              <Link to="/transfer"><li>Transfer</li></Link>
              <Link to="/statistics"><li>Statistic</li></Link>
              <li>Validate</li>
              <li>Settings</li>
              <button><Link to="/">LogOut</Link></button>
          </ul>
      </div>
    )}
    <main>
    <div className="box-save">
        <h1>Tickets Details</h1>
        <p>In this section select the tickets details for you event</p>

        <hr />

        <form onSubmit={handleSubmit}>
        <div className="form-save">
          <div className="vip">
            <label htmlFor="vip">
              <input
                type="checkbox"
                name="vip"
                checked={formValues.vip}
                onChange={handleCheckboxChange}
              />
              VIP
            </label>
            {formValues.vip && (
              <div>
                <input
                  type="number"
                  name="vipInput1"
                  value={inputValues.vipInput1}
                  onChange={handleInputChange}
                  min={0}
                  max={500}
                  placeholder="Amount of tickets"
                  required
                />
                <input
                  type="number"
                  name="vipInput2"
                  value={inputValues.vipInput2}
                  onChange={handleInputChange}
                  step="0.01"
                  min={1.00}
                  max={100.00}
                  placeholder="Price per ticket"
                  required
                />
              </div>
            )}
          </div>

          <div className="premiun">
            <label htmlFor="premium">
              <input
                type="checkbox"
                name="premium"
                checked={formValues.premium}
                onChange={handleCheckboxChange}
              />
              Premium
            </label>
            {formValues.premium && (
              <div>
                <input
                  type="number"
                  name="premiumInput1"
                  value={inputValues.premiumInput1}
                  onChange={handleInputChange}
                  min={0}
                  max={500}
                  placeholder="Amount of tickets"
                  required
                />
                <input
                  type="number"
                  name="premiumInput1"
                  value={inputValues.premiumInput2}
                  onChange={handleInputChange}
                  step="0.01"
                  min={1.00}
                  max={100.00}
                  placeholder="Price per ticket"
                  required
                />
              </div>
            )}
          </div>

          <div className="standar">
            <label htmlFor="standar">
              <input
                type="checkbox"
                name="standar"
                checked={formValues.standar}
                onChange={handleCheckboxChange}
              />
              Standar
            </label>
            {formValues.standar && (
              <div>
                <input
                  type="number"
                  name="standarInput1"
                  value={inputValues.standarInput1}
                  onChange={handleInputChange}
                  min={0}
                  max={500}
                  placeholder="Amount of tickets"
                  required
                />
                <input
                  type="number"
                  name="standarInput2"
                  value={inputValues.standarInput2}
                  onChange={handleInputChange}
                  step="0.01"
                  min={1.00}
                  max={100.00}
                  placeholder="Price per ticket"
                  required
                />
              </div>
            )}
          </div>

          <div className="basic">
            <label htmlFor="basic">
              <input
                type="checkbox"
                name="basic"
                checked={formValues.basic}
                onChange={handleCheckboxChange}
              />
              Basic
            </label>
            {formValues.basic && (
              <div>
                <input
                  type="number"
                  name="basicInput1"
                  value={inputValues.basicInput1}
                  onChange={handleInputChange}
                  min={0}
                  max={500}
                  placeholder="Amount of tickets"
                  required
                />
                <input
                  type="number"
                  name="basicInput2"
                  value={inputValues.basicInput2}
                  onChange={handleInputChange}
                  step="0.01"
                  min={1.00}
                  max={100.00}
                  placeholder="Price per ticket"
                  required
                />
              </div>
            )}
          </div>

          <div className="sunBasic">
            <label htmlFor="sunBasic">
              <input
                type="checkbox"
                name="sunBasic"
                checked={formValues.sunBasic}
                onChange={handleCheckboxChange}
              />
              Sun Basic
            </label>
            {formValues.sunBasic && (
              <div>
                <input
                  type="number"
                  name="sunBasicInput1"
                  value={inputValues.sunBasicInput1}
                  onChange={handleInputChange}
                  min={0}
                  max={500}
                  placeholder="Amount of tickets"
                  required
                />
                <input
                  type="number"
                  name="sunBasicInput2"
                  value={inputValues.sunBasicInput2}
                  onChange={handleInputChange}
                  step="0.01"
                  min={1.00}
                  max={100.00}
                  placeholder="Price per ticket"
                  required
                />
              </div>
            )}
          </div>

          <div className="shadowBasic">
            <label htmlFor="shadowBasic">
              <input
                type="checkbox"
                name="shadowBasic"
                checked={formValues.shadowBasic}
                onChange={handleCheckboxChange}
              />
              Shadow Basic
            </label>
            {formValues.shadowBasic && (
              <div>
                <input
                  type="number"
                  name="shadowBasicInput1"
                  value={inputValues.shadowBasicInput1}
                  onChange={handleInputChange}
                  min={0}
                  max={500}
                  placeholder="Amount of tickets"
                  required
                />
                <input
                  type="number"
                  name="shadowBasicInput2"
                  value={inputValues.shadowBasicInput2}
                  onChange={handleInputChange}
                  step="0.01"
                  min={1.00}
                  max={100.00}
                  placeholder="Price per ticket"
                  required
                />
              </div>
            )}
          </div>

          <div className="button">
            <button type="submit" className='ContinueButton'>Guardar</button>
          </div>
        </div>
        </form>
    </div>
    </main>
    </>
  )
}

export default TicketEvent