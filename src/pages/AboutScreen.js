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

export default class About extends Component {
  constructor() {
    super();
    this.data = [
      {
        time: "09:00",
        title: "Archery Training",
        description:
          "The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ",
        circleColor: "#009688",
        lineColor: "#009688"
      },
      {
        time: "10:45",
        title: "Play Badminton",
        description:
          "Badminton is a racquet sport played using racquets to hit a shuttlecock across a net."
      },
      { time: "12:00", title: "Lunch", icon: require("../assets/lunch.png") },
      {
        time: "14:00",
        title: "Watch Soccer",
        description:
          "Team sport played between two teams of eleven players with a spherical ball. ",
        lineColor: "#009688"
      },
      {
        time: "16:30",
        title: "Go to Fitness center",
        description: "Look out for the Best Gym & Fitness Centers around me :)",
        circleColor: "#009688"
      }
    ];
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <Text style={[theme.fonts.header, { paddingLeft: 0 }]}>Education</Text>
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
          <Timeline
            style={styles.list}
            data={this.data}
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
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white"
  },
  list: {
    flex: 1
    // marginTop: 20
  }
});
