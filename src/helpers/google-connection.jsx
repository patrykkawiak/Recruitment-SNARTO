import { auth } from './firebase-config';
import { provider } from './firebase-config';
import { signInWithPopup } from 'firebase/auth';

export const googleConnection = async () => {
	try {
		await signInWithPopup(auth, provider);
		return true;
	} catch {
		return false;
	}
};
