import style from './IntroTasks.module.scss';
import CheckListImg from '../../../assets/img/tasks/Checklist.png';

const IntroTasks = () => {
	return (
		<div className={style.checklist}>
			<img src={CheckListImg} alt='check list' />
			<div className={style.content}>
				<h2>What do you want to do today?</h2>
				<p>Tap + to add your tasks</p>
			</div>
		</div>
	);
};
export default IntroTasks;
