import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  buttonStyle: {
    height: 60,
    maxWidth: 200,
    backgroundColor: "$mainColor",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(0, 0, 0, .16)",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 6
  },
  text: {
    fontSize: 23,
    color: "#5E3C14"
  }
});
