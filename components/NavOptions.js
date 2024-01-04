import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectOrigin, setDestination } from "../slices/navSlice";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order Food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  const dispatch = useDispatch();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        onPress={() => {
          dispatch(setDestination(null));
          navigation.navigate(item?.screen);
        }}
        disabled={!origin}
      >
        <View style={tw`${!origin && "opacity-20"}`}>
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
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item?.id}
        data={data}
        renderItem={renderItem}
        horizontal={true}
      />
    </View>
  );
};

export default NavOptions;
