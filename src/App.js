import './styles/styles.scss';
import './styles/reset.css';
import Main from './pages/Main';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';
import { animated, useSpring } from '@react-spring/web';

function App() {
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    [],
  );
  return (
    <div className="App">
      <animated.div style={props}>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </animated.div>
    </div>
  );
}

export default App;
