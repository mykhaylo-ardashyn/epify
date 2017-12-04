import { connect } from "react-redux";
import ProfileScreen from "../screens/Profile";
import { signOut } from "../modules/auth/actions";

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = {
	signOut
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);