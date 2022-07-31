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
      country: "USA",
      address: "Oscar Spurs",
      image: "../../../../assets/castle.jpg",
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
      country: "France",
      address: "Avenue du Faubourg Saint-Honoré",
      image: "../../../../assets/castle.jpg",
      price: 38000000,
      income: {
        alone: 6300000,
        set: 9500000,
        tier1: 19000000,
        tier2: 57000000,
      },
      propertyValue: 16000000,
      cost: { tier1Cost: 24000000, tier2Cost: 48000000 },
    },
    {
      country: "USA",
      address: "Kavon Key",
      image: "../../../../assets/castle.jpg",
      price: 21000000,
      income: {
        alone: 3500000,
        set: 5300000,
        tier1: 11000000,
        tier2: 32000000,
      },
      propertyValue: 8800000,
      cost: { tier1Cost: 13000000, tier2Cost: 26000000 },
    },
    {
      country: "Canada",
      address: "Marisa Green",
      image: "../../../../assets/castle.jpg",
      price: 31000000,
      income: {
        alone: 5200000,
        set: 7800000,
        tier1: 16000000,
        tier2: 47000000,
      },
      propertyValue: 13000000,
      cost: { tier1Cost: 19000000, tier2Cost: 39000000 },
    },
    {
      country: "Germany",
      address: "Eschenweg",
      image: "../../../../assets/castle.jpg",
      price: 14000000,
      income: { alone: 2300000, set: 3500000, tier1: 7000000, tier2: 21000000 },
      propertyValue: 5800000,
      cost: { tier1Cost: 8800000, tier2Cost: 18000000 },
    },
    {
      country: "Germany",
      address: "Völklinger Str.",
      image: "../../../../assets/castle.jpg",
      price: 5800000,
      income: { alone: 970000, set: 1500000, tier1: 2900000, tier2: 8700000 },
      propertyValue: 2400000,
      cost: { tier1Cost: 3600000, tier2Cost: 7300000 },
    },
    {
      country: "Australia",
      address: "Jonathan Station St",
      image: "../../../../assets/castle.jpg",
      price: 34000000,
      income: {
        alone: 5700000,
        set: 8500000,
        tier1: 17000000,
        tier2: 51000000,
      },
      propertyValue: 14000000,
      cost: { tier1Cost: 21000000, tier2Cost: 43000000 },
    },
    {
      country: "France",
      address: "Impasse Zadkine",
      image: "../../../../assets/castle.jpg",
      price: 93000000,
      income: {
        alone: 16000000,
        set: 23000000,
        tier1: 47000000,
        tier2: 140000000,
      },
      propertyValue: 39000000,
      cost: { tier1Cost: 58000000, tier2Cost: 120000000 },
    },
    {
      country: "Australia",
      address: "Victoria Circuit",
      image: "../../../../assets/castle.jpg",
      price: 5700000,
      income: { alone: 950000, set: 1400000, tier1: 2900000, tier2: 8600000 },
      propertyValue: 2400000,
      cost: { tier1Cost: 3600000, tier2Cost: 7100000 },
    },
    {
      country: "USA",
      address: "Walker Station",
      image: "../../../../assets/castle.jpg",
      price: 22000000,
      income: {
        alone: 3700000,
        set: 5500000,
        tier1: 11000000,
        tier2: 33000000,
      },
      propertyValue: 9200000,
      cost: { tier1Cost: 14000000, tier2Cost: 28000000 },
    },
  ].map((val) => {
    val.id = uuid.v4();
    return val;
  });
};

export const organizeProperties = (inputProperties) => {
  return inputProperties.reduce((countryPropertiesArray, currentProperty) => {
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
  }, []);
};
