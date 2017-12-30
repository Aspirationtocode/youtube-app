import EStyleSheet from "react-native-extended-stylesheet";

const baseStyles = {
  borderRadius: 50,
  height: 50,
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: 12
};

export default EStyleSheet.create({
  positiveContainer: Object.assign({}, baseStyles, {
    backgroundColor: "#1AFF00"
  }),
  negativeContainer: Object.assign({}, baseStyles, {
    backgroundColor: "#FF0000",
    marginRight: 10
  }),
  text: {
    color: "#fff",
    backgroundColor: "transparent",
    fontSize: 24
  }
});
