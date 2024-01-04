import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import tw from "twrnc";
import { Icon } from "@rneui/base";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code Street, London, UK",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London, UK",
  },
];

const NavFavourites = () => {
  const navigation = useNavigation();
  const renderItem = ({ item: { location, destination, icon, id } }) => {
    return (
      <TouchableOpacity style={tw`flex-row items-center p-5`}>
        <Icon
          style={tw`mr-4 rounded-full bg-gray-300 p-3`}
          name={icon}
          color="white"
          type="ionicon"
          size={18}
        />
        <View>
          <Text style={tw`font-semibold text-lg`}>{location}</Text>
          <Text style={tw`text-gray-500`}>{destination}</Text>
        </View>
        {/* <View style={tw`${!origin && 'opacity-20'}`}>
          <Image
            source={{ uri: `${item?.image}` }}
            style={{ width: 120, height: 120, resizeMode: "contain" }}
          />
          <Text style={tw`mt-2 text-lg font-semibold`}>{item?.title}</Text>
          <Icon
            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
            name="arrowright"
            color="white"
            type="antdesign"
          />
        </View> */}
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      keyExtractor={(item) => item?.id}
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={() => {
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />;
      }}
      // horizontal={true}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
