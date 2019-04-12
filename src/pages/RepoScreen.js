/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView
} from "react-native";
import Timeline from "react-native-timeline-listview";
import { theme, mocks } from "../constants";
import { Block, Badge, Card, Text, Progress } from "../components";

export default class Repo extends Component {
  constructor() {
    super();
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <Text style={[theme.fonts.header, { paddingLeft: 0 }]}>Skills</Text>
      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Block flex={false} style={{ top: -17 }}>
            <Image
              resizeMode="contain"
              source={require("../assets/images/Icon/Back.png")}
              style={{
                width: 20,
                height: 24,
                marginRight: theme.sizes.base
              }}
            />
          </Block>
        </TouchableOpacity>
      )
    };
  };

  render() {
    //'rgb(45,156,219)'
    return (
      <View style={styles.container}>
        <ScrollView style={styles.welcome}>
          {/* <Card shadow style={{ paddingVertical: theme.sizes.base * 2 }}> */}
          <ImageBackground
            source={{
              uri:
                "https://www.backgroundcheckall.com/wp-content/uploads/2017/12/background-gradient-blue.png"
            }}
            style={{
              position: "relative",
              top: 0,
              left: 0
            }}
          >
            <Card shadow style={{ marginBottom: theme.sizes.base }}>
              <Block>
                <Block row space="between" style={{ paddingLeft: 6 }}>
                  <Text body spacing={0.7}>
                    Breaking
                  </Text>
                  <Text caption spacing={0.7}>
                    8.1
                  </Text>
                </Block>
                <Progress value={0.81} />
              </Block>
            </Card>
          </ImageBackground>
          <Card shadow style={{ marginBottom: theme.sizes.base }}>
            <Block style={{ marginBottom: theme.sizes.base }}>
              <Block row space="between" style={{ paddingLeft: 6 }}>
                <Text body spacing={0.7}>
                  Speeding
                </Text>
                <Text caption spacing={0.7}>
                  9.8
                </Text>
              </Block>
              <Progress value={0.98} />
            </Block>
          </Card>
          <Card shadow style={{ marginBottom: theme.sizes.base }}>
            <Block style={{ marginBottom: theme.sizes.base }}>
              <Block row space="between" style={{ paddingLeft: 6 }}>
                <Text body spacing={0.7}>
                  Distracted Driving
                </Text>
                <Text caption spacing={0.7}>
                  7.4
                </Text>
              </Block>
              <Progress value={0.74} />
            </Block>
          </Card>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
    backgroundColor: theme.colors.gray4
  },
  list: {
    flex: 1
    // marginTop: 20
  }
});
