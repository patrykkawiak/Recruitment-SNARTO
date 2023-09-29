import Circle from '../../../assets/svg/Circle';
import Mark from '../../../assets/svg/Mark';
import style from './TaskItem.module.scss';
import databaseHelper from '../../../helpers/database-template';

const TaskItem = ({ item, isCompleated, getData }) => {
	const { id } = item;

	const handleUpdateTask = async () => {
		await databaseHelper(
			{
				method: 'PATCH',
				body: JSON.stringify({ isDone: true }),
			},
			getData,
			id
		);
	};
	const handleDeleteTask = async () => {
		await databaseHelper(
			{
				method: 'DELETE',
			},
			getData,
			id
		);
	};

	return (
		<li className={`${style.item} ${isCompleated ? style.compleated : null}`}>
			{!item.isDone ? (
				<button className={style.done} onClick={handleUpdateTask}>
					<Circle />
				</button>
			) : null}
			<p>{item.todo}</p>
			<button className={style.delete} onClick={handleDeleteTask}>
				<Mark fill={'#fff'} />
			</button>
		</li>
	);
};
export default TaskItem;
