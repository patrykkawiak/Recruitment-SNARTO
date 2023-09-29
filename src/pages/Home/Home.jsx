import { useEffect, useCallback } from 'react';
import Loader from '../../components/layouts/Loader/Loader';
import { useState } from 'react';
import IntroSlider from '../../components/layouts/IntroSlider/IntroSlider';
import { createPortal } from 'react-dom';
import { useUser } from '../../hooks/useUser';
import { getAuth, signOut } from 'firebase/auth';
import { auth } from '../../helpers/firebase-config';
import style from './Home.module.scss';
import Plus from '../../assets/svg/Plus';
import CheckListImg from '../../assets/img/tasks/Checklist.png';
import Modal from '../../components/layouts/Modal/Modal';

const HomePage = () => {
	const [loading, setLoading] = useState(true);
	const [modal, setModal] = useState(false);
	const [tasks, setTasks] = useState([]);

	const user = useUser();

	const userSignOut = () => {
		signOut(auth)
			.then(() => {})
			.catch((err) => console.log(err));
	};

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

	const fetchTasks = useCallback(async () => {
		try {
			const response = await fetch(
				`https://snarto-bf3e3-default-rtdb.europe-west1.firebasedatabase.app/tasks.json?print=pretty&orderBy="uid"&equalTo="${user}"`
			);
			// const response = await fetch(
			// 	'https://snarto-bf3e3-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
			// );
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
			// if (user) {
			// 	const filteredTasks = fetchedTasks.filter((task) => task.uid === user);
			// 	setTasks(filteredTasks);
			// }
			setTasks(fetchedTasks);
		} catch (error) {
			console.log(error);
		}
	});

	// useEffect(() => {
	// 	fetchTasks();
	// }, [user, tasks]);
	useEffect(() => {
		fetchTasks();
	}, [fetchTasks]);

	return (
		<>
			{loading && createPortal(<Loader />, document.getElementById('loader'))}
			{user ? (
				<section className={style.tasks}>
					{tasks.length === 0 && (
						<div className={style.checklist}>
							<img src={CheckListImg} alt='check list' />
							<div className={style.content}>
								<h2>What do you want to do today?</h2>
								<p>Tap + to add your tasks</p>
							</div>
						</div>
					)}
					{tasks.map((el) => (
						<li key={el.id}>{el.todo}</li>
					))}
					{modal &&
						createPortal(
							<Modal closeModal={handleCloseModal} />,
							document.getElementById('modal')
						)}
					<nav className={style.nav}>
						<button onClick={userSignOut} className={style.logout}>
							Logout
						</button>
						<button
							className={style['add-btn']}
							onClick={() => {
								setModal(true);
							}}
						>
							<Plus />
						</button>
					</nav>
				</section>
			) : (
				<IntroSlider />
			)}
		</>
	);
};
export default HomePage;
