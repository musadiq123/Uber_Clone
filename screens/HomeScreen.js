import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import NavFavourites from "../components/NavFavourites";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import RideRequestScreen from "./RideRequestScreen";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // useEffect(()=>{

  //   fetch('https://countriesnow.space/api/v0.1/countries/capital').then((res) =>
  //       res.json().then((data) => {
  //         console.log("working", data)

  //         setData(data?.data)
  //       })
  //     );
  // },[])
  
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          source={{ uri: "https://links.papareact.com/gzs" }}
          style={{ width: 100, height: 100, resizeMode: "contain" }}
        />
      {/* <RideRequestScreen/> */}

        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details?.geometry?.location,
                description: data?.description,
              })
            );

            dispatch(setDestination(null));
          }}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          minLength={2}
          fetchDetails={true}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          enablePoweredByContainer={false}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
        />

        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});



//--------------------------------- 2nd example ----------------------------------------------------
// **********************************stopwatch *****************************************************
// -------------------------------------------------------------------------------------------------
  // import React, { useState, useContext, useEffect } from 'react';
  // import { View, Text, TextInput, Button, Alert } from 'react-native';

  // const TimerContext = React.createContext();

  // const TimerDisplay = () => {
  //   const { elapsedTime, duration, resetTimer } = useContext(TimerContext);
  //   const remainingTime = duration - elapsedTime;

  //   const minutes = Math.floor(remainingTime / 60);
  //   const seconds = remainingTime % 60;
  //   useEffect(()=>{
  //     if(seconds<1){
  //       resetTimer()
  //     }
  //   },[seconds])
      


  //   return (
  //     <View>
  //       <Text style={{ fontSize: 24 }}>
  //         {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
  //       </Text>
  //     </View>
  //   );
  // };

  // const TimerForm = () => {
  //   const [delay, setDelay] = useState('');
  //   const [duration, setDuration] = useState('');
  //   const [isValid, setIsValid] = useState(true);
  //   const [showStartBTN, setShowStartBTN] = useState(false)

  //   const { startTimer, resetTimer } = useContext(TimerContext);

  //   const handleSubmit = () => {
  //     const delayNum = parseInt(delay);
  //     const durationNum = parseInt(duration);

  //     if (isNaN(delayNum) || isNaN(durationNum)) {
  //       setIsValid(false);
  //       return;
  //     }

  // setShowStartBTN(true)

  //     startTimer(delayNum, durationNum);
  //   };
  //   const handleStopTimer = () => {
  // setShowStartBTN(false)
  //     resetTimer();
  //   };

  //   return (
  //     <View>
  //       <TextInput
  //         placeholder="Delay (Minutes)"
  //         value={delay}
  //         onChangeText={setDelay}
  //         keyboardType="numeric"
  //       />
  //       <TextInput
  //         placeholder="Duration (sec)"
  //         value={duration}
  //         onChangeText={setDuration}
  //         keyboardType="numeric"
  //       />
  //       <Button title="Start Counting" onPress={handleSubmit} disabled={showStartBTN} />
  //       <Button title="Stop Counting" onPress={handleStopTimer} style={{marginTop:100}} />
  //       {!isValid && <Text>Invalid input. Please enter numbers only.</Text>}
  //     </View>
  //   );
  // };

  // // Class component for the StopWatch app
  // export default class StopWatchApp extends React.Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       elapsedTime: 0,
  //       duration: 0,
  //       isRunning: false,
  //     };
  //   }


  //   startTimer = (delay, duration) => {
  //     this.setState({ duration, isRunning: true });
  //     setTimeout(() => {
  //       this.timer = setInterval(() => {

  //         this.setState({ elapsedTime: this.state.elapsedTime + 1 });
  //       }, 1000);
  //     }, delay * 60 * 1000);
  //   };

  //   resetTimer = () => {
  //     this.setState({ elapsedTime: 0, duration: 0, isRunning: false });
  //     clearInterval(this.timer);
  //   };

  //   componentWillUnmount() {
  //     if(this.state.isRunning && this.state.elapsedTime==0 && this.state.duration==0){
  //       clearInterval(this.timer);
  //     this.setState({ elapsedTime: 0, duration: 0, isRunning: false });
  //     }
  //     clearInterval(this.timer);
  //   }

  //   render() {
  //     return (
  //       <TimerContext.Provider
  //         value={{
  //           startTimer: this.startTimer,
  //           resetTimer: this.resetTimer,
  //           elapsedTime: this.state.elapsedTime,
  //           duration: this.state.duration,
  //         }}
  //       >
  //         <View style={{ padding: 20 }}>
  //           <TimerDisplay />
  //           <TimerForm />
  //         </View>
  //       </TimerContext.Provider>
  //     );
  //   }
  // }