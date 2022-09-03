import * as SecureStore from "expo-secure-store";

export const saveToken = async (token) => {
  await SecureStore.setItemAsync("manor-millionaire-user-token", token);
};

export const getToken = async () => {
  return await SecureStore.getItemAsync("manor-millionaire-user-token");
};
