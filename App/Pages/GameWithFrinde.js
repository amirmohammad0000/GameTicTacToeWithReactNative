/////////////////////////////////////////////////////////////////////////////////////// Start Section Import
import React from "react";
import { NativeBaseProvider, Box, Text, Button } from "native-base";
import { styles } from "./Css/CssGameWithFrinde";
/////////////////////////////////////////////////////////////////////////////////////// End Section Import

/////////////////////////////////////////////////////////////////////////////////////// Start Section Class
export default class GameWithFrinde extends React.Component {
  // Start Section State
  state = {
    TextButtonOne: "",
    TextButtonTwo: "",
    TextButtonThree: "",
    TextButtonFour: "",
    TextButtonFive: "",
    TextButtonSix: "",
    TextButtonSeven: "",
    TextButtonEight: "",
    TextButtonNine: "",
    TextResult: "",
    StatePlayerX: true,
    StatePlayerO: false,
    ScorePlayerX: 0,
    ScorePlayerO: 0,
    ScoreTie: 0,
  };
  // End Section State

  // Start Section Functions
  FuncButtonOne() {
    if (this.state.TextButtonOne === "") {
      if (
        this.state.StatePlayerX === true &&
        this.state.StatePlayerO === false
      ) {
        this.setState({
          TextButtonOne: "X",
          StatePlayerX: false,
          StatePlayerO: true,
        });
      } else {
        this.setState({
          TextButtonOne: "O",
          StatePlayerX: true,
          StatePlayerO: false,
        });
      }
    }
  }

  FuncButtonTwo() {
    if (this.state.TextButtonTwo === "") {
      if (
        this.state.StatePlayerX === true &&
        this.state.StatePlayerO === false
      ) {
        this.setState({
          TextButtonTwo: "X",
          StatePlayerX: false,
          StatePlayerO: true,
        });
      } else {
        this.setState({
          TextButtonTwo: "O",
          StatePlayerX: true,
          StatePlayerO: false,
        });
      }
    }
  }

  FuncButtonThree() {
    if (this.state.TextButtonThree === "") {
      if (
        this.state.StatePlayerX === true &&
        this.state.StatePlayerO === false
      ) {
        this.setState({
          TextButtonThree: "X",
          StatePlayerX: false,
          StatePlayerO: true,
        });
      } else {
        this.setState({
          TextButtonThree: "O",
          StatePlayerX: true,
          StatePlayerO: false,
        });
      }
    }
  }

  FuncButtonFour() {
    if (this.state.TextButtonFour === "") {
      if (
        this.state.StatePlayerX === true &&
        this.state.StatePlayerO === false
      ) {
        this.setState({
          TextButtonFour: "X",
          StatePlayerX: false,
          StatePlayerO: true,
        });
      } else {
        this.setState({
          TextButtonFour: "O",
          StatePlayerX: true,
          StatePlayerO: false,
        });
      }
    }
  }

  FuncButtonFive() {
    if (this.state.TextButtonFive === "") {
      if (
        this.state.StatePlayerX === true &&
        this.state.StatePlayerO === false
      ) {
        this.setState({
          TextButtonFive: "X",
          StatePlayerX: false,
          StatePlayerO: true,
        });
      } else {
        this.setState({
          TextButtonFive: "O",
          StatePlayerX: true,
          StatePlayerO: false,
        });
      }
    }
  }

  FuncButtonSix() {
    if (this.state.TextButtonSix === "") {
      if (
        this.state.StatePlayerX === true &&
        this.state.StatePlayerO === false
      ) {
        this.setState({
          TextButtonSix: "X",
          StatePlayerX: false,
          StatePlayerO: true,
        });
      } else {
        this.setState({
          TextButtonSix: "O",
          StatePlayerX: true,
          StatePlayerO: false,
        });
      }
    }
  }

  FuncButtonSeven() {
    if (this.state.TextButtonSeven === "") {
      if (
        this.state.StatePlayerX === true &&
        this.state.StatePlayerO === false
      ) {
        this.setState({
          TextButtonSeven: "X",
          StatePlayerX: false,
          StatePlayerO: true,
        });
      } else {
        this.setState({
          TextButtonSeven: "O",
          StatePlayerX: true,
          StatePlayerO: false,
        });
      }
    }
  }

