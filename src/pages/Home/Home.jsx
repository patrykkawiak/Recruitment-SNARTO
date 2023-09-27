import { useEffect } from 'react';
import Loader from '../../components/layouts/Loader/Loader';
import { useState } from 'react';
import IntroSlider from '../../components/layouts/IntroSlider/IntroSlider';
import { createPortal } from 'react-dom';
import { useUser } from '../../hooks/useUser';
import Button from '../../components/UI/Button/Button';
import { signOut } from 'firebase/auth';
import { auth } from '../../helpers/firebase-config';

const HomePage = () => {
	const [loader, setloader] = useState(true);
	const user = useUser();

	const userSignOut = () => {
		signOut(auth)
			.then(() => {})
			.catch((err) => console.log(err));
	};

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
			{user ? (
				<Button type={'primary'} onClick={userSignOut}>
					Logout
				</Button>
			) : (
				<IntroSlider />
			)}
		</>
	);
};
export default HomePage;
