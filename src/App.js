import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Contact from './pages/contact';
import Meet from './pages/Meet';
import Membership from './pages/Membership';
import Membershipone from './pages/Membershipact';
import Nopage from './pages/nopage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/meet" element={<Meet />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/membershipone" element={<Membershipone />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;