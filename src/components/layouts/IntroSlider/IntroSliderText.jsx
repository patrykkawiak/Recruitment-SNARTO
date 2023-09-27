import styles from './IntroSliderText.module.scss';

const IntroSliderText = ({ title, excerpt }) => {
	return (
		<div className={styles.text}>
			<h2>{title}</h2>
			<p>{excerpt}</p>
		</div>
	);
};

export default IntroSliderText;
