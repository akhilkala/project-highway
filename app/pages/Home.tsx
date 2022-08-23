import React, { ReactElement } from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import NewRide from "../components/NewRide";
import * as Location from "expo-location";
import MapView from "react-native-maps";

export default function Home(): ReactElement {
  const newRideRef = React.useRef();
  const [location, setLocation] = React.useState<Location.LocationObject>();

  React.useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      const locationSubcription = await Location.watchPositionAsync(
        {
          distanceInterval: 20,
        },
        setLocation
      );
    })();
  }, []);

  return (
    <>
      <Styled.container>
        <Styled.top>
          <Styled.heading>
            Good Morning,
            <Styled.headingName> Akhil</Styled.headingName>
          </Styled.heading>
          <Styled.subHeading>Where are you headed today?</Styled.subHeading>
          <Styled.map />
        </Styled.top>
        <Styled.buttons>
          <Styled.buttonHistory>History</Styled.buttonHistory>
          <Styled.buttonNewRide
            onPress={() =>
              // @ts-ignore
              newRideRef?.current?.open()
            }
          >
            New Ride
          </Styled.buttonNewRide>
        </Styled.buttons>
      </Styled.container>
      <NewRide ref={newRideRef} />
    </>
  );
}

const Styled = {
  container: styled(SafeAreaView)`
    flex: 1;
    padding: 50px 20px;
    justify-content: space-between;
  `,
  top: styled.View``,
  heading: styled.Text`
    font-size: 20px;
    font-weight: bold;
  `,
  headingName: styled.Text`
    color: #21bf73;
  `,
  subHeading: styled.Text`
    margin-top: 1px;
    font-size: 15px;
    letter-spacing: 1.4px;
    color: #6d6d6d;
  `,
  buttons: styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
  `,
  buttonHistory: styled.Text`
    color: #21bf73;
    font-weight: bold;
    border: 1px solid #444444;
    padding: 10px 0;
    flex: 1;
    border-radius: 6px;
    font-size: 16px;
    margin-right: 10px;
    text-align: center;
  `,
  buttonNewRide: styled.Text`
    font-weight: bold;
    background-color: #21bf73;
    color: #fff;
    padding: 10px 0;
    flex: 1;
    border-radius: 6px;
    font-size: 16px;
    margin-left: 10px;
    text-align: center;
  `,
  map: styled(MapView)`
    width: 100%;
    height: 200px;
    margin-top: 15px;
  `,
};
