import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Contact from './pages/contact';
import Meet from './pages/Meet';
import Membership from './pages/Membership';
import Membershipone from './pages/Membershipact';
import Nopage from './pages/nopage';
import EventDescription from './pages/EventDescription';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/meet" element={<Meet />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/membershipact" element={<Membershipone />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/eventdescription" element={<EventDescription />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;