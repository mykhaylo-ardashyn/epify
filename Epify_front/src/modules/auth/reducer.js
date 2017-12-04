import { handleActions } from "redux-actions";
import {
  attachToken,
  detachSession,
  attachUser,
  signInCancel
} from "./actions";

const defaultState = {
  isAuthorized: false,
  session: {},
  isLoading: false
};

export default handleActions(
  {
    [attachSession]: (state, { payload }) => ({
      ...state,
      session: payload,
      isAuthorized: true
    }),
    [detachSession]: () => defaultState,
    [attachToken]: (state, { payload }) => ({
      ...state,
      token: payload
    }),
    [signInCancel]: (state, { payload }) => ({
      ...state,
      isLoading: false
    }),
    ["Navigation/RESET"]: (state, { payload }) => ({
      ...state,
      isLoading: false
    })
  },
  defaultState
);