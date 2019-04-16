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
        time: "2011 - 2016",
        title: "Universitas Islam Negeri Alauddin Makassar",
        description:
          "Salah satu universitas negeri di makassar, dengan mengambil jurusan Teknik Informatika. ",
        circleColor: "#009688",
        lineColor: "#009688"
      },
      {
        time: "2008 - 2011",
        title: "SMA Negeri 3 Pasangkayu",
        description:
          "sekolah yang tepat di samping SMP saya, dan mengambilan jurusan IPA."
      },
      {
        time: "2005 - 2008",
        title: "SMP Negeri 4 Pasangkayu",
        description:
          "salah satu sekolah ternama di kampung saya, yang waktuh tempuh dari rumah ke sekolah bisa sampai 1 jam dengan menggunakan mobil truck, suka duka di lalui bersama .",
        lineColor: "#009688"
      },
      {
        time: "1999 - 2005",
        title: "SD Inpres Motu",
        description:
          "SD Inpress Motu Terletak di kabupaten mamuju utara, sulawesi barat",
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
