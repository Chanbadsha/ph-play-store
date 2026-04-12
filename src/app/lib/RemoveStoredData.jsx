import GetStoredData from "./GetStoredData";
import saveDataToLS from "./saveDataToLS";

const RemoveStoredData = (KeyName, appId) => {
  const data = GetStoredData(KeyName);
  const filterData = data.filter((da) => da.id != appId);
  saveDataToLS(KeyName, filterData);
  return filterData;
};

export default RemoveStoredData;
