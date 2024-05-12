import { StyleSheet } from "react-native";

export const stylesNavBar = StyleSheet.create({
  navbar: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    height: "auto",
    display: "flex",
    justifyContent: "space-between",
    gap: 10,
    paddingHorizontal: 25,
    paddingVertical: 15,
    alignItems: "center",
  },

  Dropdown_item: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },

  containerUser: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
    flexDirection: "row",
  },

  logo: {
    width: 150,
    height: 150,
    fontSize: 150,
    padding: 10,
  },

  icons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 30,
  },
});
