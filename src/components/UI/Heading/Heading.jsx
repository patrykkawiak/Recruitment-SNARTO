import style from './Heading.module.scss';
const Heading = ({ children }) => {
	return <h1 className={style.heading}>{children}</h1>;
};

export default Heading;
