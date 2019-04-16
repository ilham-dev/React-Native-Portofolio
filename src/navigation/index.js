import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";

import Home from "../pages/HomeScreen";
import Repo from "../pages/RepoScreen";
import About from "../pages/AboutScreen";
import Experience from "../pages/ExperienceScreen";

import { theme } from "../constants";

const screens = createStackNavigator(
  {
    Home,
    Repo,
    About,
    Experience
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: 60,
        backgroundColor: theme.colors.gray4,
        borderBottomColor: "transparent"
      },
      headerTitleContainerStyle: {
        alignItems: "flex-end",
        paddingLeft: theme.sizes.padding
      },
      headerLeftContainerStyle: {
        alignItems: "flex-end",
        marginLeft: theme.sizes.padding,
        paddingRight: theme.sizes.base
      },
      headerRightContainerStyle: {
        alignItems: "flex-end",
        marginRight: theme.sizes.padding
      }
    },
    headerLayoutPreset: "left"
  }
);

export default createAppContainer(screens);
