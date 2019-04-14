import React, { Component } from "react";
import { StyleSheet, ImageBackground } from "react-native";

import { theme } from "../constants";

export default class CardImage extends Component {
  render() {
    const { color, style, children, ...props } = this.props;
    const cardStyles = [styles.card, style];

    return (
      <ImageBackground imageStyle={cardStyles} {...props}>
        {children}
      </ImageBackground>
    );
  }
}

export const styles = StyleSheet.create({
  card: {
    borderRadius: theme.sizes.border
  }
});
