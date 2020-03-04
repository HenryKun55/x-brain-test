export const setStorage = (key: string, value: object) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorage = (key: string) => {
  const value = localStorage.getItem(key);
  return value && JSON.parse(value);
};


export const removeStorage = (key: string) => {
  localStorage.removeItem(key);
  return true;
};
