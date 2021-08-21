/////////////////////////////////////////////////////////////////////////////////////// Start Section Import
import { StyleSheet } from "react-native";
/////////////////////////////////////////////////////////////////////////////////////// End Section Import

/////////////////////////////////////////////////////////////////////////////////////// Start Section Styles
const styles = StyleSheet.create({
  // Start Style App
  app: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  box_text_welcome: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },

  text_welcome: {
    color: "#000",
    fontSize: 30,
  },
  // End Style App

  // Start Style Buttons
  box_buttons: {
    width: "90%",
    height: "50%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  box_buttons_row: {
    width: "94%",
    height: "33%",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    margin: 1,
  },

  box_button: {
    width: "35%",
    height: "100%",
    margin: 1,
  },

  button: {
    width: "100%",
    height: "100%",
  },

  text_button: {
    color: "#fff",
    fontSize: 50,
  },

  text_button: {
    color: "#fff",
    fontSize: 50,
  },
  // End Style Buttons

  // Start Style Result
  box_score_result: {
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
  },

  text_score_player_x: {
    color: "#000",
    fontSize: 25,
    margin: 5,
  },

  text_score_player_x_score: {
    color: "#f44",
    fontSize: 30,
  },

  text_score_player_o: {
    color: "#000",
    fontSize: 25,
    margin: 5,
  },

  text_score_player_o_score: {
    color: "#f44",
    fontSize: 30,
  },

  text_score_tie: {
    color: "#000",
    fontSize: 25,
    margin: 5,
  },

  text_score_tie_score: {
    color: "#f44",
    fontSize: 30,
  },

  text_result: {
    color: "#000",
    fontSize: 25,
    margin: 5,
  },

  text_result_score: {
    color: "#f66",
    fontSize: 28,
  },
  // End Style Result

  // Start Style Reset Game
  box_reset_game: {
    width: "90%",
    height: "8%",
  },

  button_reset: {
    width: "100%",
    height: "100%",
    borderRadius: 1000,
  },

  text_button_reset_game: {
    color: "#fff",
    fontSize: 30,
  },
  // End Style Reset Game
});
/////////////////////////////////////////////////////////////////////////////////////// End Section Styles

export { styles };
