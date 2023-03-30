import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, Input } from "react-native-elements";
import Spacer from "../Components/Spacer";
const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3> Sign Up for Tracker </Text>
      </Spacer>
      <Input label="Email" />
      <Spacer />
      <Input label="Password" />
      <Spacer>
        <Button title="Sign Up" />
      </Spacer>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    borderColor: "red",
    borderWidth: 5,
    flex: 1,
    justifyContent: "center",
    marginBottom:150
  },
});