  FuncButtonEight() {
    if (this.state.TextButtonEight === "") {
      if (
        this.state.StatePlayerX === true &&
        this.state.StatePlayerO === false
      ) {
        this.setState({
          TextButtonEight: "X",
          StatePlayerX: false,
          StatePlayerO: true,
        });
      } else {
        this.setState({
          TextButtonEight: "O",
          StatePlayerX: true,
          StatePlayerO: false,
        });
      }
    }
  }

  FuncButtonNine() {
    if (this.state.TextButtonNine === "") {
      if (
        this.state.StatePlayerX === true &&
        this.state.StatePlayerO === false
      ) {
        this.setState({
          TextButtonNine: "X",
          StatePlayerX: false,
          StatePlayerO: true,
        });
      } else {
        this.setState({
          TextButtonNine: "O",
          StatePlayerX: true,
          StatePlayerO: false,
        });
      }
    }
  }

  FuncLawGame() {
    if (
      this.state.TextButtonOne === "X" &&
      this.state.TextButtonTwo === "X" &&
      this.state.TextButtonThree === "X"
    ) {
      this.FuncSetStatePlayerX();
    } else if (
      this.state.TextButtonFour === "X" &&
      this.state.TextButtonFive === "X" &&
      this.state.TextButtonSix === "X"
    ) {
      this.FuncSetStatePlayerX();
    } else if (
      this.state.TextButtonSeven === "X" &&
      this.state.TextButtonEight === "X" &&
      this.state.TextButtonNine === "X"
    ) {
      this.FuncSetStatePlayerX();
    } else if (
      this.state.TextButtonOne === "X" &&
      this.state.TextButtonFour === "X" &&
      this.state.TextButtonSeven === "X"
    ) {
      this.FuncSetStatePlayerX();
    } else if (
      this.state.TextButtonTwo === "X" &&
      this.state.TextButtonFive === "X" &&
      this.state.TextButtonEight === "X"
    ) {
      this.FuncSetStatePlayerX();
    } else if (
      this.state.TextButtonThree === "X" &&
      this.state.TextButtonSix === "X" &&
      this.state.TextButtonNine === "X"
    ) {
      this.FuncSetStatePlayerX();
    } else if (
      this.state.TextButtonOne === "X" &&
      this.state.TextButtonFive === "X" &&
      this.state.TextButtonNine === "X"
    ) {
      this.FuncSetStatePlayerX();
    } else if (
      this.state.TextButtonThree === "X" &&
      this.state.TextButtonFive === "X" &&
      this.state.TextButtonSeven === "X"
    ) {
      this.FuncSetStatePlayerX();
    }

    if (
      this.state.TextButtonOne === "O" &&
      this.state.TextButtonTwo === "O" &&
      this.state.TextButtonThree === "O"
    ) {
      this.FuncSetStatePlayerO();
    } else if (
      this.state.TextButtonFour === "O" &&
      this.state.TextButtonFive === "O" &&
      this.state.TextButtonSix === "O"
    ) {
      this.FuncSetStatePlayerO();
    } else if (
      this.state.TextButtonSeven === "O" &&
      this.state.TextButtonEight === "O" &&
      this.state.TextButtonNine === "O"
    ) {
      this.FuncSetStatePlayerO();
    } else if (
      this.state.TextButtonOne === "O" &&
      this.state.TextButtonFour === "O" &&
      this.state.TextButtonSeven === "O"
    ) {
      this.FuncSetStatePlayerO();
    } else if (
      this.state.TextButtonTwo === "O" &&
      this.state.TextButtonFive === "O" &&
      this.state.TextButtonEight === "O"
    ) {
      this.FuncSetStatePlayerO();
    } else if (
      this.state.TextButtonThree === "O" &&
      this.state.TextButtonSix === "O" &&
      this.state.TextButtonNine === "O"
    ) {
      this.FuncSetStatePlayerO();
    } else if (
      this.state.TextButtonOne === "O" &&
      this.state.TextButtonFive === "O" &&
      this.state.TextButtonNine === "O"
    ) {
      this.FuncSetStatePlayerO();
    } else if (
      this.state.TextButtonThree === "O" &&
      this.state.TextButtonFive === "O" &&
      this.state.TextButtonSeven === "O"
    ) {
      this.FuncSetStatePlayerO();
    }

    if (
      this.state.TextButtonOne !== "" &&
      this.state.TextButtonTwo !== "" &&
      this.state.TextButtonThree !== "" &&
      this.state.TextButtonFour !== "" &&
      this.state.TextButtonFive !== "" &&
      this.state.TextButtonSix !== "" &&
      this.state.TextButtonSeven !== "" &&
      this.state.TextButtonEight !== "" &&
      this.state.TextButtonNine !== ""
    ) {
      this.FuncSetStateTie();
    }

    setTimeout(() => {
      this.FuncLawGame();
    }, 10);
  }

