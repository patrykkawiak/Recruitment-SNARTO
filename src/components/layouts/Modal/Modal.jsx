import Plus from '../../../assets/svg/Plus';
import RightArrow from '../../../assets/svg/RightArrow';
import Mark from '../../../assets/svg/Mark';
import { useUser } from '../../../hooks/useUser';
import style from './Modal.module.scss';
import { useRef, useState } from 'react';

const Modal = ({ closeModal, getData }) => {
	const user = useUser();
	const todoRef = useRef();
	const addNewTask = async () => {
		await fetch(
			'https://snarto-bf3e3-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
			{
				method: 'POST',
				body: JSON.stringify({
					uid: user,
					todo: todoRef.current.value,
					isDone: false,
				}),
				headers: { 'Content-Type': 'application/json' },
			}
		);
		getData();
		closeModal();
	};

	return (
		<div className={style.modal}>
			<div className={style.box}>
				<h2>Add Task</h2>
				<input
					type='text'
					placeholder='What are you going to do?'
					ref={todoRef}
				/>
				<div className={style.btns}>
					<button onClick={closeModal}>
						<Mark fill={'#8685E7'} />
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
