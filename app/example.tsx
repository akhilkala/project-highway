import React, { ReactElement } from "react";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {}

export default function Example({}: Props): ReactElement {
  return <Styled.container></Styled.container>;
}

const Styled = {
  container: styled(SafeAreaView)`
    flex: 1;
  `,
  heading: styled.Text``,
};
