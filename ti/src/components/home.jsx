import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import "./home.css"
const Home = () => {
    return (
        <div className='header'>
            <div className='logo'>LOGO</div>
            <button className='abrir-menu'>Abrir</button>
            <nav className='nav'>
                <button>Cerrar</button>
                <ul className='nav-list'>
                    <li><a href="#">All</a></li>
                    <li><a href="#">New</a></li>
                    <li><a href="#">Cultural</a></li>
                    <li><a href="#">Artistic</a></li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={faSearch} />
                        </a>
                    </li>
                    <li><a href="#">
                        <FontAwesomeIcon icon={faCartArrowDown} />
                    </a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;
