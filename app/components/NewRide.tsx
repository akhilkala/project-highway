import React, { ReactElement } from "react";
import styled from "styled-components/native";
import RBSheet from "react-native-raw-bottom-sheet";
import { heightInPercent } from "../utils/utilities";

interface Props {}

export default React.forwardRef(function NewRide({}: Props, ref): ReactElement {
  return (
    <RBSheet
      //@ts-ignore
      ref={ref}
      closeOnDragDown={true}
      height={heightInPercent(60)}
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
    >
      <Styled.container>
        <Styled.heading>New Ride</Styled.heading>
        <Styled.subHeading>Let the adventure begin!</Styled.subHeading>
      </Styled.container>
      <Styled.form>
        <Styled.input placeholder="Name" />
        <Styled.input placeholder="Name" />
        <Styled.input placeholder="Name" />
        <Styled.input placeholder="Name" />
        <Styled.input placeholder="Name" />
      </Styled.form>
    </RBSheet>
  );
});

const Styled = {
  container: styled.View`
    padding: 30px 20px;
  `,
  heading: styled.Text`
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 2.2px;
  `,
  subHeading: styled.Text`
    font-size: 15px;
    letter-spacing: 2.2px;
    color: #6d6d6d;
    margin-top: 3px;
  `,
  form: styled.View`
    padding: 0 20px;
  `,
  input: styled.TextInput`
    background-color: #ebedf1;
    padding: 5px;
    font-size: 16px;
    border-radius: 5px;
    margin: 10px 0;
  `,
};
