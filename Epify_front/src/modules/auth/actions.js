import { createAction } from "redux-actions";

export const signIn = createAction("SIGN_IN");
export const signInCancel = createAction("SIGN_IN_CANCEL");
export const signOut = createAction("SIGN_OUT");

export const attachSession = createAction("ATTACH_SESSION");
export const detachSession = createAction("DETACH_SESSION");
export const attachUser = createAction("ATTACH_USER");
export const attachToken = createAction("ATTACH_TOKEN");