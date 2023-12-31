import { Link } from 'react-router-dom';
import style from './Register.module.scss';
import LeftArrow from '../../assets/svg/LeftArrow';
import Button from '../../components/UI/Button/Button';
import Heading from '../../components/UI/Heading/Heading';
import Section from '../../components/UI/Section/Section';
import SectionBox from '../../components/UI/SectionBox/SectionBox';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../helpers/firebase-config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';
import Google from '../../assets/svg/Google';
import Apple from '../../assets/svg/Apple';
import { googleConnection } from '../../helpers/google-connection';
import { appleConnection } from '../../helpers/apple-connection';

const RegisterPage = () => {
	const user = useUser();

	const [email, setEmail] = useState(null);
	const [isEmailValid, setisEmailValid] = useState(false);
	const [isEmailTouched, setIsEmailTouched] = useState(false);
	const [error, setError] = useState(false);
	const [password, setPassword] = useState(null);
	const [isPasswordValid, setIsPasswordValid] = useState(false);
	const [isPasswordTouched, setIsPasswordTouched] = useState(false);

	const [isSecondPasswordValid, setIsSecondPasswordValid] = useState(false);

	const navigate = useNavigate();

	if (user) {
		return <p>Logout to see this page.</p>;
	}

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

	const checkIsSecondPasswordMatch = (secondPassword) => {
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
			navigate('/');
		} catch (err) {
			setError(true);
		}
	};

	const handleRegisterByGoogle = async () => {
		const connection = await googleConnection();
		if (connection) {
			navigate('/');
		}
	};
	const handleRegisterByApple = async () => {
		const connection = await appleConnection();
		if (connection) {
			navigate('/');
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
					<Heading>Register</Heading>
					{error && (
						<p style={{ color: 'tomato', fontSize: '1.4rem' }}>
							This user already exist!
						</p>
					)}
					<form className={style.form} onSubmit={handleRegister}>
						<div className={style.inputs}>
							<div className={style['input-box']}>
								<label htmlFor='email'>
									{!isEmailValid && isEmailTouched && (
										<p style={{ color: 'tomato' }}>Email is not valid</p>
									)}
									{isEmailTouched && isEmailValid && 'Email'}
									{!isEmailTouched && !isEmailValid && 'Email'}
								</label>
								<input
									type='email'
									id='email'
									placeholder='Enter your Email'
									onChange={(e) => {
										setEmail(e.target.value);
										checkIsEmailValid();
									}}
									onFocus={checkIsEmailTouched}
									onBlur={checkIsEmailValid}
								/>
							</div>
							<div className={style['input-box']}>
								<label htmlFor='password'>
									{!isPasswordValid && isPasswordTouched && (
										<p style={{ color: 'tomato' }}>
											Password requires (9 chars, 1 capital letter, 1 number)
										</p>
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
										checkIsSecondPasswordMatch(e.target.value);
									}}
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
								<div className={style['btns-ctn']}>
									<Google />
									<span>Register With Google</span>
								</div>
							</Button>
							<Button type={'secondary'} onClick={handleRegisterByApple}>
								<div className={style['btns-ctn']}>
									<Apple />
									<span>Register With Apple</span>
								</div>
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
