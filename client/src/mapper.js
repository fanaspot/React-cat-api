export const mapCategories = (categories) => {
  return categories.map((item) => {
    return {
      value: item.id,
      label: item.name,
    };
  });
};

export const mapBreeds = (breeds) => {
  return breeds.map((item, index) => {
    return {
      key: index + 1,
      id: item.id,
      name: item.name,
      wikipedia_url: item.wikipedia_url,
      temperament: item.temperament,
    };
  });
};
