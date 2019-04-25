/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Card,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import Timeline from "react-native-timeline-listview";
import { theme, mocks } from "../constants";
import {
  Block,
  Badge,
  Card as Kartu,
  Text,
  ImageBackground
} from "../components";

export default class Skill extends Component {
  constructor() {
    super();
  }

  state = {
    skill: []
  };

  componentDidMount() {
    this.setState({ skill: this.props.skill });
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <Text style={[theme.fonts.header, { paddingLeft: 0 }]}>Skills</Text>
      ),
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.goBack(null)}>
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
          {/* <K shadow style={{ paddingVertical: theme.sizes.base * 2 }}> */}
          {this.state.skill.map((obj, index) => (
            <ImageBackground key={index} data={obj} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

Skill.defaultProps = {
  skill: mocks.skill
};

const styles = StyleSheet.create({
  welcome: {
    // flex: 1,
    // paddingVertical: theme.sizes.padding,
    paddingHorizontal: theme.sizes.padding,
    backgroundColor: theme.colors.gray4,
    paddingBottom: 40,
    paddingTop: 20
  },
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  list: {
    flex: 1
    // marginTop: 20
  }
});
