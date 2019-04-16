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
  ScrollView
} from "react-native";
import Timeline from "react-native-timeline-listview";
import { theme, mocks } from "../constants";
import { Block, Badge, Card, Text } from "../components";

export default class Experience extends Component {
  constructor() {
    super();
    // mocks.experience;
  }

  state = {
    experience: []
  };

  componentDidMount() {
    this.setState({ experience: this.props.experience });
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <Text style={[theme.fonts.header, { paddingLeft: 0 }]}>Experience</Text>
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
          <Block center style={{ marginBottom: -30 }}>
            <Image
              resizeMode="contain"
              source={{
                uri:
                  "https://botcore.ai/wp-content/uploads/2018/04/quality-assurance.png"
              }}
              style={styles.avatarmember}
            />
          </Block>
          <Block
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 20,
              marginBottom: 20
              // position: ""
            }}
          >
            <Timeline
              style={styles.list}
              data={this.state.experience}
              circleSize={20}
              circleColor="rgb(45,156,219)"
              lineColor="rgb(45,156,219)"
              timeContainerStyle={{ minWidth: 52, marginTop: 0 }}
              timeStyle={{
                textAlign: "center",
                backgroundColor: "#ff9797",
                color: "white",
                padding: 5,
                borderRadius: 13
              }}
              descriptionStyle={{ color: "gray" }}
              options={{
                style: { paddingTop: 5 }
              }}
              innerCircle={"dot"}
            />
          </Block>
        </ScrollView>
      </View>
    );
  }
}

Experience.defaultProps = {
  experience: mocks.experience
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
  avatarmember: {
    // borderColor: "#fff",
    borderRadius: 85,
    borderWidth: 3,
    height: 80,
    marginBottom: 15,
    width: 80,
    resizeMode: "contain",
    zIndex: 1
  },
  container: {
    flex: 1,
    // padding: 20,
    backgroundColor: "white"
  },
  list: {
    flex: 1
    // marginTop: 20
  }
});
