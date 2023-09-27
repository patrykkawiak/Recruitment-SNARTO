import styles from './Button.module.scss';

const Button = ({ children, onClick, type }) => {
	return (
		<button
			onClick={onClick}
			className={`${styles.button} ${styles[`${type}`]}`}
		>
			{children}
		</button>
	);
};
export default Button;
