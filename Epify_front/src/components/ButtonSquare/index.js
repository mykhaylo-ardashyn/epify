import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { Icon } from "react-native-elements";
import s from "./style";
import colors from "../../theme/colors";

class ButtonSquare extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<TouchableOpacity
				style={s.squareContainer}
				onPress={this.props.onPress}
			>
				<Image
					style={{ width: 100, height: 100 }}
					source={{
						uri:this.props.img
					}}
				/>
				<View style={s.squareTitle}>
					<Text style={s.squareTitleText}>{this.props.label}</Text>
				</View>
				<View style={s.playIcon}>
					<Icon
						name='play-circle'
						type='font-awesome'
						color={colors.orange}
						underlayColor='transparent'
						size={60}
					/>
				</View>
			</TouchableOpacity>
		);
	}
}

ButtonSquare.propTypes = {};

export default ButtonSquare;