import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import ScrollWithPadding from "../../components/ScrollWithPadding";
import Button from "../../components/Button";
import styles from "./style";

class ProfileScreen extends Component {
	render() {
		return (
			<ScrollWithPadding>
				<View style={{ height: 100, width: "100%" }} />
				<Text>This is profile screen.</Text>
				<Button
					text={"Logout"}
					iconName={"sign-out"}
					onPress={this.props.signOut}
					iconColor={"#fff"}
				/>
			</ScrollWithPadding>
		);
	}
}

ProfileScreen.propTypes = {};

export default ProfileScreen;