import { useState } from 'react';
import Button from '../Button/Button';
import css from './NewTaskForm.module.css'

const NewTaskForm = props => {
	const {addNewTask, setFormVisible} = props;
	const [newTask, setNewTask] = useState({
		title: '',
		description: ''
	});

	const handleChange = (e) => {
		let fieldName = e.target.name;
		setNewTask({...newTask, [fieldName]: e.target.value})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if(newTask.title) {
			addNewTask(newTask.title, newTask.description)
		}
		setFormVisible(false);
	}

	return (
		<form onSubmit={handleSubmit} className={css.newtask_form}>
			<input
				id='taskTitle'
				type='text'
				name='title'
				className={css.newtask_input}
				value={newTask.title}
				placeholder="Enter new task"
				onChange={handleChange}
			/>
			<Button
				name='Submit' 
				type='submit'
				customClass='newtask_submit_btn'
			/>
		</form>
	)
}

export default NewTaskForm;
