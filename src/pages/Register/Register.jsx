import { Link } from 'react-router-dom';
import style from './Register.module.scss';
import LeftArrow from '../../assets/svg/LeftArrow';
import Button from '../../components/UI/Button/Button';
import Heading from '../../components/UI/Heading/Heading';
import Section from '../../components/UI/Section/Section';
import SectionBox from '../../components/UI/SectionBox/SectionBox';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { appleProvider, auth, provider } from '../../helpers/firebase-config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Notification from '../../components/UI/Notification/Notification';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const RegisterPage = () => {
	const [email, setEmail] = useState(null);
	const [isEmailValid, setisEmailValid] = useState(false);
	const [isEmailTouched, setIsEmailTouched] = useState(false);

	const [password, setPassword] = useState(null);
	const [isPasswordValid, setIsPasswordValid] = useState(false);
	const [isPasswordTouched, setIsPasswordTouched] = useState(false);

	const [secondPassword, setSecondPassword] = useState(null);
	const [isSecondPasswordValid, setIsSecondPasswordValid] = useState(false);

	const [status, setStatus] = useState(null);

	const navigate = useNavigate();

	const checkIsEmailValid = () => {
		const emailReg = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{1,5}$/;

		if (emailReg.test(email)) {
			setisEmailValid(true);
		} else {
			setisEmailValid(false);
		}
	};

	const checkIsEmailTouched = () => {
		setIsEmailTouched(true);
	};

	const checkIsPasswordValid = () => {
		const pswdReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
		if (pswdReg.test(password)) {
			setIsPasswordValid(true);
		} else {
			setIsPasswordValid(false);
		}
	};
	const checkIsPasswordTouched = () => {
		setIsPasswordTouched(true);
	};

	const checkIsSecondPasswordMatch = () => {
		if (secondPassword === password) {
			setIsSecondPasswordValid(true);
		} else {
			setIsSecondPasswordValid(false);
		}
	};

	const handleRegister = async (e) => {
		e.preventDefault();

		try {
			await createUserWithEmailAndPassword(auth, email, password);
			setStatus('success');
		} catch (err) {
			setStatus('error');
			return;
		}
		setTimeout(() => {
			navigate('/login');
		}, 500);
	};

	const handleRegisterByGoogle = async () => {
		try {
			await signInWithPopup(auth, provider);
			setStatus('succes');
		} catch {
			setStatus('error');
			return;
		}
		setTimeout(() => {
			navigate('/');
		}, 500);
	};
	const handleRegisterByApple = async () => {
		try {
			await signInWithPopup(auth, appleProvider);
			setStatus('succes');
		} catch {
			setStatus('error');
			return;
		}
		setTimeout(() => {
			navigate('/');
		}, 500);
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
					<Heading>Register</Heading>
					<form className={style.form} onSubmit={handleRegister}>
						<div className={style.inputs}>
							<div className={style['input-box']}>
								<label htmlFor='username'>
									{!isEmailValid && isEmailTouched && (
										<p style={{ color: 'tomato' }}>Email is not Valid</p>
									)}
									{isEmailTouched && isEmailValid && 'Email'}
									{!isEmailTouched && !isEmailValid && 'Email'}
								</label>
								<input
									type='text'
									id='username'
									placeholder='Enter your Username'
									onChange={(e) => {
										setEmail(e.target.value);
										checkIsEmailValid();
									}}
									onFocus={checkIsEmailTouched}
								/>
							</div>
							<div className={style['input-box']}>
								<label htmlFor='password'>
									{!isPasswordValid && isPasswordTouched && (
										<p style={{ color: 'tomato' }}>Password is not Valid</p>
									)}
									{isPasswordTouched && isPasswordValid && 'Password'}
									{!isPasswordTouched && !isPasswordValid && 'Password'}
								</label>
								<input
									type='password'
									id='password'
									placeholder='••••••••••••'
									onChange={(e) => {
										setPassword(e.target.value);
										checkIsPasswordValid();
									}}
									onFocus={checkIsPasswordTouched}
								/>
							</div>
							<div className={style['input-box']}>
								<label htmlFor='confirm'>Confirm Password</label>
								<input
									type='password'
									id='confirm'
									placeholder='••••••••••••'
									onChange={(e) => {
										setSecondPassword(e.target.value);
									}}
									onBlur={checkIsSecondPasswordMatch}
								/>
							</div>
						</div>
						<Button
							type={'primary'}
							disabled={
								isEmailValid && isPasswordValid && isSecondPasswordValid
									? false
									: true
							}
						>
							Register
						</Button>
					</form>
					<div className={style.or}>
						<div className={style.breaker}>
							<p>or</p>
						</div>
						<div className={style.btns}>
							<Button type={'secondary'} onClick={handleRegisterByGoogle}>
								Register With Google
							</Button>
							<Button type={'secondary'} onClick={handleRegisterByApple}>
								Register With Apple
							</Button>
							<p>
								Already have an account<Link to={'/login'}>Login</Link>
							</p>
						</div>
					</div>
				</div>
			</SectionBox>
		</Section>
	);
};
export default RegisterPage;
