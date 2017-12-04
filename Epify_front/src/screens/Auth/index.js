import React, { Component } from "react";
import Auth0 from 'react-native-auth0';
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import ScrollWithPadding from "../../components/ScrollWithPadding";
import Button from "../../components/Button";
import styles from "./style";

import credentials from '../../config/auth0';

const auth0 = new Auth0(credentials);

class AuthScreen extends Component {

	constructor(props) {
		super(props);

		this.handleLogin = this.handleLogin.bind(this);
	}

	handleLogin() {
    auth0.webAuth
      .authorize({
        scope: 'openid profile',
        audience: 'https://' + credentials.domain + '/userinfo'
      })
      .then(credentials => {
        // Alert.alert(
        //   'Success',
        //   'AccessToken: ' + credentials.accessToken,
        //   [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        //   { cancelable: false }
        // );
        this.props.signIn();
      })
      .catch(error => console.log(error));
	}

	render() {
		return (
			<ScrollWithPadding>
				<View style={{ height: 200, width: "100%" }} />
				<Text>This is auth screen.</Text>
				<Button
					text={"Proceed login"}
					iconName={"sign-in"}
					onPress={this.handleLogin}
					iconColor={"#fff"}
				/>
			</ScrollWithPadding>
		);
	}
}

AuthScreen.propTypes = {};

export default AuthScreen;