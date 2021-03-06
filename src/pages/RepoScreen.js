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
import Axios from "axios";

export default class Repo extends Component {
  constructor() {
    super();
  }

  state = {
    skill: []
  };

  componentDidMount() {
    this.setState({ skill: this.props.skill });
    this.getRepo();
  }

  getRepo() {
    Axios.get("https://api.github.com/users/ilham-dev/repos")
      .then(response => {
        console.log("response -->", response.data);
        this.setState({ skill: response.data });
      })
      .catch(error => {
        console.log("error get user -->", error);
      });
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

Repo.defaultProps = {
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
