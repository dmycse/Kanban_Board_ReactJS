import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header/Header';
import Main from './components/main/Main/Main';
import Footer from './components/footer/Footer';
import css from './App.module.css';

function App() {
 
	let initialData = JSON.parse(window.localStorage.getItem('tasks')) || [];
	
	const [tasksList, setTasksList] = useState(initialData);

	useEffect(() => {
		window.localStorage.setItem('tasks', JSON.stringify(tasksList))
	}, [tasksList]);

  return (
		<div className={css.wrapper}>
			<BrowserRouter>
				<Header />
				<Main tasksList={tasksList} setTasksList={setTasksList} />
				<Footer tasksList={tasksList} />
			</BrowserRouter>
		</div>
  );
}

export default App;
