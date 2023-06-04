import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./home.css"

const Home = () => {
    return (
        <div>
            <header className='header'>
                <div className='logo'><a href="#">LOGO</a></div>
                <nav className='nav'>
                    <ul className='nav-list'>
                        <li className='all'><a href="#">All</a></li>
                        <li className='new'><a href="#">New</a></li>
                        <li className='cultural'><a href="#">Cultural</a></li>
                        <li className='artistic'><a href="#">Artistic</a></li>
                        <li className='searchI'>
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
                                <FontAwesomeIcon icon={faBars} />
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Home;
