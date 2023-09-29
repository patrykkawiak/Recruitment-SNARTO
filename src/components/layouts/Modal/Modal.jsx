import Plus from '../../../assets/svg/Plus';
import RightArrow from '../../../assets/svg/RightArrow';
import Mark from '../../../assets/svg/Mark';
import { useUser } from '../../../hooks/useUser';
import style from './Modal.module.scss';
import { useState } from 'react';

const Modal = ({ closeModal }) => {
	const user = useUser();
	const [todo, setTodo] = useState(null);

	const addNewTask = async () => {
		await fetch(
			'https://snarto-bf3e3-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
			{
				method: 'POST',
				body: JSON.stringify({ uid: user, todo, isDone: false }),
				'Content-Type': 'application/json',
			}
		);
		closeModal();
	};

	return (
		<div className={style.modal}>
			<div className={style.box}>
				<h2>Add Task</h2>
				<input
					type='text'
					placeholder='What are you going to do?'
					onChange={(e) => {
						setTodo(e.target.value);
					}}
				/>
				<div className={style.btns}>
					<button onClick={closeModal}>
						<Mark />
					</button>
					<button onClick={addNewTask}>
						<RightArrow />
					</button>
				</div>
			</div>
		</div>
	);
};
export default Modal;