  FuncSetStatePlayerX() {
    this.setState({
      StatePlayerX: true,
      StatePlayerO: false,
      TextButtonOne: "",
      TextButtonTwo: "",
      TextButtonThree: "",
      TextButtonFour: "",
      TextButtonFive: "",
      TextButtonSix: "",
      TextButtonSeven: "",
      TextButtonEight: "",
      TextButtonNine: "",
      TextResult: "Player X Is Wins",
      ScorePlayerX: this.state.ScorePlayerX + 1,
    });
    setTimeout(() => {
      this.setState({
        TextResult: "",
      });
    }, 3000);
  }

  FuncSetStatePlayerO() {
    this.setState({
      StatePlayerX: true,
      StatePlayerO: false,
      TextButtonOne: "",
      TextButtonTwo: "",
      TextButtonThree: "",
      TextButtonFour: "",
      TextButtonFive: "",
      TextButtonSix: "",
      TextButtonSeven: "",
      TextButtonEight: "",
      TextButtonNine: "",
      TextResult: "Player O Is Wins",
      ScorePlayerO: this.state.ScorePlayerO + 1,
    });
    setTimeout(() => {
      this.setState({
        TextResult: "",
      });
    }, 3000);
  }

  FuncSetStateTie() {
    this.setState({
      StatePlayerX: true,
      StatePlayerO: false,
      TextButtonOne: "",
      TextButtonTwo: "",
      TextButtonThree: "",
      TextButtonFour: "",
      TextButtonFive: "",
      TextButtonSix: "",
      TextButtonSeven: "",
      TextButtonEight: "",
      TextButtonNine: "",
      TextResult: "Tie",
      ScoreTie: this.state.ScoreTie + 1,
    });
    setTimeout(() => {
      this.setState({
        TextResult: "",
      });
    }, 3000);
  }

  FuncResetGame() {
    this.setState({
      TextButtonOne: "",
      TextButtonTwo: "",
      TextButtonThree: "",
      TextButtonFour: "",
      TextButtonFive: "",
      TextButtonSix: "",
      TextButtonSeven: "",
      TextButtonEight: "",
      TextButtonNine: "",
      TextResult: "",
      StatePlayerX: true,
      StatePlayerO: false,
      ScorePlayerX: 0,
      ScorePlayerO: 0,
      ScoreTie: 0,
    });
  }
  // End Section Functions

