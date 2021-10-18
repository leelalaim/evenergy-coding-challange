import React from "react";

import { SearchPage } from "./pages/SearchPage";
import { HomePage } from "./pages/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Search"
          component={SearchPage}
          options={{ title: "Search" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
