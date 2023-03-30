import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text> SignupScreen </Text>
      <Button
        title="Go To Sign In"
        onPress={() => navigation.navigate("Signin")}
      />
      <Button
      title="Go To Main Flow"
      onPress={() => navigation.navigate("mainFlow")}
    />

    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
