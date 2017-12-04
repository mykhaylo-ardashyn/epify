import { all } from "redux-saga/effects";
import apiSaga from "./api";
import application from "./application";
import auth from "./auth";

export default function* rootSaga() {
	yield all([apiSaga(), application(), auth()]);
}