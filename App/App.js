/////////////////////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Pages/Home";
import GameWithFrinde from "./Pages/GameWithFrinde";
import GameWithComputer from "./Pages/GameWithComputer";
/////////////////////////////////////////////////////////////////////////////////////// End Section Import

const Stack = createNativeStackNavigator();

/////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        {/* Start Section Stack */}
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Select Type Game",
            }}
          />
          <Stack.Screen
            name="GameWithFrinde"
            component={GameWithFrinde}
            options={{
              title: "Game With Frinde",
              animation: "slide_from_right",
            }}
          />
          <Stack.Screen
            name="GameWithComputer"
            component={GameWithComputer}
            options={{
              title: "Game With Computer",
              animation: "slide_from_left",
            }}
          />
        </Stack.Navigator>
        {/* End Section Stack */}
      </NavigationContainer>
    );
  }
}
/////////////////////////////////////////////////////////////////////////////////////// End Section Class
