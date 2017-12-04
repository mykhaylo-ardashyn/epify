import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import s from './style';

class ScrollWithPadding extends Component{
	render(){
		return(
			<ScrollView contentContainerStyle={[s.container, this.props.style]}>
				<View style={s.paddingLine} />
				{this.props.children}
				<View style={s.paddingLine} />
			</ScrollView>
		);
	}
}

export default ScrollWithPadding;
