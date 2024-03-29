import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import tw from "twrnc";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { setDestination } from "../slices/navSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import { Icon } from "@rneui/base";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const user = useContext("");


  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good morning, Musa</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details?.geometry?.location,
                  description: data.description.toString(),
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            returnKeyType={"search"}
            minLength={2}
            fetchDetails={true}
            enablePoweredByContainer={false}
            styles={toinputBoxStyles}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
          />
        </View>
        <NavFavourites/>
      </View>
      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto  border-gray-100`}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("RideOptionsCard")}
          style={tw`flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
        >
          <Icon name={"car"} type="font-awesome" color="white" size={18} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex-row justify-between w-24 px-4 py-3 rounded-full`}
        >
          <Icon
            name={"fast-food-outline"}
            type="ionicon"
            color="black"
            size={16}
          />
          <Text style={tw`text-black text-center`}>Eats{user}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toinputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
