import React from "react";
import { View, StyleSheet, Text , Button} from "react-native";

const TrackListScreen = ({navigation}) => {
  return (
    <View>
      <Text> TrackListScreen </Text>
      <Button title="Go to Track Deatail" 
      onPress={()=> navigation.navigate('TrackDetail')}
      /> 
    </View>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({});
