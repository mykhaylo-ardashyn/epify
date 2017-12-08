import React, { Component } from "react";
import Auth0 from 'react-native-auth0';
import PropTypes from "prop-types";
import {View, Text, Platform} from "react-native";
import ScrollWithPadding from "../../components/ScrollWithPadding";
import Button from "../../components/Button";
import ButtonSquare from "../../components/ButtonSquare";
import Sound from "react-native-sound";
import styles from "./style";

import credentials from '../../config/auth0';

const auth0 = new Auth0(credentials);

class PersonalScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sounds: {
				whoosh: {},
				secondSound: {}
			}
		};

    this.handleLogout = this.handleLogout.bind(this);
		this.loadSound = this.loadSound.bind(this);
		this.playSound = this.playSound.bind(this);
	}
	componentDidMount() {
		// Enable playback in silence mode
		Sound.setCategory("Playback");

		this.loadSound();
	}
	loadSound() {
		// Load the sound file 'whoosh.mp3' from the app bundle
		// See notes below about preloading sounds within initialization code below.
		let whoosh = new Sound(
			"https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3",
			undefined,
			error => {
				if (error) {
					console.log("failed to load the sound", error);
					return;
				}
				// loaded successfully
				console.log(
					"whoosh duration in seconds: " +
						whoosh.getDuration() +
						"number of channels: " +
						whoosh.getNumberOfChannels()
				);

				let sounds = this.state.sounds;

				sounds["whoosh"] = whoosh;

				this.setState({
					sounds
				});

				console.log("sound object from state");
				console.log(this.state.sounds.whoosh);
			}
		);

		let secondSound = new Sound(
			"https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/frog.wav",
			undefined,
			error => {
				if (error) {
					console.log("failed to load the sound", error);
					return;
				}
				// loaded successfully
				console.log(
					"secondSound duration in seconds: " +
						whoosh.getDuration() +
						"number of channels: " +
						whoosh.getNumberOfChannels()
				);

				let sounds = this.state.sounds;

				sounds["secondSound"] = secondSound;

				this.setState({
					sounds
				});

				console.log("sound object from state");
				console.log(this.state.sounds.secondSound);
			}
		);
		console.log("all sounds loaded");
	}
	playSound(soundName) {
		// Play the sound with an onEnd callback
		this.state.sounds[soundName].play(error => {
			if (error) {
				console.log("error playing sound: ", error);
			}

			console.log(`sound named ${soundName} played`);

			// this.state.sounds[soundName].release();
		});
	}

  handleLogout() {
    if (Platform.OS === 'android') {
      this.props.signOut();
    } else {
      auth0.webAuth
        .clearSession({})
        .then(success => {
          this.props.signOut();
        })
        .catch(error => console.log(error));
    }
  }

	render() {
		return (
			<ScrollWithPadding>
				<View style={{ height: 10, width: "100%" }} />
				<Button
					text={"Get stories"}
					iconName={"download"}
					onPress={this.props.loadStoriesRequest}
					iconColor={"#fff"}
				/>
				<Text style={styles.title}>Recenlty used</Text>

				<View style={styles.squaresHolder}>
				<ButtonSquare
					label="Whoosh"
					img= "https://facebook.github.io/react-native/docs/assets/favicon.png"
					onPress={() => {
						return this.playSound("whoosh");
					}}
				/>
				<ButtonSquare
					label="Frog"
					img= "https://facebook.github.io/react-native/docs/assets/favicon.png"
					onPress={() => {
						return this.playSound("secondSound");
					}}
				/>
				<ButtonSquare
					label="Sound"
					img= "https://facebook.github.io/react-native/docs/assets/favicon.png"
					onPress={() => {

					}}
				/>
				<ButtonSquare
					label="Sound"
					img= "https://facebook.github.io/react-native/docs/assets/favicon.png"
					onPress={() => {
					}}
				/>
				<ButtonSquare
					label="Sound"
					img= "https://facebook.github.io/react-native/docs/assets/favicon.png"
					onPress={() => {

					}}
				/>
				<ButtonSquare
					label="Sound"
					img= "https://facebook.github.io/react-native/docs/assets/favicon.png"
					onPress={() => {

					}}
				/>
				</View>
				<Text style={styles.title}>Favourites</Text>
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
        <Text style={styles.title}>Logout</Text>
        <Button
          text={"Logout"}
          iconName={"sign-out"}
          onPress={this.handleLogout}
          iconColor={"#fff"}
        />
			</ScrollWithPadding>
		);
	}
}

// <Button
	// text={"Show state"}
	// iconName={"bars"}
	// onPress={() => {
	// 	console.log(this.state);
	// }}
	// iconColor={"#fff"}
// />
// <Button
	// text={"Play sound whoosh"}
	// iconName={"music"}
	// onPress={() => {
	// 	return this.playSound("whoosh");
	// }}
	// iconColor={"#fff"}
// />
// <Button
// 	text={"Play secondSound"}
// 	iconName={"music"}
// 	onPress={() => {
// 		return this.playSound("secondSound");
// 	}}
// 	iconColor={"#fff"}
// />

PersonalScreen.propTypes = {};

export default PersonalScreen;