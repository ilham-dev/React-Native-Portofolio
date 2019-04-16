import * as React from "react";
import {
  StyleSheet,
  Dimensions,
  Platform,
  ImageBackground
} from "react-native";
import { Block, Text, Progress } from "../components";
import { theme, mocks } from "../constants";
const { width } = Dimensions.get("window");

const ImageBackgrounds = props => (
  <ImageBackground
    source={{
      uri:
        "https://colorlib.com/preview/theme/sierra/img/home-slider/slider-bg-1.png"
    }}
    style={{
      resizeMode: "stretch",
      padding: 20,
      padding: 20,
      marginBottom: theme.sizes.base
    }}
    imageStyle={{ borderRadius: 25 }}
  >
    <Block>
      <Block row space="between" style={{ paddingLeft: 6 }}>
        <Text body spacing={0.7} black bold>
          {props.data.name}
        </Text>
        <Text caption spacing={0.7} black bold>
          {props.data.point}
        </Text>
      </Block>
      <Progress value={props.data.grade} />
    </Block>
  </ImageBackground>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    ...Platform.select({
      ios: {
        // margin: 1
      },
      android: {
        margin: 10
      }
    }),
    marginTop: 10,
    borderRadius: 10
  }
});

export default ImageBackgrounds;
