import Icon from '../../../assets/svg/Icon';
import styles from './Loader.module.scss';

const Loader = () => {
	return (
		<div className={styles.loader}>
			<div
				className={styles.content}
				data-aos='zoom-in'
				data-aos-easing='ease-in-out'
				data-aos-duration='1000'
			>
				<Icon />
				<p>UpTodo</p>
			</div>
		</div>
	);
};
export default Loader;
