// extract array helper method
const extractArray = (val) => (val.length != 0 ? val : null);

export const createErrorObject = (inputError) => {
  const error =
    (inputError.graphQLErrors && extractArray(inputError.graphQLErrors)) ||
    (inputError.clientErrors && extractArray(inputError.clientErrors)) ||
    (inputError.networkError && extractArray(inputError.networkError));
  const result = error && error.result;
  const resultError = (result && result.errors && result.errors[0]) || error;
  const message = resultError && resultError.message;
  return {
    message,
  };
};
