import { takeEvery, put, select } from "redux-saga/effects";
import { actionTypes } from "redux-query";
import { navigateWithReset } from "../modules/navigation/actions";
import { navTypes } from "../config/navigation";
import { signOut } from "../modules/auth/actions";
import Config from "../config/global";

export function* failureWorker(action) {
	console.log("authorization failed");
}

export function* routerWatcher() {
	yield takeEvery(
		[actionTypes.MUTATE_FAILURE, actionTypes.REQUEST_FAILURE],
		failureWorker
	);
}

export default routerWatcher;