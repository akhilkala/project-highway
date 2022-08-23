import { Dimensions } from "react-native";

export const widthInPercent = (percent: number) =>
  Dimensions.get("window").width * (percent / 100);

export const heightInPercent = (percent: number) =>
  Dimensions.get("window").height * (percent / 100);
