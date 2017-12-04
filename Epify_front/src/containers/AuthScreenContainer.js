import { connect } from "react-redux";
import AuthScreen from "../screens/Auth";
import { signIn } from "../modules/auth/actions";

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = {
	signIn
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);