import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

export const Card = ({title, address, postcode, town, btnText } ) => {
  return (
    <CardMain>
      <CardInfoWrapper>
        <Title>{title}</Title>
        <Text>{address}</Text>
        <Text>{postcode}</Text>
        <TownName>{town}</TownName>
      </CardInfoWrapper>
      <CardButtonWrapper>
        <Button>
          <ButtonText>{btnText}</ButtonText>
        </Button>
      </CardButtonWrapper>
    </CardMain>
  );
};

const CardMain = styled.View`
  border: 1px solid black;
  margin: 10px;
  padding: 5px;
  flex-direction: row;
`;
const CardInfoWrapper = styled.View`
  flex: 2;
  padding: 5px;
`;
const CardButtonWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  color: #007228;
  font-size: 17px;
  font-weight: 600;
`;

const TownName = styled.Text``;

const Button = styled.TouchableOpacity`
  background-color: #64b241;
  border-radius: 25px;
  padding: 10px 20px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
`;

