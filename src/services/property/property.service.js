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
      country: "Germany",
      address: "Blankenburg",
      image: "../assets/castle.jpg",
      price: 6300000,
      income: { alone: 1100000, set: 1600000, tier1: 3200000, tier2: 9500000 },
      propertyValue: 2600000,
      cost: { tier1Cost: 3900000, tier2Cost: 7900000 },
      status: "set",
    },
    {
      country: "Germany",
      address: "Karl-König-Str.",
      image: "../assets/castle.jpg",
      price: 30000000,
      income: {
        alone: 5000000,
        set: 7500000,
        tier1: 15000000,
        tier2: 45000000,
      },
      propertyValue: 13000000,
      cost: { tier1Cost: 19000000, tier2Cost: 38000000 },
      status: "tier1",
    },
    {
      country: "Switzerland",
      address: "Avenue du Pensionnat",
      image: "../assets/castle.jpg",
      price: 13000000,
      income: { alone: 2200000, set: 3300000, tier1: 6500000, tier2: 20000000 },
      propertyValue: 5400000,
      cost: { tier1Cost: 8100000, tier2Cost: 16000000 },
      status: "tier1",
    },
    {
      country: "Switzerland",
      address: "Chemin des Champs",
      image: "../assets/castle.jpg",
      price: 17000000,
      income: { alone: 2800000, set: 4300000, tier1: 8500000, tier2: 26000000 },
      propertyValue: 7100000,
      cost: { tier1Cost: 11000000, tier2Cost: 21000000 },
      status: "set",
    },
    {
      country: "Spain",
      address: "Explanada Sofía",
      image: "../assets/castle.jpg",
      price: 32000000,
      income: {
        alone: 5300000,
        set: 8000000,
        tier1: 16000000,
        tier2: 48000000,
      },
      propertyValue: 13000000,
      cost: { tier1Cost: 20000000, tier2Cost: 40000000 },
      status: "alone",
    },
    {
      country: "Germany",
      address: "Im Ziegelfeld",
      image: "../assets/castle.jpg",
      price: 14000000,
      income: { alone: 2300000, set: 3500000, tier1: 7000000, tier2: 21000000 },
      propertyValue: 5800000,
      cost: { tier1Cost: 8800000, tier2Cost: 18000000 },
      status: "set",
    },
    {
      country: "USA",
      address: "Maurine Key",
      image: "../assets/castle.jpg",
      price: 57000000,
      income: {
        alone: 9500000,
        set: 14000000,
        tier1: 29000000,
        tier2: 86000000,
      },
      propertyValue: 24000000,
      cost: { tier1Cost: 36000000, tier2Cost: 71000000 },
      status: "alone",
    },
    {
      country: "Australia",
      address: "Turcotte Mews",
      image: "../assets/castle.jpg",
      price: 8300000,
      income: { alone: 1400000, set: 2100000, tier1: 4200000, tier2: 12000000 },
      propertyValue: 3500000,
      cost: { tier1Cost: 5200000, tier2Cost: 10000000 },
      status: "alone",
    },
    {
      country: "Australia",
      address: "Sauer Way",
      image: "../assets/castle.jpg",
      price: 7200000,
      income: { alone: 1200000, set: 1800000, tier1: 3600000, tier2: 11000000 },
      propertyValue: 3000000,
      cost: { tier1Cost: 4500000, tier2Cost: 9000000 },
      status: "set",
    },
    {
      country: "Australia",
      address: "Skye Road",
      image: "../assets/castle.jpg",
      price: 69000000,
      income: {
        alone: 12000000,
        set: 17000000,
        tier1: 35000000,
        tier2: 100000000,
      },
      propertyValue: 29000000,
      cost: { tier1Cost: 43000000, tier2Cost: 86000000 },
      status: "tier1",
    },
    {
      country: "Australia",
      address: "Mueller Estate Dr",
      image: "../assets/castle.jpg",
      price: 52000000,
      income: {
        alone: 8700000,
        set: 13000000,
        tier1: 26000000,
        tier2: 78000000,
      },
      propertyValue: 22000000,
      cost: { tier1Cost: 33000000, tier2Cost: 65000000 },
      status: "alone",
    },
    {
      country: "Switzerland",
      address: "Route des Charmilles",
      image: "../assets/castle.jpg",
      price: 140000000,
      income: {
        alone: 23000000,
        set: 35000000,
        tier1: 70000000,
        tier2: 210000000,
      },
      propertyValue: 58000000,
      cost: { tier1Cost: 88000000, tier2Cost: 180000000 },
      status: "tier2",
    },
    {
      country: "France",
      address: "Avenue d'Abbeville",
      image: "../assets/castle.jpg",
      price: 24000000,
      income: {
        alone: 4000000,
        set: 6000000,
        tier1: 12000000,
        tier2: 36000000,
      },
      propertyValue: 10000000,
      cost: { tier1Cost: 15000000, tier2Cost: 30000000 },
      status: "tier2",
    },
    {
      country: "Germany",
      address: "Felderstr.",
      image: "../assets/castle.jpg",
      price: 21000000,
      income: {
        alone: 3500000,
        set: 5300000,
        tier1: 11000000,
        tier2: 32000000,
      },
      propertyValue: 8800000,
      cost: { tier1Cost: 13000000, tier2Cost: 26000000 },
      status: "tier2",
    },
    {
      country: "USA",
      address: "Nicolas Key",
      image: "../assets/castle.jpg",
      price: 70000000,
      income: {
        alone: 12000000,
        set: 18000000,
        tier1: 35000000,
        tier2: 110000000,
      },
      propertyValue: 29000000,
      cost: { tier1Cost: 44000000, tier2Cost: 88000000 },
      status: "set",
    },
    {
      country: "Germany",
      address: "Grüner Weg",
      image: "../assets/castle.jpg",
      price: 30000000,
      income: {
        alone: 5000000,
        set: 7500000,
        tier1: 15000000,
        tier2: 45000000,
      },
      propertyValue: 13000000,
      cost: { tier1Cost: 19000000, tier2Cost: 38000000 },
      status: "set",
    },
    {
      country: "Germany",
      address: "Am Kemperstiegel",
      image: "../assets/castle.jpg",
      price: 18000000,
      income: { alone: 3000000, set: 4500000, tier1: 9000000, tier2: 27000000 },
      propertyValue: 7500000,
      cost: { tier1Cost: 11000000, tier2Cost: 23000000 },
      status: "alone",
    },
    {
      country: "France",
      address: "Rue de Caumartin",
      image: "../assets/castle.jpg",
      price: 39000000,
      income: {
        alone: 6500000,
        set: 9800000,
        tier1: 20000000,
        tier2: 59000000,
      },
      propertyValue: 16000000,
      cost: { tier1Cost: 24000000, tier2Cost: 49000000 },
      status: "alone",
    },
    {
      country: "France",
      address: "Passage La Boétie",
      image: "../assets/castle.jpg",
      price: 25000000,
      income: {
        alone: 4200000,
        set: 6300000,
        tier1: 13000000,
        tier2: 38000000,
      },
      propertyValue: 10000000,
      cost: { tier1Cost: 16000000, tier2Cost: 31000000 },
      status: "alone",
    },
    {
      country: "Spain",
      address: "Conjunto Rosalia",
      image: "../assets/castle.jpg",
      price: 25000000,
      income: {
        alone: 4200000,
        set: 6300000,
        tier1: 13000000,
        tier2: 38000000,
      },
      propertyValue: 10000000,
      cost: { tier1Cost: 16000000, tier2Cost: 31000000 },
      status: "tier2",
    },
    {
      country: "Switzerland",
      address: "Rue Ferdinand-Gonseth",
      image: "../assets/castle.jpg",
      price: 17000000,
      income: { alone: 2800000, set: 4300000, tier1: 8500000, tier2: 26000000 },
      propertyValue: 7100000,
      cost: { tier1Cost: 11000000, tier2Cost: 21000000 },
      status: "tier1",
    },
    {
      country: "Germany",
      address: "Otto-Stange-Str.",
      image: "../assets/castle.jpg",
      price: 7900000,
      income: { alone: 1300000, set: 2000000, tier1: 4000000, tier2: 12000000 },
      propertyValue: 3300000,
      cost: { tier1Cost: 4900000, tier2Cost: 9900000 },
      status: "tier1",
    },
    {
      country: "Canada",
      address: "Effertz Tunnel",
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
      status: "set",
    },
    {
      country: "Spain",
      address: "Municipio Gregorio",
      image: "../assets/castle.jpg",
      price: 30000000,
      income: {
        alone: 5000000,
        set: 7500000,
        tier1: 15000000,
        tier2: 45000000,
      },
      propertyValue: 13000000,
      cost: { tier1Cost: 19000000, tier2Cost: 38000000 },
      status: "tier2",
    },
    {
      country: "Italy",
      address: "Strada Rocco",
      image: "../assets/castle.jpg",
      price: 110000000,
      income: {
        alone: 18000000,
        set: 28000000,
        tier1: 55000000,
        tier2: 170000000,
      },
      propertyValue: 46000000,
      cost: { tier1Cost: 69000000, tier2Cost: 140000000 },
      status: "set",
    },
    {
      country: "USA",
      address: "Will Extension",
      image: "../assets/castle.jpg",
      price: 21000000,
      income: {
        alone: 3500000,
        set: 5300000,
        tier1: 11000000,
        tier2: 32000000,
      },
      propertyValue: 8800000,
      cost: { tier1Cost: 13000000, tier2Cost: 26000000 },
      status: "set",
    },
    {
      country: "Switzerland",
      address: "Rue de la Citerne",
      image: "../assets/castle.jpg",
      price: 33000000,
      income: {
        alone: 5500000,
        set: 8300000,
        tier1: 17000000,
        tier2: 50000000,
      },
      propertyValue: 14000000,
      cost: { tier1Cost: 21000000, tier2Cost: 41000000 },
      status: "alone",
    },
    {
      country: "France",
      address: "Avenue d'Assas",
      image: "../assets/castle.jpg",
      price: 120000000,
      income: {
        alone: 20000000,
        set: 30000000,
        tier1: 60000000,
        tier2: 180000000,
      },
      propertyValue: 50000000,
      cost: { tier1Cost: 75000000, tier2Cost: 150000000 },
      status: "set",
    },
    {
      country: "Spain",
      address: "Gran Subida Pablo",
      image: "../assets/castle.jpg",
      price: 20000000,
      income: {
        alone: 3300000,
        set: 5000000,
        tier1: 10000000,
        tier2: 30000000,
      },
      propertyValue: 8300000,
      cost: { tier1Cost: 13000000, tier2Cost: 25000000 },
      status: "tier2",
    },
    {
      country: "Germany",
      address: "Carl-Rumpff-Str.",
      image: "../assets/castle.jpg",
      price: 15000000,
      income: { alone: 2500000, set: 3800000, tier1: 7500000, tier2: 23000000 },
      propertyValue: 6300000,
      cost: { tier1Cost: 9400000, tier2Cost: 19000000 },
      status: "set",
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
