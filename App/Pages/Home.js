/////////////////////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { NativeBaseProvider, Box, Text, Button } from "native-base";
import { styles } from "./Css/CssHome";
/////////////////////////////////////////////////////////////////////////////////////// End Section Import

/////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class Home extends React.Component {
  // Start Section Functions
  GameWithFrind() {
    this.props.navigation.navigate("GameWithFrinde");
  }

  GameWithComputer() {
    this.props.navigation.navigate("GameWithComputer");
  }
  // End Section Functions

  // Start Section Render
  render() {
    return (
      <NativeBaseProvider>
        {/* Start Section App */}
        <Box name="App" style={styles.app}>
          <Box style={styles.box_button_game_with_frinde}>
            <Button
              style={styles.button_game_with_frinde}
              onPress={() => {
                this.GameWithFrind();
              }}
            >
              <Text style={styles.text_game_with_frinde}>Game With Frinde</Text>
            </Button>
          </Box>

          <Box style={styles.box_button_game_with_computer}>
            <Button
              style={styles.button_game_with_computer}
              onPress={() => {
                this.GameWithComputer();
              }}
            >
              <Text style={styles.text_game_with_computer}>
                Game With Computer
              </Text>
            </Button>
          </Box>
        </Box>
        {/* End Section App */}
      </NativeBaseProvider>
    );
  }
  // End Section Render
}
/////////////////////////////////////////////////////////////////////////////////////// End Section Class
