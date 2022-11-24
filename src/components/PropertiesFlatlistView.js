import React, { useEffect, useState } from "react";
import {
  CountryHeaderText,
  PropertiesView,
  PropertyItemImage,
  PropertyItemPressable,
  PropertyItemText,
  PropertyItemTintForeground,
  PropertyItemView,
} from "../features/home/components/view-properties.screen.styles";
import {
  Dimensions,
  FlatList,
  Pressable,
  useWindowDimensions,
  View,
} from "react-native";
import { getCountryProperties } from "../utils/countryDecorations";
import { organizeProperties } from "../services/property/property.service";
import { CenterView } from "../features/home/components/home.screen.styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import theme from "../infrastructure/theme";
import Carousel from "pinar";
import styled from "styled-components/native";
import CustomLinearGradient from "./gradient/CustomLinearGradient";
import { gradientRartiyMaps } from "../utils/colorRarityMap";
import Animated from "react-native-reanimated";
import BlurBlackViewComponent from "./BlurBlackViewComponent";
import BackArrowPressable, { FrontArrowPressable } from "./BackArrow";
import { FlashList } from "@shopify/flash-list";

const BlurNavBar = styled(BlurBlackViewComponent).attrs({
  animate: true,
})`
  width: 100%;
  height: 15.5%;
  position: absolute;
  bottom: 0px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const MainContentBlur = styled(BlurBlackViewComponent).attrs({
  animate: false,
})`
  width: 100%;
  flex: 1;
  border-radius: 20px;
`;

const MainContentView = styled.View`
  width: 100%;
  height: 75%;
  position: absolute;
  top: 50px;
  border-radius: 20px;
  margin-left: 10px;
  margin-right: 10px;
  overflow: hidden;
`;

const NavBarRowView = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
`;

