import { getApp } from "firebase/app";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth";

export const loginEmailRequest = async (email, password) => {
  const app = getApp();
  const auth = getAuth(app);
  try {
    const newUser = await signInWithEmailAndPassword(auth, email, password);
    console.log("logged in with", newUser);
    return newUser;
  } catch (e) {
    throw new Error(e.toString());
  }
};

export const createEmailRequest = async (email, password) => {
  const app = getApp();
  const auth = getAuth(app);
  try {
    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    console.log("created user", newUser);
    return newUser;
  } catch (e) {
    throw new Error(e.toString());
  }
};
