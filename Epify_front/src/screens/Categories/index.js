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
				<View style={{ height: 10, width: "100%" }} />
				<Text style={styles.title}>Categories</Text>
				<Button
					text={"Category 1"}
					iconName={"music"}
					onPress={() => {
						return alert('Hello');
					}}
					iconColor={"#fff"}
				/>
				<Button
					text={"Category 2"}
					iconName={"music"}
					onPress={() => {
						return alert('Hello');
					}}
					iconColor={"#fff"}
				/>
				<Button
					text={"Category 3"}
					iconName={"music"}
					onPress={() => {
						return alert('Hello');
					}}
					iconColor={"#fff"}
				/>
				<Button
					text={"Category 4"}
					iconName={"music"}
					onPress={() => {
						return alert('Hello');
					}}
					iconColor={"#fff"}
				/>
			</ScrollWithPadding>
		);
	}
}

ProfileScreen.propTypes = {};

export default ProfileScreen;