const PropertiesFlatlist = ({
  navigation,
  properties,
  addType = "none",
  bankrupt = false,
}) => {
  const { width } = Dimensions.get("window");

  // if there are no properties, return the no properties view
  if (!properties || properties.length === 0) {
    if (addType === "me") {
      navigation.navigate("Their Trade Cash");
    }
    if (addType === "them") {
      navigation.navigate("Review Trade", {
        type: "send",
      });
    }
    return (
      <PropertiesView>
        <CenterView>
          <Icon
            name="home-floor-0"
            size={100}
            color={theme.colours.main.white}
          />
          <CountryHeaderText>
            {addType === "none"
              ? "You have no properties"
              : "They don't have any properties"}
          </CountryHeaderText>
        </CenterView>
        <BlurNavBar>
          <NavBarRowView>
            <BackArrowPressable
              onPress={() => navigation.goBack()}
              style={{
                height: 70,
                flex: 0.2,
              }}
            />
            {addType !== "none" && (
              <FrontArrowPressable
                style={{
                  flex: 0.2,
                  height: 70,
                }}
                onPress={() => {
                  if (addType === "me") {
                    navigation.navigate("Their Trade Cash");
                  }
                  if (addType === "them") {
                    navigation.navigate("Review Trade", {
                      type: "send",
                    });
                  }
                }}
              />
            )}
          </NavBarRowView>
        </BlurNavBar>
      </PropertiesView>
    );
  }

  const organizedProperties = organizeProperties(properties);

  // create state that holds the modal open or closed based on the rarities from organizedProperties
  const [modals, setModals] = useState(
    organizedProperties.map((rarityOrg, index) => {
      if (index === 0) {
        return {
          rarity: rarityOrg.rarity,
          open: true,
        };
      } else {
        return {
          rarity: rarityOrg.rarity,
          open: false,
        };
      }
    })
  );

  const [modalOpen, setModalOpen] = useState(false);

  const renderTheProperties = ({ item }) => {
    const property = item;
    return (
      <PropertyItemView>
        <PropertyItemPressable
          onPress={() => {
            if (bankrupt) {
              navigation.navigate("View Bankrupt Property", {
                property: property,
              });
            } else {
              if (addType === "me") {
                navigation.navigate("View Trade Card", {
                  property: property,
                  addType: "me",
                });
              }
              if (addType === "them") {
                navigation.navigate("View Trade Card", {
                  property: property,
                  addType: "them",
                });
              }
              if (addType === "none") {
                navigation.navigate("View House", {
                  property: property,
                  downMessage: "back",
                });
              }
            }
          }}
        >
          <PropertyItemImage>
            <PropertyItemTintForeground>
              <View
                style={{
                  position: "absolute",
                  top: 5,
                  left: 5,
                }}
              >
                <BlurBlackViewComponent
                  style={{
                    borderRadius: 6,
                  }}
                >
                  <PropertyItemText
                    style={{
                      paddingLeft: 2,
                      paddingRight: 2,
                    }}
                  >
                    {getCountryProperties(property.country).emoji}
                  </PropertyItemText>
                </BlurBlackViewComponent>
              </View>
            </PropertyItemTintForeground>
          </PropertyItemImage>
        </PropertyItemPressable>
        <View
          style={{
            flexShrink: 1,
          }}
        >
          <PropertyItemText>{property.address}</PropertyItemText>
        </View>
        <CustomLinearGradient
          customColors={gradientRartiyMaps[property.rarity]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            width: "80%",
            height: 8,
            borderRadius: 5,
            alignSelf: "center",
            margin: 5,
          }}
          staticGrad
        />
      </PropertyItemView>
    );
  };

  const newProps = organizedProperties
    .find((val) => val.rarity === modals.find((val) => val.open).rarity)
    .properties.map((val) => {
      return {
        ...val,
        rarity: modals.find((val) => val.open).rarity,
      };
    });

  return (
    <>
      <MainContentView>
        <MainContentBlur
          style={{
            flex: 1,
            width: "100%",
          }}
        >
          <PropertiesView>
            <View
              style={{
                height: "100%",
                width: "100%",
              }}
            >
              <FlashList
                data={newProps}
                renderItem={renderTheProperties}
                estimatedItemSize={186}
                keyExtractor={(item) => item.id}
                numColumns={width > 876 ? 4 : 3}
                extraData={{ modals, width }}
              />
            </View>
          </PropertiesView>
        </MainContentBlur>
      </MainContentView>
      <BlurNavBar>
        <NavBarRowView>
          <BackArrowPressable
            onPress={() => navigation.goBack()}
            style={{
              height: 70,
              flex: 0.2,
            }}
          />

          <CustomLinearGradient
            style={{
              flex: addType === "none" ? 0.7 : 0.6,
              height: 70,
              borderRadius: 40,
              margin: 10,
            }}
            customColors={
              gradientRartiyMaps[modals.find((val) => val.open).rarity]
            }
          >
            <Pressable
              style={{ flex: 1 }}
              onPress={() => {
                setModalOpen(!modalOpen);
                // set the modals to a random one open and the rest closed
                const randomIndex = Math.floor(Math.random() * modals.length);
                const newModals = modals.map((val, index) => {
                  if (index === randomIndex) {
                    return {
                      ...val,
                      open: true,
                    };
                  } else {
                    return {
                      ...val,
                      open: false,
                    };
                  }
                });
                setModals(newModals);
              }}
            >
              <CenterView>
                <CountryHeaderText>
                  {modals.find((val) => val.open).rarity.toLocaleUpperCase()}
                </CountryHeaderText>
                <Icon
                  size={25}
                  name={
                    modalOpen
                      ? "arrow-down-drop-circle-outline"
                      : "arrow-up-drop-circle-outline"
                  }
                  color={theme.colours.main.white}
                  style={{
                    position: "absolute",
                    right: 15,
                  }}
                />
              </CenterView>
            </Pressable>
          </CustomLinearGradient>
          {addType !== "none" && (
            <FrontArrowPressable
              style={{
                flex: 0.2,
                height: 70,
              }}
              onPress={() => {
                if (addType === "me") {
                  navigation.navigate("Their Trade Cash");
                }
                if (addType === "them") {
                  navigation.navigate("Review Trade");
                }
              }}
            />
          )}
        </NavBarRowView>
      </BlurNavBar>
    </>
  );
};

export default PropertiesFlatlist;
