import React from "react";
import { Button, Text, View } from "react-native";

export const Home = ( { navigation } ) => {
    return (
        <View>
            <Text>Hey</Text>
            <Button title="Go to Jane's profile" onPress={() => navigation.navigate('Search')}></Button>
        </View>
    )
}