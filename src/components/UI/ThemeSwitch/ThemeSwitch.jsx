import { useEffect, useState } from 'react';
import Bulb from '../../../assets/svg/Bulb';
import style from './ThemeSwitch.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeActions } from '../../../redux/theme-slice';

const ThemeSwitch = () => {
	const storedTheme = useSelector((state) => state.theme.theme);
	const [theme, setTheme] = useState(storedTheme);

	const dispatch = useDispatch();
	useEffect(() => {
		document.body.dataset.theme = theme;
		if (theme === 'dark') {
			dispatch(ThemeActions.setThemeDark());
		} else {
			dispatch(ThemeActions.setThemeLight());
		}
	}, [theme]);

	const themeHandler = (e) => {
		setTheme(e.target.checked ? 'dark' : 'light');
	};

	return (
		<div className={style.switch}>
			<label htmlFor='theme'>
				<Bulb fill={theme === 'dark' ? 'white' : 'black'} />
			</label>
			<input
				type='checkbox'
				id='theme'
				onChange={themeHandler}
				checked={theme === 'dark'}
			/>
		</div>
	);
};

export default ThemeSwitch;
