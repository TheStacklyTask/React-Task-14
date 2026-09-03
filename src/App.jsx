import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import DestinationDetails from './pages/DestinationDetails';
import Experiences from './pages/Experiences';
import ExperienceDetails from './pages/ExperienceDetails';
import Trips from './pages/Trips';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:destinationId" element={<DestinationDetails />} />

        <Route path="/experiences" element={<Experiences />}>
          <Route index element={<ExperienceDetails />} />
          <Route path=":category" element={<ExperienceDetails />} />
        </Route>

        <Route path="/trips" element={<Trips />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}
