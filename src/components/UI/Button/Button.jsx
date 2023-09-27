import styles from './Button.module.scss';

const Button = ({ children, onClick, type, disabled }) => {
	return (
		<button
			onClick={onClick}
			className={`${styles.button} ${styles[`${type}`]}`}
			disabled={disabled}
		>
			{children}
		</button>
	);
};
export default Button;
