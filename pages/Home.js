import React from "react";
import { Button, Text, View, Image } from "react-native";
import styled from "styled-components/native";

export const Home = ({ navigation }) => {
  return (
    <HomeContainer>
      <TopContainer>
        <Header>Looking where to change your electric vehicle?</Header>
        <CarImage source={require("../assets/ev.png")} />
      </TopContainer>
      <BottomContainer>
        <FindButton
          title="Find charging stations"
          onPress={() => navigation.navigate("Search")}
        >
          <FindButtonText>Find charging stations</FindButtonText>
        </FindButton>
      </BottomContainer>
    </HomeContainer>
  );
};

const HomeContainer = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const TopContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 40px;
`;

const BottomContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-top: 50px;
`;

const Header = styled.Text`
  font-size: 30px;
  text-align: center;
  color: #64b241;
`;

const CarImage = styled.Image`
  width: 150px;
  height: 150px;
`;
const FindButton = styled.TouchableOpacity`
  background-color: #64b241;
  border-radius: 25px;
`;

const FindButtonText = styled.Text`
  color: #ffffff;
  padding: 15px 25px;
  font-size: 20px;
`;
