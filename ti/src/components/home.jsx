import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = ({ user, setUser }) => {
    const handleLogout = () => {
        setUser([]);
    }
    return (
        // <button onClick={handleLogout}>Logout</button>
        <header>
            <div class='logo'>LOGO</div>
            <nav>
            <ul>
                <li><a href="#">All</a></li>
                <li><a href="#">New </a></li>
                <li><a href="#">Cultural</a></li>
                <li><a href="#">Artistic</a></li>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
            </ul>
            </nav>
                

        </header>

    );
}
export default Home;
