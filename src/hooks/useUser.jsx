import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../helpers/firebase-config';
import { useState, useEffect } from 'react';

export const useUser = () => {
	const [user, setUser] = useState(null);
	useEffect(() => {
		const listen = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user.uid);
			} else {
				setUser(null);
			}
		});

		return () => {
			listen();
		};
	}, [user]);
	return user;
};
