import { useQuery } from "@apollo/client";
import { getApp } from "firebase/app";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import { LOGIN } from "../../../graphql/queries";

export const loginEmailRequest = async (email, password) => {
  const app = getApp();
  const auth = getAuth(app);

  try {
    await signInWithEmailAndPassword(auth, email, password);
    const idToken = await auth.currentUser.getIdToken();
    const { data, error } = useQuery(LOGIN, {
      variables: {
        firebaseId: idToken,
      },
    });

    if (error) {
      throw new Error(error);
    }
    return data;
  } catch (e) {
    throw new Error(e.toString());
  }
};

export const createEmailRequest = async (email, password) => {
  const app = getApp();
  const auth = getAuth(app);
  try {
    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    return newUser;
  } catch (e) {
    throw new Error(e.toString());
  }
};
