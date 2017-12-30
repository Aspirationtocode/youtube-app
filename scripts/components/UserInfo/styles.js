import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  $imageSize: 120,
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center"
  },
  photoWrapper: {
    shadowColor: "rgba(0, 0, 0, .26)",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 6
  },
  photo: {
    width: "$imageSize",
    height: "$imageSize",
    borderRadius: "$imageSize * .5",
    borderColor: "rgba(255, 255, 255, .7)",
    borderWidth: 3
  },
  pointsContainer: {
    flexDirection: "row"
  },
  userName: {
    fontSize: 28,
    color: "$mainDarkColor"
  },
  leftInfoContainer: {
    justifyContent: "space-between",
    height: "100%"
  }
});
