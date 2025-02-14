

export const getItemFromSessionStorage = (label: string) => {
  const storedToken = sessionStorage.getItem(label);
  if (Boolean(storedToken) === false) {
    return undefined;
  }

  // const token = decrypt(storedToken);
  const token = storedToken;
  return token;
};