const mapProperties = (properties) => {
  return properties.map((val) => {
    return {
      ...val.property,
      id: val.id,
      status: val.status,
    };
  });
};

export default mapProperties;
