import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import ScrollWithPadding from "../../components/ScrollWithPadding";
import styles from "./style";

class FeedScreen extends Component {
	render() {
		return (
			<ScrollWithPadding>
				<View style={{ height: 100, width: "100%", backgroundColor: 'red' }} />
				<Text>This is feed screen.</Text>
			</ScrollWithPadding>
		);
	}
}

FeedScreen.propTypes = {};

export default FeedScreen;