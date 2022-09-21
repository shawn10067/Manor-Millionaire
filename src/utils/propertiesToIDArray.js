const propertiesToIDArray = (properties) => {
  if (properties.length === 0) {
    return [];
  }
  return properties.map((val) => parseInt(val.id));
};

export default propertiesToIDArray;
