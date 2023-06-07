import { Routes, Route } from 'react-router-dom'; 
import { useState } from 'react';
import Login from './components/login';
import Home from './components/home';
import SaveEvent from './components/saveEvent';
import TicketEvent from './components/ticketEvent';
import Search from './components/search';
import Statistics from './components/statistics';
import Transfer from './components/transfer';
import Validate from './components/validate';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [user, setUser] = useState([]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home user={user} setUser={setUser} />} />
        <Route path="/event" element={ < SaveEvent />} />
        <Route path="/event-tickets" element={ < TicketEvent />} />
        <Route path="/search" element={ < Search />} />
        <Route path="/statistics" element={ <Statistics /> } />
        <Route path="/transfer" element={ <Transfer /> } />
        <Route path="/validate" element={ <Validate/> } />
      </Routes>
    </div>
  );
}

export default App;
