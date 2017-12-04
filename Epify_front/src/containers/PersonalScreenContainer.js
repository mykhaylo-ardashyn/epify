import { connect } from "react-redux";
import PersonalScreen from "../screens/Personal";
import { signOut } from "../modules/auth/actions";

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = {
  signOut
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalScreen);