import React from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

import AuthScreen from "../containers/AuthScreenContainer";
import PersonalScreen from "../containers/PersonalScreenContainer";
import FeedScreen from "../containers/FeedScreenContainer";
import CategoriesScreen from "../containers/CategoriesScreenContainer";

import colors from "../theme/colors";

export const navTypes = {
	CATEGORIES: "categories",
	FEED: "feed",
	PERSONAL: "personal",

	AUTH: "auth",
	LOGGED: "logged"
};

const MainNavigator = TabNavigator(
	{
		[navTypes.PERSONAL]: {
			screen: PersonalScreen,
			navigationOptions: {
				// header: null,
				tabBarLabel: "Personal",
				tabBarIcon: <Icon name="person-outline" color={colors.white} />
			}
		},
		[navTypes.CATEGORIES]: {
			screen: CategoriesScreen,
			navigationOptions: {
				// header: null,
				tabBarLabel: "Categories",
				tabBarIcon: <Icon name="list" color={colors.white} />
			}
		},
		[navTypes.FEED]: {
			screen: FeedScreen,
			navigationOptions: {
				// header: null,
				tabBarLabel: "Feed",
				tabBarIcon: <Icon name="arrow-drop-down-circle" color={colors.white} />
			}
		}
	},
	{
		initialRouteName: navTypes.PERSONAL,
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