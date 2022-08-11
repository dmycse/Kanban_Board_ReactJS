import { Switch, Route } from 'react-router-dom';
import Board from '../Board/Board';
import TaskDescription from '../TaskDescription/TaskDescription';
import css from './Main.module.css';

const Main = props => {
	return (
		<main className={css.main_wrapper}>
			<Switch>
				<Route exact path={'/'}>
					<Board {...props} />
				</Route>
				<Route path={'/tasks/:taskId'}>
					<TaskDescription {...props} />
				</Route>
			</Switch>
		</main>
	)
}

export default Main;