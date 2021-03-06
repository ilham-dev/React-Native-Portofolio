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
  }

  state = {
    education: []
  };

  componentDidMount() {
    this.setState({ education: this.props.education });
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <Text style={[theme.fonts.header, { paddingLeft: 0 }]}>Education</Text>
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
                  "https://health.maryland.gov/tsd/PublishingImages/continuing-education-icon.gif?Mobile=1&Source=%2Ftsd%2F%5Flayouts%2Fmobile%2Fdispform%2Easpx%3FList%3D27ddee0d%252D16cc%252D4f0e%252Dac01%252Daf5c0aad861e%26View%3D19030058%252Dc301%252D4ed7%252D880e%252D82e6c4221800%26ID%3D152%26CurrentPage%3D1"
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
              data={this.state.education}
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

About.defaultProps = {
  education: mocks.education
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
  icons: {
    borderColor: "#fff",
    borderRadius: 85,
    borderWidth: 3,
    height: 40,
    marginBottom: 15,
    width: 40
  },
  list: {
    flex: 1
  }
});
