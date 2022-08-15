import css from './TaskSelection.module.css';

const TaskSelection = ({status, selectList, tasksList, setTasksList, setSelectionListVisible}) => {

	const handleChange = (e) => {
		let findTask = tasksList.find(task => task.title === e.target.value);
		let updateTasksList = tasksList.filter(task => task.title !== e.target.value);
		setTasksList([...updateTasksList, {...findTask, status: status}]);
		setSelectionListVisible(false);
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
			<Button
				name='Cancel' 
				onClick={handleClick} 
				customClass='cancel_btn'
			/>
		</div>
  )
}

export default TaskSelection;

