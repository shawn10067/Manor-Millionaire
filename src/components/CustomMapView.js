import React, { useContext, useEffect, useRef, useState } from "react";
import { Image, Platform, View } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import { Text } from "react-native-paper";
import { AuthenticationContext } from "../services/authentication/authentication.context";
import { UserContext } from "../services/user/user.context";
import customStyle from "../utils/customMapStyle.json";
import lightStyle from "../utils/lightMapStyle.json";
import { Svg, Image as ImageSvg } from "react-native-svg";
import styled from "styled-components/native";
import { VibrancyView } from "@react-native-community/blur";

// make a create callout function that takes in a property and returns a callout

const CalloutText = styled.Text`
  font-size: 20px;
  font-family: FuturaPTHeavy;
  color: ${({ theme }) => theme.colours.main.white};
  text-align: center;
  width: 100%;
`;

const CustomMapView = ({
  children,
  animateRegion = null,
  setOpen = null,
  mapRef = null,
  ...props
}) => {
  const { userStateSettled, user } = useContext(AuthenticationContext);
  const { getProperties, properties, getPropertiesCalled } =
    useContext(UserContext);

  // state for callouts
  const [callouts, setCallouts] = useState([]);

  // creating the callouts from the properties if they exist
  useEffect(() => {
    if (properties) {
      const markerProperties = properties.forEach((property) => {
        // create random logitude and latitude
        const randomLat = Math.random() * 50;
        const randomLong = Math.random() * 50;
        if (property) {
          const callout = {
            latitude: randomLat,
            longitude: randomLong,
            title: property.address,
            description: property.address,
          };

          const { latitude, longitude, title, description } = callout;
          return (
            <Marker
              coordinate={{ latitude, longitude }}
              key={property.id}
              ref={(markerRef) => (calloutRef.current = markerRef)}
            >
              <Callout
                onPress={() => console.log("callout pressed", title)}
                style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
              >
                <View style={{ height: 90, width: 90 }}>
                  <Text> {title} </Text>
                  <Svg width={80} height={80}>
                    <ImageSvg
                      width={"100%"}
                      height={"100%"}
                      preserveAspectRatio="xMidYMid slice"
                      href={{ uri: "https://picsum.photos/200" }}
                    />
                  </Svg>
                </View>
              </Callout>
            </Marker>
          );
        }
      });

      setCallouts(markerProperties);
    }
    return () => {
      setCallouts([]);
    };
  }, [properties]);

  // if the user state is settled and the user exists, call the getProperties function
  if (userStateSettled && user) {
    console.log("user exists and we're getting properties");
    // if the user has properties, then create custom markers for each property

    if (properties && getPropertiesCalled) {
      if (properties.length > 0) {
        console.log("user has properties");
        properties.map((property) => {
          // console.log("property", property);
        });
      }
    } else {
      console.log("calling getProperties");
      getProperties();
    }
    // if we don't have any properties, then call the getProperties function
  }

  // callout ref
  const calloutRef = useRef(null);

  return (
    <MapView
      style={{
        flex: 1,
      }}
      userInterfaceStyle="dark"
      rotateEnabled={false}
      showsPointsOfInterest={false}
      initialRegion={animateRegion}
      ref={(map) => mapRef && (mapRef.current = map)}
      onPanDrag={() => setOpen && setOpen(false)}
      onRegionChangeComplete={(reg) => {
        console.log("region changed with ", reg);
        return;
      }}
      customMapStyle={Platform.OS === "android" ? customStyle : null}
      {...props}
    >
      {callouts}
      {children}
    </MapView>
  );
};

export default CustomMapView;
