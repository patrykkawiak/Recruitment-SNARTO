import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { OAuthProvider } from 'firebase/auth';
const firebaseConfig = {
	// apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	// authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	// projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	// storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	// messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	// appId: import.meta.env.VITE_FIREBASE_APP_ID,
	apiKey: 'AIzaSyD34DOyZJwdmvBz9NiTV3kARmlZoYwCCaE',
	authDomain: 'snarto-bf3e3.firebaseapp.com',
	databaseURL:
		'https://snarto-bf3e3-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'snarto-bf3e3',
	storageBucket: 'snarto-bf3e3.appspot.com',
	messagingSenderId: '869147189936',
	appId: '1:869147189936:web:858d9e8addc9c2f1ac5175',
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
export const appleProvider = new OAuthProvider('apple.com');
