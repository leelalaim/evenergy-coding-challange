import { StatusBar } from "expo-status-bar";
import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";

import { Search } from "./pages/Search";
import { Home } from "./pages/Home";
import { TouchableOpacityBase } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ title: "Search" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    //   <Main>
    //   <Search country='GB'/>
    // </Main>
  );
};

const Main = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default App;
