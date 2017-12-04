import React, { Component } from "react";
import Auth0 from 'react-native-auth0';
import PropTypes from "prop-types";
import { View, Text, Platform } from "react-native";
import ScrollWithPadding from "../../components/ScrollWithPadding";
import Button from "../../components/Button";
import styles from "./style";

import credentials from '../../config/auth0';

const auth0 = new Auth0(credentials);

class ProfileScreen extends Component {

  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
   if (Platform.OS === 'android') {
     this.setState({ accessToken: null });
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
				<View style={{ height: 100, width: "100%" }} />
				<Text>This is profile screen.</Text>
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

ProfileScreen.propTypes = {};

export default ProfileScreen;