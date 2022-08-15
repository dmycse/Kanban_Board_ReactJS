import './Button.css';

const Button = ({name, type, onClick, disabled, customClass}) => {
	return (
		<button 
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={customClass}
		> {name}
		</button>
	)
}

export default Button;
