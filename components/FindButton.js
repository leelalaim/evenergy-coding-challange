import React from "react";
import styled from "styled-components/native";

export const FindButton = ({ title, onPress, FindBtnText }) => {
  return (
    <FindBtn title={title} onPress={onPress}>
      <FindButtonText>{FindBtnText}</FindButtonText>
    </FindBtn>
  );
};

const FindBtn = styled.TouchableOpacity`
  background-color: #64b241;
  border-radius: 25px;
`;

const FindButtonText = styled.Text`
  color: #ffffff;
  padding: 15px 25px;
  font-size: 20px;
`;
