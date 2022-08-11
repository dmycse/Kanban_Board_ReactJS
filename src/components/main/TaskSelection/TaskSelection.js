import css from './TaskSelection.module.css';

const TaskSelection = ({status, selectList, tasksList, setTasksList, setSelectionListVisible}) => {

	const handleChange = (e) => {
		let findTask = tasksList.find(task => task.title === e.target.value)
		let updateTasksList = tasksList.filter(task => task.title !== e.target.value)
		updateTasksList.push({...findTask, status: status})
		
		setTasksList(updateTasksList)
		setSelectionListVisible(false)
	}

	const handleClick = () => {
		setSelectionListVisible(false);
	}

	return (
    <div className={css.selection_block}>
			<select name='task_selection' onChange={handleChange} className={css.select_task}>
				<option value='none' className={css.select_option}>Select a task</option>
				{selectList(status).map(task => <option key={task.id} value={task.title} >{task.title}</option>)}
			</select>
			<button onClick={handleClick} className={css.cancel_btn}>Cancel</button>
		</div>
  )
}

export default TaskSelection;

