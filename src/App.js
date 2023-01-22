import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';

function App() {
	const appMode = useSelector(state => state.mode);
	console.log(appMode);
	return (
		<div
			className={`bg-gray-200 dark:bg-zinc-900 transition-all duration-700 ${appMode.initialMode}`}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