  // Start Section Render
  render() {
    return (
      <NativeBaseProvider>
        {/* Start Section App */}
        <Box name="App" style={styles.app}>
          {/* Start Section Box Welcome */}
          <Box name="Box_Text_Welcome" style={styles.box_text_welcome}>
            <Text style={styles.text_welcome}>Welcome To Game Tic Tac Toe</Text>
          </Box>
          {/* End Section Box Welcome */}

          {/* Start Section Box Buttons */}
          <Box name="Box_Buttons" style={styles.box_buttons}>
            <Box style={styles.box_buttons_row}>
              <Box style={styles.box_button}>
                <Button
                  style={styles.button}
                  onPress={() => {
                    this.FuncButtonOne();
                    this.FuncLawGame();
                  }}
                >
                  <Text style={styles.text_button}>
                    {this.state.TextButtonOne}
                  </Text>
                </Button>
              </Box>

              <Box style={styles.box_button}>
                <Button
                  style={styles.button}
                  onPress={() => {
                    this.FuncButtonTwo();
                    this.FuncLawGame();
                  }}
                >
                  <Text style={styles.text_button}>
                    {this.state.TextButtonTwo}
                  </Text>
                </Button>
              </Box>

              <Box style={styles.box_button}>
                <Button
                  style={styles.button}
                  onPress={() => {
                    this.FuncButtonThree();
                    this.FuncLawGame();
                  }}
                >
                  <Text style={styles.text_button}>
                    {this.state.TextButtonThree}
                  </Text>
                </Button>
              </Box>
            </Box>

            <Box style={styles.box_buttons_row}>
              <Box style={styles.box_button}>
                <Button
                  style={styles.button}
                  onPress={() => {
                    this.FuncButtonFour();
                    this.FuncLawGame();
                  }}
                >
                  <Text style={styles.text_button}>
                    {this.state.TextButtonFour}
                  </Text>
                </Button>
              </Box>

              <Box style={styles.box_button}>
                <Button
                  style={styles.button}
                  onPress={() => {
                    this.FuncButtonFive();
                    this.FuncLawGame();
                  }}
                >
                  <Text style={styles.text_button}>
                    {this.state.TextButtonFive}
                  </Text>
                </Button>
              </Box>

              <Box style={styles.box_button}>
                <Button
                  style={styles.button}
                  onPress={() => {
                    this.FuncButtonSix();
                    this.FuncLawGame();
                  }}
                >
                  <Text style={styles.text_button}>
                    {this.state.TextButtonSix}
                  </Text>
                </Button>
              </Box>
            </Box>

            <Box style={styles.box_buttons_row}>
              <Box style={styles.box_button}>
                <Button
                  style={styles.button}
                  onPress={() => {
                    this.FuncButtonSeven();
                    this.FuncLawGame();
                  }}
                >
                  <Text style={styles.text_button}>
                    {this.state.TextButtonSeven}
                  </Text>
                </Button>
              </Box>

              <Box style={styles.box_button}>
                <Button
                  style={styles.button}
                  onPress={() => {
                    this.FuncButtonEight();
                    this.FuncLawGame();
                  }}
                >
                  <Text style={styles.text_button}>
                    {this.state.TextButtonEight}
                  </Text>
                </Button>
              </Box>

              <Box style={styles.box_button}>
                <Button
                  style={styles.button}
                  onPress={() => {
                    this.FuncButtonNine();
                    this.FuncLawGame();
                  }}
                >
                  <Text style={styles.text_button}>
                    {this.state.TextButtonNine}
                  </Text>
                </Button>
              </Box>
            </Box>
          </Box>
          {/* End Section Box Buttons */}

          {/* Start Section Box Result */}
          <Box name="Box_Score_Result" style={styles.box_score_result}>
            <Text style={styles.text_score_player_x}>
              Score Player X Is :{" "}
              <Text style={styles.text_score_player_x_score}>
                {this.state.ScorePlayerX}
              </Text>
            </Text>
            <Text style={styles.text_score_player_o}>
              Score Player O Is :{" "}
              <Text style={styles.text_score_player_o_score}>
                {this.state.ScorePlayerO}
              </Text>
            </Text>
            <Text style={styles.text_score_tie}>
              Tie :{" "}
              <Text style={styles.text_score_tie_score}>
                {this.state.ScoreTie}
              </Text>
            </Text>
            <Text style={styles.text_result}>
              Result Game Is :{" "}
              <Text style={styles.text_result_score}>
                {this.state.TextResult}
              </Text>
            </Text>
          </Box>
          {/* End Section Box Result */}

          {/* Start Section Box Reset Game */}
          <Box name="Box_Reset_Game" style={styles.box_reset_game}>
            <Button
              style={styles.button_reset}
              onPress={() => {
                this.FuncResetGame();
              }}
            >
              <Text style={styles.text_button_reset_game}>Reset Game</Text>
            </Button>
          </Box>
          {/* End Section Box Reset Game */}
        </Box>
        {/* End Section App */}
      </NativeBaseProvider>
    );
  }
  // End Section Render
}
/////////////////////////////////////////////////////////////////////////////////////// End Section Class
