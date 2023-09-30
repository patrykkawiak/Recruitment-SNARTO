import Plus from '../../../assets/svg/Plus';
import { signOut } from 'firebase/auth';
import style from './Navigation.module.scss';
import { auth } from '../../../helpers/firebase-config';
import ThemeSwitch from '../../UI/ThemeSwitch/ThemeSwitch';

const Navigation = ({ openModal }) => {
	const userSignOut = () => {
		signOut(auth)
			.then(() => {})
			.catch((err) => console.log(err));
	};

	return (
		<nav className={style.nav}>
			<button onClick={userSignOut} className={style.logout}>
				Logout
			</button>
			<button className={style['add-btn']} onClick={openModal}>
				<Plus />
			</button>
			<ThemeSwitch />
		</nav>
	);
};
export default Navigation;
