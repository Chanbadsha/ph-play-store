const saveDataToLS = (KeyName, value) => {
  localStorage.setItem(KeyName, JSON.stringify(value));
};

export default saveDataToLS;
