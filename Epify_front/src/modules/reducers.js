import { AsyncStorage } from "react-native";
import { persistCombineReducers } from "redux-persist";
import { entitiesReducer, errorsReducer } from "redux-query";
import queriesReducer from "./api/queriesReducer";
import ui from "./ui";
import navigation from "./navigation";

const config = {
	key: "primary",
	storage: AsyncStorage,
};

export default persistCombineReducers(config, {
	ui,
	navigation,
	entities: entitiesReducer,
	queries: queriesReducer,
	errors: errorsReducer
});