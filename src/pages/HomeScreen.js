import React, { Component, Fragment } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import rgba from "hex-to-rgba";
// import Icon from "react-native-vector-icons";
// alternative for expo LinearGradient
import LinearGradient from "react-native-linear-gradient";

import { Block, Badge, Card, Text } from "../components";
import { styles as blockStyles } from "../components/Block";
import { styles as cardStyles } from "../components/Card";
import { theme, mocks } from "../constants";

const { width } = Dimensions.get("window");

export default class Welcome extends Component {
  static navigationOptions = {
    headerTitle: <Text style={theme.fonts.header}>M Ilham Sabar</Text>,
    headerRight: (
      <TouchableOpacity>
        <Block flex={false} style={{ top: -17 }}>
          <Image
            resizeMode="contain"
            source={require("../assets/images/Icon/Menu.png")}
            style={{ width: 20, height: 24 }}
          />
          <Badge
            size={13}
            color={theme.colors.accent}
            style={{ position: "absolute", top: -4, right: -4 }}
          />
        </Block>
      </TouchableOpacity>
    )
  };

  renderHeader() {
    const { navigation } = this.props;

    return (
      <TouchableOpacity activeOpacity={0.8}>
        <Card
          shadow
          style={{ paddingVertical: theme.sizes.padding, marginVertical: 30 }}
        >
          <Image
            resizeMode="contain"
            source={require("../assets/images/Icon/More.png")}
            style={styles.moreIcon}
          />

          <Block>
            <Block center>
              <Image
                resizeMode="contain"
                source={require("../assets/profile.jpeg")}
                style={styles.avatarmember}
              />
              <Text title primary>
                Ilham Dev
              </Text>
              <Text spacing={0.7}>Location : Makassar, Indonesia</Text>
            </Block>

            <Block color="gray3" style={styles.hLine} />

            <Block row>
              <Block center>
                <Text
                  size={20}
                  spacing={0.6}
                  primary
                  style={{ marginBottom: 6 }}
                >
                  8
                </Text>
                <Text body spacing={0.7}>
                  Project
                </Text>
                <Text body spacing={0.7}>
                  Done
                </Text>
              </Block>

              <Block flex={false} color="gray3" style={styles.vLine} />

              <Block center>
                <Text
                  size={20}
                  spacing={0.6}
                  primary
                  style={{ marginBottom: 6 }}
                >
                  120
                </Text>
                <Text body spacing={0.7}>
                  Coffe
                </Text>
                <Text body spacing={0.7}>
                  Cup
                </Text>
              </Block>
            </Block>
          </Block>
        </Card>
      </TouchableOpacity>
    );
  }

  renderAwards() {
    return (
      <View
        // end={{ x: 1, y: 0 }}
        style={[blockStyles.row, cardStyles.card, styles.awards]}
        colors={["#FF988A", theme.colors.accent]}
      >
        <Block middle flex={0.4}>
          <Badge color={rgba(theme.colors.white, "0.2")} size={74}>
            <Badge color={rgba(theme.colors.white, "0.2")} size={52}>
              {/* <Icon.FontAwesome
                name="trophy"
                color="white"
                size={theme.sizes.h2}
              /> */}
            </Badge>
          </Badge>
        </Block>
        <Block middle>
          <Text size={theme.sizes.base} spacing={0.4} medium white>
            Wohoo!
          </Text>
          <Text size={theme.sizes.base} spacing={0.4} medium white>
            Safe Driver Trophy!
          </Text>
        </Block>
      </View>
    );
  }

  renderTrip = trip => {
    return (
      <Card shadow key={`trip-${trip.id}`}>
        <Block row space="between" style={{ marginBottom: theme.sizes.base }}>
          <Text spacing={0.5} caption>
            {trip.date}
          </Text>
          <Text spacing={0.5} caption medium primary />
          <Text spacing={0.5} caption>
            {trip.intervaldate}
          </Text>
        </Block>
        <Block row center>
          <Badge
            color={rgba(theme.colors.accent, "0.2")}
            size={14}
            style={{ marginRight: 8 }}
          >
            <Badge color={theme.colors.accent} size={8} />
          </Badge>
          <Text spacing={0.5} color="gray">
            {trip.name}
          </Text>
        </Block>

        <Block row center style={{ paddingVertical: 4 }}>
          <Badge color="gray2" size={4} style={{ marginLeft: 4.5 }} />
        </Block>

        <Block row center>
          <Badge
            color={rgba(theme.colors.primary, "0.2")}
            size={14}
            style={{ marginRight: 8 }}
          >
            <Badge color={theme.colors.primary} size={8} />
          </Badge>
          <Text spacing={0.5} color="gray">
            {trip.code}
          </Text>
        </Block>
      </Card>
    );
  };

  renderProject() {
    return (
      <React.Fragment>
        <Block style={{ marginBottom: theme.sizes.base }}>
          <Text spacing={0.4} transform="uppercase">
            Recent Project
          </Text>
        </Block>

        {mocks.project.map(projects => this.renderTrip(projects))}
      </React.Fragment>
    );
  }

  renderTripButton() {
    const { navigation } = this.props;

    return (
      <Block center middle style={styles.startTrip}>
        <Badge color={rgba(theme.colors.primary, "0.1")} size={144}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Repo")}
          >
            <Badge color={theme.colors.primary} size={62}>
              {/* <Icon.FontAwesome
                name="automobile"
                size={62 / 2.5}
                color="white"
              /> */}
            </Badge>
          </TouchableOpacity>
        </Badge>
      </Block>
    );
  }

  render() {
    return (
      <React.Fragment>
        <ScrollView style={styles.welcome}>
          {this.renderHeader()}
          {/* {this.renderAwards()} */}
          {this.renderProject()}
        </ScrollView>
        {/* {this.renderTripButton()} */}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    // paddingVertical: theme.sizes.padding,
    paddingHorizontal: theme.sizes.padding,
    backgroundColor: theme.colors.gray4,
    paddingBottom: 40
  },
  // horizontal line
  hLine: {
    marginVertical: theme.sizes.base * 2,
    marginHorizontal: theme.sizes.base * 2,
    height: 1
  },
  // vertical line
  vLine: {
    marginVertical: theme.sizes.base / 2,
    width: 1
  },
  awards: {
    padding: theme.sizes.base,
    marginBottom: theme.sizes.padding
  },
  moreIcon: {
    width: 16,
    height: 17,
    position: "absolute",
    right: theme.sizes.base,
    top: theme.sizes.base
  },
  avatarmember: {
    borderColor: "#fff",
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170
  },
  startTrip: {
    position: "absolute",
    left: (width - 144) / 2,
    bottom: 0
  }
});
