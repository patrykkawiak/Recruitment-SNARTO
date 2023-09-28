import { useState } from 'react';

const Notification = ({ status }) => {
	const [message, setMessage] = useState('');

	if (status === 'error') {
		setMessage('register error');
	}

	if (status === 'login-error') {
		setMessage('invalid email or password');
	}
	return (
		<div>
			<p>{message}</p>
		</div>
	);
};

export default Notification;
