import Avatar from '../Avatar/Avatar'
import css from './Header.module.css';

const Header = (props) => {
  return (
    <header className={css.header}>
      <h1 className={css.header_title}>Awesome Kanban Board</h1>
      <Avatar />
    </header>
  )
}

export default Header;