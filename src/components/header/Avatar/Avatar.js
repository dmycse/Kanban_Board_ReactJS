import { useState } from 'react';
import logo from '../../../assets/icon_man.png';
import arrow_down from '../../../assets/icon_arrow_down.png';
import arrow_up from '../../../assets/icon_arrow_up.png';
import css from './Avatar.module.css';

const Avatar = (props) => {

	const [menuVisible, setMenuVisible] = useState(true);
 
	const handleClick = () => {
		setMenuVisible(!menuVisible);
	}

  return (
		<div className={css.avatar_wrapper}>
			<div className={css.avatar_header} onClick={handleClick}>
				<div>
					<img src={logo} alt='An user avatar' className={css.avatar_img} />
				</div>
				<Button
					name = {menuVisible ? <img src={arrow_down} alt='An arrow down'/> : <img src={arrow_up} alt='An arrow up'/>}
					customClass='avatar_btn'
				/>
			</div>
			<ul className={css.avatar_menu} style={{display: `${menuVisible ? 'none' : 'block'}`}}>
					<li className={css.avatar_menu__item}>Profile</li>
					<li className={css.avatar_menu__item}>Log Out</li>
			</ul>
    </div>
  )
}

export default Avatar;
