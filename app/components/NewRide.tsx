import React, { ReactElement } from "react";
import styled from "styled-components/native";
import RBSheet from "react-native-raw-bottom-sheet";

interface Props {}

export default function NewRide({}: Props): ReactElement {
  const refRBSheet = React.useRef();
  return (
    <RBSheet
      //@ts-ignore
      ref={refRBSheet}
      closeOnDragDown={true}
      customStyles={{
        container: {
          borderRadius: 32,
        },
        wrapper: {
          backgroundColor: "transparent",
        },
        draggableIcon: {
          backgroundColor: "#BDC6EC",
        },
      }}
    ></RBSheet>
  );
}

const Styled = {
  container: styled.View``,
  heading: styled.Text``,
};
