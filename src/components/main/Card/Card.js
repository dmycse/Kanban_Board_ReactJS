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
		switch (status) {
			case 'ready':
					showTasks = 'backlog'
					break;
			case 'inProgress':
					showTasks = 'ready'
					break;
			case 'finished':
					showTasks = 'inProgress'
					break;
			default: 
					showTasks = status
					break;
	}
		return tasksList.filter(item => item.status === showTasks)
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
				<button 
				onClick={handleClear}
				disabled={disableClearBtn(TASKS_STATUS.FINISHED) === 0}
				className={css.clear_btn}
				>Clear this card</button> : null
			}
			{isFormVisible ? 
				<NewTaskForm 
					addNewTask={addNewTask} 
					setFormVisible={setFormVisible} 
				/> : (status === TASKS_STATUS.BACKLOG) ? <button onClick={handleClick} className={css.card_btn}><span className={css.card_btn_plus}>&#43;</span> Add task</button> :
				(isSelectionListVisible) ? 
				<TaskSelection 
					status={status}
					selectList={selectList}
					tasksList={tasksList}
					setTasksList={setTasksList}
					setSelectionListVisible={setSelectionListVisible} 
				/> : 
				<button 
					onClick={handleChoose}
					disabled={selectList(status).length === 0}
					className={css.card_btn}
					><span className={css.card_sign_plus}>&#43;</span> Add task</button>
			}
		</div>
	)
}

export default Card;