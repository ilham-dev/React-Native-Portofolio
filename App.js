import React from "react";
import { StyleSheet, Font, ImageBackground } from "react-native";
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
        <ImageBackground
          source={{
            uri:
              "https://i.pinimg.com/564x/68/bc/eb/68bcebd93d822b35df5f6a2b4a7c4e4c.jpg"
          }}
          style={{ flex: 1 }}
        >
          <Navigation />
        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({});
