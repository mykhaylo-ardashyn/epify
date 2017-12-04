import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import ScrollWithPadding from "../../components/ScrollWithPadding";
import Button from "../../components/Button";
import Sound from "react-native-sound";
import styles from "./style";

class HomeScreen extends Component {
	constructor(props){
		super(props);
		// this.state = {
		// 	sound: {}
		// }
	}
	componentDidMount() {
		// Enable playback in silence mode
		// Sound.setCategory("Playback", true);

		// this.loadSound();
	}
	loadSound() {
		// Load the sound file 'whoosh.mp3' from the app bundle
		// // See notes below about preloading sounds within initialization code below.
		// let whoosh = new Sound(
		// 	"https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3",
		// 	error => {
		// 		if (error) {
		// 			console.log("failed to load the sound", error);
		// 			return;
		// 		}
		// 		// loaded successfully
		// 		console.log(
		// 			"duration in seconds: " +
		// 				whoosh.getDuration() +
		// 				"number of channels: " +
		// 				whoosh.getNumberOfChannels();
		// 		);
		// 	}
		// );

		// this.setState({
		// 	sound: whoosh
		// });
	}
	playSound(){
		// Play the sound with an onEnd callback
		// this.state.sound.play(() => {
		// 	console.log("sound played");
		// 	whoosh.release();
		// });
	}
	render() {
		return (
			<ScrollWithPadding>
				<View style={{ height: 100, width: "100%" }} />
				<Text>This is home screen.</Text>
				<Button
					text={"Play sound"}
					iconName={"music"}
					onPress={this.playSound}
					iconColor={"#fff"}
				/>
			</ScrollWithPadding>
		);
	}
}

HomeScreen.propTypes = {};

export default HomeScreen;