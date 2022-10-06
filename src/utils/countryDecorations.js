export const countryProperties = {
  spain: {
    emoji: "🇪🇸",
    borderColour: "#FFBB00",
    headerImage: "https://media.timeout.com/images/105299605/750/422/image.jpg",
    coordinates: {
      latitude: 40,
      longitude: -4,
    },
  },
  canada: {
    emoji: "🇨🇦",
    borderColour: "#FE0000",
    headerImage:
      "https://mediaim.expedia.com/destination/7/3224f0c851f315db5f5d3d377f63a537.jpg",
    coordinates: {
      latitude: 60,
      longitude: -95,
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
    },
  },
};

export const getCountryProperties = (country) => {
  return countryProperties[country.toLowerCase()];
};
