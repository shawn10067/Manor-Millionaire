import uuid from "react-native-uuid";

export const defaultProperty = {
  country: "Spain",
  address: "17 Spring Dr",
  image: "../../../../assets/castle.jpg",
  price: 24000000,
  income: {
    alone: 4000000,
    set: 6000000,
    tier1: 12000000,
    tier2: 36000000,
  },
  propertyValue: 10000000,
  cost: {
    tier1Cost: 15000000,
    tier2Cost: 30000000,
  },
};

// alone / = 6
// set / = 4
// tier 1 = / 2
// tier 2 = * 1.5
// property value = / 2.4
// tier 1 = / 1.6
// tier 2 = * 1.25

export const properties = () => {
  return [
    {
      country: "Spain",
      address: "Sección Elvira",
      image: "../assets/castle.jpg",
      price: 64000000,
      income: {
        alone: 11000000,
        set: 16000000,
        tier1: 32000000,
        tier2: 96000000,
      },
      propertyValue: 27000000,
      cost: {
        tier1Cost: 40000000,
        tier2Cost: 80000000,
      },
    },
    {
      country: "Spain",
      address: "Paseo Barbara",
      image: "../assets/castle.jpg",
      price: 16000000,
      income: { alone: 2700000, set: 4000000, tier1: 8000000, tier2: 24000000 },
      propertyValue: 6700000,
      cost: {
        tier1Cost: 10000000,
        tier2Cost: 20000000,
      },
    },
    {
      country: "France",
      address: "Boulevard Delesseux",
      image: "../assets/castle.jpg",
      price: 40000000,
      income: {
        alone: 6700000,
        set: 10000000,
        tier1: 20000000,
        tier2: 60000000,
      },
      propertyValue: 17000000,
      cost: { tier1Cost: 25000000, tier2Cost: 50000000 },
    },
    {
      country: "Spain",
      address: "Travesía Rosario",
      image: "../assets/castle.jpg",
      price: 50000000,
      income: {
        alone: 8300000,
        set: 13000000,
        tier1: 25000000,
        tier2: 75000000,
      },
      propertyValue: 21000000,
      cost: { tier1Cost: 31000000, tier2Cost: 63000000 },
    },
    {
      country: "Switzerland",
      address: "Rue de la Creuse",
      image: "../assets/castle.jpg",
      price: 28000000,
      income: {
        alone: 4700000,
        set: 7000000,
        tier1: 14000000,
        tier2: 42000000,
      },
      propertyValue: 12000000,
      cost: { tier1Cost: 18000000, tier2Cost: 35000000 },
    },
    {
      country: "Italy",
      address: "Contrada Evola",
      image: "../assets/castle.jpg",
      price: 29000000,
      income: {
        alone: 4800000,
        set: 7300000,
        tier1: 15000000,
        tier2: 44000000,
      },
      propertyValue: 12000000,
      cost: { tier1Cost: 18000000, tier2Cost: 36000000 },
    },
    {
      country: "Switzerland",
      address: "Rue des Gentianes",
      image: "../assets/castle.jpg",
      price: 17000000,
      income: { alone: 2800000, set: 4300000, tier1: 8500000, tier2: 26000000 },
      propertyValue: 7100000,
      cost: { tier1Cost: 11000000, tier2Cost: 21000000 },
    },
    {
      country: "Canada",
      address: "Camille Drive",
      image: "../assets/castle.jpg",
      price: 9700000,
      income: { alone: 1600000, set: 2400000, tier1: 4900000, tier2: 15000000 },
      propertyValue: 4000000,
      cost: { tier1Cost: 6100000, tier2Cost: 12000000 },
    },
    {
      country: "USA",
      address: "Rolfson Crescent",
      image: "../assets/castle.jpg",
      price: 23000000,
      income: {
        alone: 3800000,
        set: 5800000,
        tier1: 12000000,
        tier2: 35000000,
      },
      propertyValue: 9600000,
      cost: { tier1Cost: 14000000, tier2Cost: 29000000 },
    },
    {
      country: "Canada",
      address: "Stanton Street",
      image: "../assets/castle.jpg",
      price: 29000000,
      income: {
        alone: 4800000,
        set: 7300000,
        tier1: 15000000,
        tier2: 44000000,
      },
      propertyValue: 12000000,
      cost: { tier1Cost: 18000000, tier2Cost: 36000000 },
    },
  ].map((val) => {
    val.id = uuid.v4();
    return val;
  });
};

export const organizeProperties = (inputProperties) => {
  return inputProperties
    .reduce((countryPropertiesArray, currentProperty) => {
      const hasCountryIndex = countryPropertiesArray.findIndex(
        (countryProperty) => countryProperty.country === currentProperty.country
      );

      if (hasCountryIndex !== -1) {
        const newCountryProperties = countryPropertiesArray;
        newCountryProperties[hasCountryIndex].properties = [
          ...newCountryProperties[hasCountryIndex].properties,
          currentProperty,
        ];
        return newCountryProperties;
      } else {
        // uuid is there for temp flatlist purposes
        // TODO: remove uuid in favour of db id for actual data fetching
        return [
          ...countryPropertiesArray,
          {
            country: currentProperty.country,
            properties: [currentProperty],
            id: uuid.v4(),
          },
        ];
      }
    }, [])
    .sort((a, b) => a.country.length > b.country.length);
};
