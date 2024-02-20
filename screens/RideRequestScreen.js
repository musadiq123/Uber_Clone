import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

const RideRequestScreen = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');

  const handleRideRequest = async () => {
    try {
      const response = await fetch('https://my-uber-api.com/rides', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pickup_location: pickupLocation,
          dropoff_location: dropoffLocation,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Ride request successful:', data);
      } else {
        console.error('Error with ride request:', response.statusText);
      }
    } catch (error) {
      console.error('Error with ride request:', error);
    }
  };

  return (
    <View>
      <Text>Enter pickup location:</Text>
      <TextInput
        value={pickupLocation}
        onChangeText={setPickupLocation}
      />
      <Text>Enter dropoff location:</Text>
      <TextInput
        value={dropoffLocation}
        onChangeText={setDropoffLocation}
      />
      <Button title="Request Ride" onPress={handleRideRequest} />
    </View>
  );
};

export default RideRequestScreen;