import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/" element={<p>This is the Home Screen</p>} />
      </Routes>
    </div>
  );
}

export default App;
