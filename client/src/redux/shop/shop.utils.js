export const getSpecificCat = (allCat, catToFind) => {
  return allCat ? allCat[catToFind] : null; 
};

export const inArrayFormat = (collections) =>
  collections ? Object.keys(collections).map((key) => collections[key]) : null;
