import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "./app";

const auth = getAuth(app);
const google = new GoogleAuthProvider();
export const PasswdSignUp = async (email: string, password: string) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCreds) => {
      const user = userCreds.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      alert(errorCode);
    });
  return null;
};

export const PasswdSignIn = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCreds) => {
      const user = userCreds.user;
      console.log(user);
      return user;
    })
    .catch((error) => {
      const code = error.code;
      alert(code);
    });
  return null;
};

export const SignOut = () => {
  signOut(auth)
    .then(() => {
      return true;
    })
    .catch((error) => {
      alert(error.message);
    });
  return false;
};

export const AuthByGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, google);
    return res.user;
  } catch (error) {
    console.log(error);
  }
  return null;
};
