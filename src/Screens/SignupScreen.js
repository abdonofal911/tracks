import React from "react";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, Input } from "react-native-elements";
import Spacer from "../Components/Spacer";
const SignupScreen = ({ navigation }) => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3> Sign Up for Tracker </Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={(newEmail) => SetEmail(newEmail)}
        autoCapitalize="none"
        autoCorrect={false}
        

      />
      <Spacer />
      <Input
        label="Password"
        value={password}
        onChangeText={(newPassword) => SetPassword(newPassword)}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
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
    flex: 1,
    justifyContent: "center",
    marginBottom: 150,
  },
});
