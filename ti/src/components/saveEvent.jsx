import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './event.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDropzone } from 'react-dropzone';

function SaveEvent() {
  // funciones para header y menulateral
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeOption, setActiveOption] = useState('new');
  // Funcion para navegacion
  const navigate = useNavigate();
  // Funcion para la seleccion de imagen
  const [selectedFiles, setSelectedFiles] = useState([]);
  // Guardado de datos del formulario
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

  // funciones para el dropzone
  const onDrop = (acceptedFiles) => {
    setSelectedFiles(acceptedFiles);
    const fileArray = Array.from(acceptedFiles)
    setFormData((prevData) => ({
      ...formData,
      image: fileArray
    }));
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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
  // Funciones del formulario
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      const fileArray = Array.from(files);
      setFormData((prevData) => ({
        ...formData,
        image: fileArray // Aquí se guardan los archivos seleccionados en el input file.
      }));
      setSelectedFiles(fileArray);
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
    navigate('/event-tickets');
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
                    <Link to="/search"><FontAwesomeIcon icon={faSearch} /></Link>
                    
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
              <Link to="/validate"><li>Validate</li></Link>
              <li>Settings</li>
              <button><Link to="/">LogOut</Link></button>
          </ul>
      </div>
    )}
    <div className="box-save">
      <h1>Basic Details</h1>
      <p>This section contains the basic details of the event</p>

      <hr />

      <form onSubmit={handleSubmit}>
        <div className="form-save">
          <div className='title'>
            <label htmlFor="title"><h2>name of event</h2></label>
            <p>You must write a name of your event</p>
            <input type="text" name="title" id="title" value={formData.title} 
              onChange={handleInputChange} placeholder="TITLE" />
          </div>
          <div className='date'>
            <label htmlFor="date_hour"><h2>date and hour</h2></label>
            <p>Choise the date and hour of your event</p>
            <input type="datetime-local" name="date_hour" id="date_hour" 
              value={formData.date_hour} onChange={handleInputChange} min="2023-01-01T00:00" />
          </div>
          <div className='duration'>
            <label htmlFor="duration"><h2>duration</h2></label>
            <p>You must set the duration of your event</p>
            <input type="time" name="duration" id="duration" min="00:00" max="24:00" 
              value={formData.duration} onChange={handleInputChange} />
          </div>
          <div className='sponsor'>
            <label htmlFor="sponsor"><h2>sponsor</h2></label>
            <p>You must set a sponsor of your event</p>
            <input type="text" name="sponsor" id="sponsor" placeholder='SPONSOR'
              value={formData.sponsor} onChange={handleInputChange} />
          </div>
          <div className='category'>
            <label htmlFor="category"><h2>category</h2></label>
            <p>You must set a category of your event</p>
            <select id="category" name="category" value={formData.category} onChange={handleInputChange}>
              <option value="" selected disabled>Selecciona una opción</option>
              <option value="opcion1">Opción 1</option>
              <option value="opcion2">Opción 2</option>
              <option value="opcion3">Opción 3</option>
            </select>
          </div>
          <div className='location'>
            <label htmlFor="location"><h2>location</h2></label>
            <p>You must set the location of your event</p>
            <input type="text" name="location" id="location" placeholder='PLACE' 
              value={formData.location} onChange={handleInputChange} />
          </div>

          <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`} >
            <label htmlFor="image"></label>
            <input type='file' {...getInputProps()} name="image" id="image"  accept="image/*" onChange={handleInputChange} />
            {selectedFiles.length > 0 ? (
              <div>
                <p>Selected Images:</p>
                <ul id='files'>
                  {selectedFiles.map((file, index) => (
                    <div key={index}>
                      <img src={URL.createObjectURL(file)} alt="Imagen" width={300} />
                    </div>
                  ))}     
                </ul>
              </div>
            ) : (
              <div>
                <img src="./external/IconDownloadImagen.png" alt="Imagen" width={200} />
                <p>Drag and drop image here or click to add image.</p>
              </div>
            )}
          </div>
          
          <div className='description'>
            <label htmlFor="description"><h2>description</h2></label>
            <p>Write a description of your event</p>
            <textarea name="description" id="description" cols="20" rows="10" placeholder='DESCRIPTION'
              value={formData.description} onChange={handleInputChange}></textarea>
          </div>
          <div className='button'>
            <button type="submit" value="Continue" className='ContinueButton'>CONTINUE</button>
          </div>
        </div>
      </form>
    </div>
    
    </>
  );
}

export default SaveEvent
