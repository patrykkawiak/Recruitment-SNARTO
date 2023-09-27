import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
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
