import './styles/styles.scss';
import './styles/reset.css';
import Main from './pages/Main';
import About from './pages/About';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Catalog from './pages/Catalog';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
