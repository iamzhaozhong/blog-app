import './App.css';
import { Routes, Route } from 'react-router-dom';
import Posts from './screens/Posts';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Posts />} />
			</Routes>
		</div>
	);
}

export default App;
