import styles from './PlainButton.module.scss';

const PlainButton = ({ children, onClick }) => {
	return (
		<button onClick={onClick} className={styles.plain}>
			{children}
		</button>
	);
};
export default PlainButton;
