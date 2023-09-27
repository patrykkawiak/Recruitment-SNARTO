import { Link } from 'react-router-dom/dist';
import FirstSliderImg from '../../../assets/img/intro/intro1.png';
import SecondSliderImg from '../../../assets/img/intro/intro2.png';

import styles from './IntroSlider.module.scss';
import IntroSliderText from './IntroSliderText';
import Button from '../../UI/Button/Button';
import PlainButton from '../../UI/PlainButton/PlainButton';
import IntroSliderDot from './IntroSliderDot';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SliderActions } from '../../../redux/slider-slice';
SliderActions;

const IntroSlider = () => {
	const index = useSelector((state) => state.slider.index);
	const dispatch = useDispatch();

	const prepareElements = () => {
		const box = document.querySelector(`.${styles['slider-container']}`);
		const viewPortWidth = window.innerWidth;
		return {
			box,
			viewPortWidth,
		};
	};

	const handleChangeImg = (index) => {
		const { box, viewPortWidth } = prepareElements();

		box.style.transform = `translateX(${-index * viewPortWidth}px)`;
	};

	useEffect(() => {
		handleChangeImg(index);
	}, []);

	const handleNextSlide = () => {
		dispatch(SliderActions.increaseIndex());
		handleChangeImg(index + 1);
	};
	const handlePrevSlide = () => {
		dispatch(SliderActions.decreaseIndex());
		handleChangeImg(index - 1);
	};

	return (
		<section className={`${styles.slider}`}>
			<div className={styles['slider-container']}>
				<div className={styles['slider-item']}>
					<div className={styles['slider-content']}>
						<Link to={'/start'} className={styles['slider-link']}>
							Skip
						</Link>
						<div className={styles['slider-ctn']}>
							<img
								src={FirstSliderImg}
								alt='image shows manage time and tasks'
							/>
							<div className={styles['slider-dots']}>
								<IntroSliderDot variant={'active'} />
								<IntroSliderDot variant={'deactive'} />
							</div>
						</div>
						<IntroSliderText
							title={'Manage your tasks'}
							excerpt={
								'You can easily manage all of your daily tasks in DoMe for free'
							}
						/>
						<div className={styles['slider-btns']}>
							<PlainButton disabled={true}>back</PlainButton>
							<Button type={'primary'} onClick={handleNextSlide}>
								next
							</Button>
						</div>
					</div>
				</div>
				<div className={styles['slider-item']}>
					<div className={styles['slider-content']}>
						<Link to={'/start'} className={styles['slider-link']}>
							Skip
						</Link>
						<div className={styles['slider-ctn']}>
							<img
								src={SecondSliderImg}
								alt='image shows calendar which symbols time managment'
							/>
							<div className={styles['slider-dots']}>
								<IntroSliderDot variant={'deactive'} />
								<IntroSliderDot variant={'active'} />
							</div>
						</div>
						<IntroSliderText
							title={'Create daily routine'}
							excerpt={
								'In Uptodo you can create your personalized routine to stay productive'
							}
						/>
						<div className={styles['slider-btns']}>
							<PlainButton onClick={handlePrevSlide}>back</PlainButton>
							<Button type={'primary'}>
								<Link to={'/start'}>Next</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default IntroSlider;
