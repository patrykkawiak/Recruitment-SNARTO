import { useEffect } from 'react';
import Loader from '../../components/layouts/Loader/Loader';
import { useState } from 'react';
import IntroSlider from '../../components/layouts/IntroSlider/IntroSlider';
import { createPortal } from 'react-dom';
import { useUser } from '../../hooks/useUser';
import { signOut } from 'firebase/auth';
import { auth } from '../../helpers/firebase-config';
import style from './Home.module.scss';
import Plus from '../../assets/svg/Plus';
import CheckListImg from '../../assets/img/tasks/Checklist.png';

const HomePage = () => {
	const [loading, setLoading] = useState(true);
	const [todo, setTodo] = useState(null);

	const user = useUser();

	const userSignOut = () => {
		signOut(auth)
			.then(() => {})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		let timeout;
		if (user) {
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

	const SubmitTask = async (e) => {
		e.preventDefault();
		const response = await fetch(
			'https://snarto-bf3e3-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
			{
				method: 'POST',
				body: JSON.stringify({ id: user, text: todo }),
				'Content-Type': 'application/json',
			}
		);
	};
	const GetTask = async (e) => {
		e.preventDefault();
		const response = await fetch(
			'https://snarto-bf3e3-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
		);

		const data = await response.json();
		const loadedTasks = [];

		for (const key in data) {
			loadedTasks.push({
				id: key,
				uui: data[key].id,
				text: data[key].text,
			});
		}
		const filtered = loadedTasks.filter((task) => task.uui === user);
		console.log(filtered);
	};

	return (
		<>
			{loading && createPortal(<Loader />, document.getElementById('loader'))}
			{user ? (
				<section className={style.tasks}>
					<div className={style.checklist}>
						<img src={CheckListImg} alt='check list' />
						<div className={style.content}>
							<h2>What do you want to do today?</h2>
							<p>Tap + to add your tasks</p>
						</div>
					</div>
					<form method='POST' onSubmit={SubmitTask}>
						<input
							type='text'
							onChange={(e) => {
								setTodo(e.target.value);
							}}
						/>
						<button>Send</button>
					</form>
					<button onClick={GetTask}>Get</button>
					<nav className={style.nav}>
						<button onClick={userSignOut} className={style.logout}>
							Logout
						</button>
						<button className={style['add-btn']}>
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
