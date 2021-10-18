import React from "react";
import styled from "styled-components/native";

export const Search = ({ headerText, onChangeText, value, placeholder }) => {
  return (
    <SearchWrapper>
      <Header>{headerText}</Header>
      <SearchInput
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
      />
    </SearchWrapper>
  );
};

const SearchWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #64b241;
`;

const Header = styled.Text`
  font-size: 30px;
  text-align: center;
  color: #ffffff;
  padding: 20px 0;
`;

const SearchInput = styled.TextInput`
  height: 40px;
  margin: 12px;
  border: 0.5px solid #3a3a3a;
  padding: 10px;
  background-color: #ffffff;
  color: #3a3a3a;
`;
