import { useState } from 'react';
import { Link } from 'react-router-dom';
import {TASKS_STATUS} from '../../../config';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import TaskSelection from '../TaskSelection/TaskSelection';
import css from './Card.module.css';

const Card = ({status, title, tasksList, setTasksList, tasks, addNewTask}) => {
	const [isFormVisible, setFormVisible] = useState(false);
	const [isSelectionListVisible, setSelectionListVisible] = useState(false);
	
	const handleClick = () => setFormVisible(!isFormVisible);
	const handleChoose = () => setSelectionListVisible(!isSelectionListVisible);
	
	const handleClear = () => {
		let clearCard = tasksList.filter(item => item.status !== TASKS_STATUS.FINISHED)
		setTasksList(clearCard);
	}

	const disableClearBtn = (type) => {
		let clearCard = tasksList.filter(item => item.status === type)
		return clearCard.length
	}

	const selectList = (status) => {
		let showTasks;
			if (status === 'ready') {
				showTasks = 'backlog';
			} else if (status === 'inProgress') {
				showTasks = 'ready';
			} else if (status === 'finished') {
				showTasks = 'inProgress';
			}
		return tasksList.filter(item => item.status === showTasks);
	}

	return (
		<div className={css.card}>
			<div className={css.card_title}>{title}</div>
			{tasks.map(task => {
				return (
				<Link key={task.id} to={`/tasks/${task.id}`} className={css.card_link}>
					<div key={task.id} className={css.card_task}>{task.title}</div>
				</Link>
			)}
			)}
			{status === TASKS_STATUS.FINISHED ? 
				<Button
					name='Clear this card'
					onClick={handleClear}
					disabled={disableClearBtn(TASKS_STATUS.FINISHED) === 0}
					customClass='clear_card'
				/> : null
			}
			{isFormVisible ? 
				<NewTaskForm 
					addNewTask={addNewTask} 
					setFormVisible={setFormVisible} 
				/> : 
				(status === TASKS_STATUS.BACKLOG) ?
				<Button
					name='+ Add task'
					onClick={handleClick} 
					customClass='add-task_btn'
				/> :
				(isSelectionListVisible) ? 
				<TaskSelection 
					status={status}
					selectList={selectList}
					tasksList={tasksList}
					setTasksList={setTasksList}
					setSelectionListVisible={setSelectionListVisible} 
				/> : 
				<Button 
					name='+ Add task'
					onClick={handleChoose}
					disabled={selectList(status).length === 0}
					customClass='add-task_btn'
				/>
			}
		</div>
	)
}

export default Card;
