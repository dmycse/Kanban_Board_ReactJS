import uniqid from 'uniqid';
import {TASKS_STATUS, TASKS_TITLES} from '../../../config';
import Card from '../Card/Card';
import css from './Board.module.css'


const Board = ({tasksList, setTasksList}) => {

	const addNewTask = (title, description) => {
		let newTask = {
			id: uniqid(),
			title,
			description,
			status: TASKS_STATUS.BACKLOG
		}
		setTasksList([...tasksList, newTask])
	}
	
	return (
		<section className={css.cards_board}>
			{Object.values(TASKS_STATUS).map(status => {
				let tasks = tasksList.filter(task => task.status === status)
				return (
					<Card
						key={status}
						status={status}
						title={TASKS_TITLES[status]}
						tasks={tasks}
						tasksList={tasksList}
						setTasksList={setTasksList}
						addNewTask={addNewTask}
					/>
				)
			})}
		</section>
	);
}

export default Board;