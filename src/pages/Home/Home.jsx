import { useEffect, useCallback } from 'react';
import Loader from '../../components/layouts/Loader/Loader';
import { useState } from 'react';
import IntroSlider from '../../components/layouts/IntroSlider/IntroSlider';
import { createPortal } from 'react-dom';
import { useUser } from '../../hooks/useUser';
import style from './Home.module.scss';
import Modal from '../../components/layouts/Modal/Modal';
import Navigation from '../../components/layouts/Navigation/Navigation';
import IntroTasks from '../../components/UI/IntroTasks/IntroTasks';
import TasksList from '../../components/layouts/Tasks/TasksList';

const HomePage = () => {
	const [loading, setLoading] = useState(true);
	const [modal, setModal] = useState(false);
	const [tasks, setTasks] = useState([]);

	const user = useUser();

	useEffect(() => {
		let timeout;
		if (user && tasks.length > 0) {
			setLoading(false);
		} else {
			timeout = setTimeout(() => {
				setLoading(false);
			}, 1500);
		}

		return () => {
			clearTimeout(timeout);
		};
	}, [user]);

	const handleCloseModal = () => {
		setModal(false);
	};
	const handleOpenModal = () => {
		setModal(true);
	};

	const fetchTasks = useCallback(async () => {
		try {
			const response = await fetch(
				`https://snarto-bf3e3-default-rtdb.europe-west1.firebasedatabase.app/tasks.json?print=pretty&orderBy="uid"&equalTo="${user}"`
			);
			if (!response.ok) {
				throw new Error('Something went wrong!');
			}
			const data = await response.json();
			const fetchedTasks = [];
			for (const key in data) {
				fetchedTasks.push({
					id: key,
					uid: data[key].uid,
					todo: data[key].todo,
					isDone: data[key].isDone,
				});
			}
			setTasks(fetchedTasks);
		} catch (error) {
			console.log(error);
		}
	});

	useEffect(() => {
		fetchTasks();
	}, [user]);

	return (
		<>
			{loading && createPortal(<Loader />, document.getElementById('loader'))}
			{user ? (
				<section className={`${style.tasks}`}>
					{tasks.length === 0 ? (
						<IntroTasks />
					) : (
						<TasksList tasks={tasks} getData={fetchTasks} />
					)}
					{modal &&
						createPortal(
							<Modal closeModal={handleCloseModal} getData={fetchTasks} />,
							document.getElementById('modal')
						)}
					<Navigation openModal={handleOpenModal} />
				</section>
			) : (
				<IntroSlider />
			)}
		</>
	);
};
export default HomePage;
