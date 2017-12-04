import { connect } from "react-redux";
import { addNavigationHelpers } from "react-navigation";
import Navigator from "../config/navigation";

const mapStateToProps = ({ navigation }) => ({ navigation });
const mergeProps = (stateProps, dispatchProps) => ({
	navigation: addNavigationHelpers({
		dispatch: dispatchProps.dispatch,
		state: stateProps.navigation
	})
});

export default connect(mapStateToProps, null, mergeProps)(Navigator);