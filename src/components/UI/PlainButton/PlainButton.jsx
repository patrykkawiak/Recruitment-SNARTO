import styles from './PlainButton.module.scss';

const PlainButton = ({ children, onClick, disabled }) => {
	return (
		<button onClick={onClick} className={styles.plain} disabled={disabled}>
			{children}
		</button>
	);
};
export default PlainButton;
