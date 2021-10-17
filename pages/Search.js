import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";

export const Search = ({ country }) => {
  const [search, setSearch] = useState("");
  const [stations, setStations] = useState([]);
  const [filteredStations, setFilteredStations] = useState([]);
  const [text, onChangeText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(
      `https://api.openchargemap.io/v3/poi/?output=json&countrycode=${country}&compact=true&verbose=false&key='e05ac04b-3ec5-436b-893a-978da4b706d1'`
    )
      .then((res) => res.json())
      .then((data) => setStations(data));
    //   .catch((err) => alert(`Error: ${err}`));
  };

  const searchFunction = (text) => {
    if (text) {
      const newData = stations.filter((item) => {
        const itemData = item
          ? item.AddressInfo.Town.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      setFilteredStations(newData);
      setSearch(text);
    } else {
      setFilteredStations(stations);
      setSearch(text);
    }
  };

  return (
    <View>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={(text) => searchFunction(text)}
          value={search}
          placeholder="Search here"
        />
      </SafeAreaView>
      {filteredStations.map((station, index) => {
        return (
            <View key={index}>
                <Text>{station.AddressInfo.Town}</Text>
                <Text>{station.AddressInfo.Title}</Text>
                <Text>{station.AddressInfo.AddressLine1}</Text>
                </View>
        )
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
