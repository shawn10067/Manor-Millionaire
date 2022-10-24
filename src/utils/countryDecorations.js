export const countryProperties = {
  spain: {
    emoji: "🇪🇸",
    borderColour: "#FFBB00",
    headerImage: "https://media.timeout.com/images/105299605/750/422/image.jpg",
    coordinates: {
      latitude: 40,
      longitude: -4,
      latitudeDelta: 19.645947594652817,
      longitudeDelta: 12.883136987394181,
    },
  },
  canada: {
    emoji: "🇨🇦",
    borderColour: "#FE0000",
    headerImage:
      "https://mediaim.expedia.com/destination/7/3224f0c851f315db5f5d3d377f63a537.jpg",
    coordinates: {
      latitude: 40,
      longitude: -95,
      latitudeDelta: 72.5084333150806,
      longitudeDelta: 65.57004543582211,
    },
  },
  france: {
    emoji: "🇫🇷",
    borderColour: "#001E96",
    headerImage:
      "https://www.expatica.com/app/uploads/sites/5/2014/05/france-1920x1080.jpg",
    coordinates: {
      latitude: 42,
      longitude: 2,
      latitudeDelta: 21.064859405905686,
      longitudeDelta: 15.047326504785673,
    },
  },
  switzerland: {
    emoji: "🇨🇭",
    borderColour: "#FF0000",
    headerImage:
      "https://www.expatica.com/app/uploads/sites/9/2017/07/cost-of-living-thun.jpg",
    coordinates: {
      latitude: 47,
      longitude: 8,
      latitudeDelta: 7.809750001074285,
      longitudeDelta: 5.7734484024101675,
    },
  },
  italy: {
    emoji: "🇮🇹",
    borderColour: "#009246",
    headerImage:
      "https://cdn.britannica.com/82/195482-050-2373E635/Amalfi-Italy.jpg",
    coordinates: {
      latitude: 42.8333,
      longitude: 12.8333,
      latitudeDelta: 21.792062956511828,
      longitudeDelta: 14.68179847103417,
    },
  },
  usa: {
    emoji: "🇺🇸",
    borderColour: "#EBC4C9",
    headerImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-688899881-1519413300.jpg",
    coordinates: {
      latitude: 38,
      longitude: -97,
      latitudeDelta: 67.38074554774582,
      longitudeDelta: 43.09117164358568,
    },
  },
  australia: {
    emoji: "🇦🇺",
    borderColour: "#7E8EB3",
    headerImage:
      "https://www.cunard.com/content/dam/cunard/inventory-assets/ports/SYD/yqy.jpg",
    coordinates: {
      latitude: -27,
      longitude: 133,
      latitudeDelta: 60.742242639966506,
      longitudeDelta: 36.526005189352475,
    },
  },
  germany: {
    emoji: "🇩🇪",
    borderColour: "#8A0000",
    headerImage:
      "https://www.expatica.com/app/uploads/sites/6/2016/10/living-in-germany.jpg",
    coordinates: {
      latitude: 51,
      longitude: 9,
      latitudeDelta: 15.991937534785798,
      longitudeDelta: 12.44785966204094,
    },
  },
};

export const getCountryProperties = (country) => {
  return countryProperties[country.toLowerCase()];
};
