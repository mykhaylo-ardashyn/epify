import { connect } from "react-redux";
import PersonalScreen from "../screens/Personal";
import { signOut } from "../modules/auth/actions";
import { loadStoriesRequest } from '../modules/stories/actions';

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = {
  signOut,
  loadStoriesRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalScreen);