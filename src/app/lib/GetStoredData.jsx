const GetStoredData = (KeyName) => {
  const cart = localStorage.getItem(KeyName);
  return cart ? JSON.parse(cart) : [];
};

export default GetStoredData;
