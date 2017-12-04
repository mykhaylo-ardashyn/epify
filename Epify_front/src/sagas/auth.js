import { takeEvery, put, call, select } from "redux-saga/effects";
import {
	signIn,
	signInCancel,
	signOut,
	attachSession,
	detachSession,
	attachUser
} from "../modules/auth/actions";
import { navigateWithReset, navigate } from "../modules/navigation/actions";
import { navTypes } from "../config/navigation";
import config from "../config/global";

export function* signInWorker({ payload = {} }) {
	try {
		console.log('pretending that user logged in');
		yield put(navigate(navTypes.LOGGED));
	} catch (error) {
		console.log(error);
		alert("User or session opening issue:", error);
	}
}

export function* signOutWorker() {
	yield put(navigateWithReset(navTypes.AUTH));
}

export function* routerWatcher() {
	yield takeEvery(signIn, signInWorker);
	yield takeEvery(signOut, signOutWorker);
}
export default routerWatcher;