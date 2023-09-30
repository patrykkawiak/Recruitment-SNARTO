import { Link, useNavigate } from 'react-router-dom';
import style from './Login.module.scss';
import LeftArrow from '../../assets/svg/LeftArrow';
import Button from '../../components/UI/Button/Button';
import Heading from '../../components/UI/Heading/Heading';
import Section from '../../components/UI/Section/Section';
import SectionBox from '../../components/UI/SectionBox/SectionBox';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../helpers/firebase-config';
import { useState } from 'react';
import Google from '../../assets/svg/Google';
import Apple from '../../assets/svg/Apple';
import { useUser } from '../../hooks/useUser';
import { googleConnection } from '../../helpers/google-connection';
import { appleConnection } from '../../helpers/apple-connection';

const LoginPage = () => {
	const user = useUser();
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [error, setError] = useState(false);

	const navigate = useNavigate();

	if (user) {
		navigate('/');
	}

	const loginHandler = async (e) => {
		e.preventDefault();

		try {
			const user = await signInWithEmailAndPassword(auth, email, password);
			if (!user.user) {
				return;
			}
			setTimeout(() => {
				navigate('/');
			}, 500);
		} catch (err) {
			setError(true);
			return;
		}
	};

	const loginByGoogle = async () => {
		const connection = await googleConnection();
		if (connection) {
			setTimeout(() => {
				navigate('/');
			}, 500);
		}
	};
	const loginByApple = async () => {
		const connection = await appleConnection();
		if (connection) {
			setTimeout(() => {
				navigate('/');
			}, 500);
		}
	};

	return (
		<Section isMax={true}>
			<SectionBox>
				<div className={style.link}>
					<Link to={'/start'}>
						<LeftArrow />
					</Link>
				</div>
				<div className={style.content}>
					<Heading>Login</Heading>
					{error && (
						<p style={{ color: 'tomato', fontSize: '1.4rem' }}>
							Email or password are not correct!
						</p>
					)}
					<form className={style.form} method='POST' onSubmit={loginHandler}>
						<div className={style.inputs}>
							<div className={style['input-box']}>
								<label htmlFor='email'>Email</label>
								<input
									type='email'
									id='email'
									placeholder='Enter your Email'
									onChange={(e) => {
										setEmail(e.target.value);
									}}
								/>
							</div>
							<div className={style['input-box']}>
								<label htmlFor='password'>Password</label>
								<input
									type='password'
									id='password'
									placeholder='••••••••••••'
									onChange={(e) => {
										setPassword(e.target.value);
									}}
								/>
							</div>
						</div>
						<Button
							type={'primary'}
							disabled={
								password.length > 7 && email.includes('@') ? false : true
							}
						>
							Login
						</Button>
					</form>
					<div className={style.or}>
						<div className={style.breaker}>
							<p>or</p>
						</div>
						<div className={style.btns}>
							<Button type={'secondary'} onClick={loginByGoogle}>
								<div className={style['btns-ctn']}>
									<Google />
									<span>Login With Google</span>
								</div>
							</Button>
							<Button type={'secondary'} onClick={loginByApple}>
								<div className={style['btns-ctn']}>
									<Apple />
									<span>Login With Apple</span>
								</div>
							</Button>
							<p>
								Don't have an account?<Link to={'/register'}>Register</Link>
							</p>
						</div>
					</div>
				</div>
			</SectionBox>
		</Section>
	);
};
export default LoginPage;
