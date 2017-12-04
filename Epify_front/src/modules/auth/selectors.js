export const isAuthorisazed = state => state.auth.isAuthorized;

export const getSession = state => state.auth.session || {};

export const getToken = state => {
	return {};
};