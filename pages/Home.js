import React from "react";
import { Button, Text, View, Image } from "react-native";
import styled from "styled-components/native";

export const Home = ( { navigation } ) => {
    return (
        <View>
            <Text>Looking where to change your car?</Text>
            <CarImage source= {require('../assets/ev.png') }/>
            <Button title="Find charging stations" onPress={() => navigation.navigate('Search')}></Button>
        </View>
    )
}


const CarImage = styled.Image`
width: 100px;
height: 100px;
`