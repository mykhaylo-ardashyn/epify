import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

export default StyleSheet.create({
  squaresHolder: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",

    textAlign: "left"
  }
});