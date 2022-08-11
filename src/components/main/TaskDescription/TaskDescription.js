import { useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import css from './TaskDescription.module.css';

const TaskDescription = ({tasksList, setTasksList}) => {
	const match = useRouteMatch();
	const {taskId} = match.params;
  
	let task = tasksList.find(task => task.id === taskId);
	
	const [taskDescription, setTaskDescription] = useState(task.description)

	const handleChange = (e) => {
		let updateTasksList = tasksList.map(task => {
			if(task.id === taskId) {
				return {...task, description: e.target.value}
			}
			return task
		})
		setTaskDescription(e.target.value)
		setTasksList(updateTasksList)
	}
	
	return (
		<div className={css.description_wrapper}>
			<div className={css.description_header}>
				<h3 className={css.description_title}>{task.title}</h3>
				<div className={css.description_link}>
					<Link to='/'>&#9587;</Link>
				</div>
			</div>
			<div className={css.description_content}>
				<textarea
					id='taskDescription'
					name='description'
					className={css.description_text}
					value={taskDescription}
					placeholder='This task has no description yet'
					onChange={handleChange}
				/>
			</div>
		</div>
	)
}

export default TaskDescription;