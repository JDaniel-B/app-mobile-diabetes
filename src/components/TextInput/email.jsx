import React from "react";
import { StyleSheet, TextInput } from "react-native";
import theme from "../../theme.js";

function InputEmail({ color, fontSize, ...restOfProps }) {
  const inputStyles = [
    color == "primary" && theme.colors.primary,
    fontSize == "big" && styles.fontBig,
  ];

  return <TextInput style={inputStyles} {...restOfProps} />;
}

const styles = StyleSheet.create({
  fontBig: {
    fontSize: theme.fontSizes.big,
  },
});

export default InputEmail;
