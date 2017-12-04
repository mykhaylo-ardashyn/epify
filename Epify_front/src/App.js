import React from "react";
import { View } from "react-native";
import { Provider, connect } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import NavigatorContainer from "./containers/NavigatorContainer";
import configureStore from "./config/store";
import reducers from "./modules/reducers";
import rootSaga from "./sagas";

const { persistor, store  } = configureStore(reducers, rootSaga);

const AppReady = ({ initialized, children }) => (
	<View style={{ flex: 1 }}>{initialized && children}</View>
);

const AppReadyContainer = connect(({ ui }) => ({
  initialized: ui.initialized
}))(AppReady);

const App = () => (
	<PersistGate persistor={persistor}>
		<Provider store={store}>
			<AppReadyContainer>
				<NavigatorContainer />
			</AppReadyContainer>
		</Provider>
	</PersistGate>
);

export default App;