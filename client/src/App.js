import './App.css';
import { Routes, Route } from 'react-router-dom';
import Posts from './screens/Posts';
import Layout from './components/Layout/Layout'

function App() {
  return (
    <div className='App'>
      <Layout />
      <Routes>
        <Route path='/' element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
