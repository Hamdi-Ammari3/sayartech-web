import { getFirestore, doc, getDoc } from 'firebase/firestore';

export const authLogin = async (username, password) => {
  const db = getFirestore();
  const userRef = doc(db, 'admin', username);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists() && userSnap.data().password === password) {
    return userSnap.data(); // Return user data if credentials are correct
  } else {
    throw new Error('Invalid credentials');
  }
};
