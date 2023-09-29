import { useState } from 'react';
import TaskItem from './TaskItem';
import style from './TasksList.module.scss';
import SearchBar from './SearchBar';

const TasksList = ({ tasks, getData }) => {
	const [searchData, setSearchData] = useState('');

	const inProgress = tasks.filter((task) => task.isDone === false);
	const completed = tasks.filter((task) => task.isDone === true);

	const getSearchParams = (e) => {
		setSearchData(e.target.value);
	};

	const searchForItems = (params, tasks) => {
		if (!params) {
			return tasks;
		}
		return tasks.filter((task) =>
			task.todo.toLowerCase().includes(params.toLowerCase())
		);
	};

	const filtredinProgressItems = searchForItems(searchData, inProgress);
	const filtredCompletedItems = searchForItems(searchData, completed);

	return (
		<>
			<SearchBar searchData={getSearchParams} />
			<ul className={style.list}>
				{filtredinProgressItems.map((task) => (
					<TaskItem item={task} getData={getData} />
				))}
				{filtredCompletedItems.length > 0 ? (
					<p className={style.breaker}>Completed</p>
				) : null}
				{filtredCompletedItems.map((task) => (
					<TaskItem item={task} isCompleated={true} getData={getData} />
				))}
			</ul>
		</>
	);
};
export default TasksList;
