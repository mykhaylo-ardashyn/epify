import { connect } from "react-redux";
import CategoriesScreen from "../screens/Categories";
import { signOut } from "../modules/auth/actions";

const mapStateToProps = state => {
	return {};
};

const mapDispatchToProps = {
	signOut
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesScreen);