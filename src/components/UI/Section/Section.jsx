import style from './Section.module.scss';

const Section = ({ children, isMax }) => {
	return (
		<section
			className={`${style.section} ${isMax && style.max} section-padding`}
		>
			{children}
		</section>
	);
};
export default Section;
