import { Image } from "react-native";

const RarityImage = ({ rarity, ...props }) => {
  console.log("rarity", rarity);

  switch (rarity) {
    case "common":
      return (
        <Image
          source={require("../../assets/rarity/yellow-gem.png")}
          {...props}
        />
      );
    case "uncommon":
      return (
        <Image
          source={require("../../assets/rarity/pink-gem.png")}
          {...props}
        />
      );
    case "rare":
      return (
        <Image
          source={require("../../assets/rarity/green-gem.png")}
          {...props}
        />
      );
    case "ultraRare":
      return (
        <Image
          source={require("../../assets/rarity/blue-gem.png")}
          {...props}
        />
      );
    default:
      return (
        <Image
          source={require("../../assets/rarity/yellow-gem.png")}
          {...props}
        />
      );
  }
};

export default RarityImage;
