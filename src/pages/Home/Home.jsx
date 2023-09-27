import { useEffect } from 'react';
import Loader from '../../components/UI/Loader/Loader';
import { useState } from 'react';
import IntroSlider from '../../components/layouts/IntroSlider/IntroSlider';
import { createPortal } from 'react-dom';

const HomePage = () => {
	const [loader, setloader] = useState(true);
	const [tempUser, setTempUser] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setloader(false);
		}, 1000);

		return () => {
			clearTimeout(timeout);
		};
	}, []);

	return (
		<>
			{loader && createPortal(<Loader />, document.getElementById('loader'))}
			{tempUser ? <p>Todo List</p> : <IntroSlider />}
		</>
	);
};
export default HomePage;
