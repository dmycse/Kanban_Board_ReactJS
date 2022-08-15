import './Button.css';

const Button = ({name, onClick, disabled, customClass}) => {
	return (
		<button 
			onClick = {onClick}
			disabled = {disabled}
			className = {customClass}
		> {name}
		</button>
	)
}

export default Button;
