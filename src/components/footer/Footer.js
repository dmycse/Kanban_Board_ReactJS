import {TASKS_STATUS} from '../../config';
import css from './Footer.module.css'

const Footer = ({tasksList}) => {
	let activeTasks = tasksList.filter(task => task.status === TASKS_STATUS.BACKLOG);
	let finishedTasks = tasksList.filter(task => task.status === TASKS_STATUS.FINISHED)

  return (
    <footer className={css.footer}>
			<div className={css.footer_tasks}>
				<div className={css.footer_task}>Active tasks: {activeTasks.length} </div>
				<div className={css.footer_task}>Finished tasks: {finishedTasks.length}</div>
      </div>
			<div>Kandan board by DMITRY, 2022</div>
    </footer>
  )
}

export default Footer;