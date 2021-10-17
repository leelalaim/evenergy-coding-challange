import React, { useEffect, useState } from "react";
import { Text} from "react-native";
import styled from "styled-components/native";


export const Search = ({ country }) => {
  const [search, setSearch] = useState("");
  const [stations, setStations] = useState([]);
  const [filteredStations, setFilteredStations] = useState([]);
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(
      `https://api.openchargemap.io/v3/poi/?output=json&countrycode=GB&compact=true&verbose=false&key='e05ac04b-3ec5-436b-893a-978da4b706d1'`
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
      setShowAll(false);
    } else {
      setFilteredStations(stations);
      setSearch(text);
      setShowAll(false);
    }
  };

  // const charge = (id) => {
  //   fetch("https://example.ev.energy/chargingsession", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       user: 1,
  //       car_id: 1,
  //       charger_id: { id },
  //     }),
  //   }).then((res) => console.log(res));
  // };

  return (
    <SearchConatiner>
      <SearchWrapper>
        <Header>Enter the name of the nearest city</Header>
        <SearchInput
          onChangeText={(text) => searchFunction(text)}
          value={search}
          placeholder="Search here"
        />
      </SearchWrapper>
      <CardWrapper>
        {filteredStations && !showAll &&
          filteredStations.map((station, index) => {
            return (
              <Card key={index}>
                <CardInfoWrapper>
                  <Title>{station.AddressInfo.Title}</Title>
                  <Text>{station.AddressInfo.AddressLine1}</Text>
                  <Text>{station.AddressInfo.Postcode}</Text>
                  <TownName>{station.AddressInfo.Town}</TownName>
                </CardInfoWrapper>
                <CardButtonWrapper>
                  <Button>
                    <ButtonText>Charge</ButtonText>
                  </Button>
                </CardButtonWrapper>
              </Card>
            );
          })}
      </CardWrapper>
      {showAll &&
        stations.map((station, index) => {
          return (
            <Card key={index}>
              <CardInfoWrapper>
                <Title>{station.AddressInfo.Title}</Title>
                <Text>{station.AddressInfo.AddressLine1}</Text>
                <Text>{station.AddressInfo.Postcode}</Text>
                <TownName>{station.AddressInfo.Town}</TownName>
              </CardInfoWrapper>
              <CardButtonWrapper>
                <Button>
                  <ButtonText>Charge</ButtonText>
                </Button>
              </CardButtonWrapper>
            </Card>
          );
        })}
    </SearchConatiner>
  );
};

const SearchConatiner = styled.ScrollView`
  flex: 1;
  width: 100%;
`;
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

const CardWrapper = styled.View`
  flex: 1;
`;

const Card = styled.View`
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
