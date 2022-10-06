export const countryProperties = {
  spain: {
    emoji: "🇪🇸",
    borderColour: "#FFBB00",
    headerImage: "https://media.timeout.com/images/105299605/750/422/image.jpg",
  },
  canada: {
    emoji: "🇨🇦",
    borderColour: "#FE0000",
    headerImage:
      "https://mediaim.expedia.com/destination/7/3224f0c851f315db5f5d3d377f63a537.jpg",
  },
  france: {
    emoji: "🇫🇷",
    borderColour: "#001E96",
    headerImage:
      "https://www.expatica.com/app/uploads/sites/5/2014/05/france-1920x1080.jpg",
  },
  switzerland: {
    emoji: "🇨🇭",
    borderColour: "#FF0000",
    headerImage:
      "https://www.expatica.com/app/uploads/sites/9/2017/07/cost-of-living-thun.jpg",
  },
  italy: {
    emoji: "🇮🇹",
    borderColour: "#009246",
    headerImage:
      "https://cdn.britannica.com/82/195482-050-2373E635/Amalfi-Italy.jpg",
  },
  usa: {
    emoji: "🇺🇸",
    borderColour: "#EBC4C9",
    headerImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-688899881-1519413300.jpg",
  },
  australia: {
    emoji: "🇦🇺",
    borderColour: "#7E8EB3",
    headerImage:
      "https://www.cunard.com/content/dam/cunard/inventory-assets/ports/SYD/yqy.jpg",
  },
  germany: {
    emoji: "🇩🇪",
    borderColour: "#8A0000",
    headerImage:
      "https://www.expatica.com/app/uploads/sites/6/2016/10/living-in-germany.jpg",
  },
};

export const getCountryProperties = (country) => {
  return countryProperties[country.toLowerCase()];
};
