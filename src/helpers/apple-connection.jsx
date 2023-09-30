import { auth } from './firebase-config';
import { appleProvider } from './firebase-config';
import { signInWithPopup } from 'firebase/auth';

export const appleConnection = async () => {
	try {
		await signInWithPopup(auth, appleProvider);
		return true;
	} catch {
		return false;
	}
};
