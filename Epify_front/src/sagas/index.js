import { all } from "redux-saga/effects";
import api from "./api";
import application from "./application";
import auth from "./auth";
import stories from "./stories";

export default function* rootSaga() {
	yield all([
		api(), 
		application(), 
		auth(), 
		stories()
	]);
}