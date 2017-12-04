import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import ScrollWithPadding from "../../components/ScrollWithPadding";
import Button from "../../components/Button";
import styles from "./style";

class AuthScreen extends Component {
	render() {
		return (
			<ScrollWithPadding>
				<View style={{ height: 200, width: "100%" }} />
				<Text>This is auth screen.</Text>
				<Button
					text={"Proceed login"}
					iconName={"sign-in"}
					onPress={this.props.signIn}
					iconColor={"#fff"}
				/>
			</ScrollWithPadding>
		);
	}
}

AuthScreen.propTypes = {};

export default AuthScreen;