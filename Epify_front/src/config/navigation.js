import React from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

import AuthScreen from "../containers/AuthScreenContainer";
import HomeScreen from "../containers/HomeScreenContainer";
import FeedScreen from "../containers/FeedScreenContainer";
import ProfileScreen from "../containers/ProfileScreenContainer";

import colors from "../theme/colors";

export const navTypes = {
	HOME: "home",
	FEED: "feed",
	PROFILE: "profile",

	AUTH: "auth",
	LOGGED: "logged"
};

const MainNavigator = TabNavigator(
	{
		[navTypes.HOME]: {
			screen: HomeScreen,
			navigationOptions: {
				// header: null,
				tabBarLabel: "Home",
				tabBarIcon: <Icon name="home" color={colors.white} />
			}
		},
		[navTypes.FEED]: {
			screen: FeedScreen,
			navigationOptions: {
				// header: null,
				tabBarLabel: "Feed",
				tabBarIcon: <Icon name="arrow-drop-down-circle" color={colors.white} />
			}
		},
		[navTypes.PROFILE]: {
			screen: ProfileScreen,
			navigationOptions: {
				// header: null,
				tabBarLabel: "Profile",
				tabBarIcon: <Icon name="person-outline" color={colors.white} />
			}
		}
	},
	{
		initialRouteName: navTypes.HOME,
		tabBarPosition: "bottom",
		tabBarOptions: {
			style: {
				backgroundColor: colors.black
			},
			labelStyle: {
				fontSize: 14,
				color: colors.white
			}
		}
	}
);

export default StackNavigator(
	{
		[navTypes.AUTH]: {
			screen: AuthScreen,
			navigationOptions:{
				title:'Auth screen'
			}
		},
		[navTypes.LOGGED]: {
			screen: MainNavigator,
			navigationOptions:{
				title:'Logged in screen',
				header: null,
				gesturesEnabled: false,
			}
		}
	},
	{
		initialRouteName: navTypes.AUTH,
		lazy: true,
	}
);