import React from "react";
import { StyleSheet, Font } from "react-native";
// import { AppLoading, Font } from "expo";

import Navigation from "./src/navigation";
import { Block, Text } from "./src/components";

export default class App extends React.Component {
  // add fonts support
  state = {
    isLoadingComplete: false
  };

  handleResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        "Rubik-Regular": require("./src/assets/fonts/Rubik-Regular.ttf"),
        "Rubik-Black": require("./src/assets/fonts/Rubik-Black.ttf"),
        "Rubik-Bold": require("./src/assets/fonts/Rubik-Bold.ttf"),
        "Rubik-Italic": require("./src/assets/fonts/Rubik-Italic.ttf"),
        "Rubik-Light": require("./src/assets/fonts/Rubik-Light.ttf"),
        "Rubik-Medium": require("./src/assets/fonts/Rubik-Medium.ttf")
      })
    ]);
  };

  render() {
    // if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
    //   return (
    //     <AppLoading
    //       startAsync={this.handleResourcesAsync}
    //       onError={error => console.warn(error)}
    //       onFinish={() => this.setState({ isLoadingComplete: true })}
    //     />
    //   );
    // }

    return (
      <Block>
        <Navigation />
      </Block>
    );
  }
}

const styles = StyleSheet.create({});
