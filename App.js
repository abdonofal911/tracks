import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import AccountScreen from "./src/Screens/AccountScreen";
import SigninScreen from "./src/Screens/SigninScreen";
import SignupScreen from "./src/Screens/SignupScreen";
import TrackCreateScreen from "./src/Screens/TrackCreateScreen";
import TrackDeatailScreen from "./src/Screens/TrackDeatailScreen";
import TrackListScreen from "./src/Screens/TrackListScreen";

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,

  }),
  mainFlow: createMaterialBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDeatailScreen,
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen,
  }),
});

export default createAppContainer(switchNavigator)