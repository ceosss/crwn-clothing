export const getSpecificCat = (allCat, catToFind) => {
  return allCat[catToFind];
};

export const inArrayFormat = (collections) =>
  Object.keys(collections).map((key) => collections[key]);
