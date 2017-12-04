import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements';
import colors from '../../theme/colors';

export default class Button extends Component {
	render(){
		return (
			<TouchableOpacity onPress={this.props.onPress} activeOpacity={0.3}>
		    <View style={[s.parent,this.props.style]}>
					<Icon
						name={this.props.iconName}
						type='font-awesome'
						color={colors.white}
						underlayColor='transparent'
						size={22}/>
					<Text
						style={[s.text,this.props.textStyle]}>
						{this.props.text}
					</Text>
				</View>
		  </TouchableOpacity>
		);
	}
}

Button.PropTypes = {
  onPress: PropTypes.func,
  text: PropTypes.string,
	iconName: PropTypes.string,
	style: PropTypes.object,
	iconStyle: PropTypes.object,
	textStyle: PropTypes.object,
}

const s = StyleSheet.create({
	parent:{
		flexDirection:'row',
		justifyContent:'flex-start',
		alignItems:'center',

		padding:10,
		marginTop: 10,

		backgroundColor:colors.black,
	},
	text:{
		color:colors.white,
		marginLeft:10,
		marginBottom:2,
		fontWeight: 'bold',
	}
});
