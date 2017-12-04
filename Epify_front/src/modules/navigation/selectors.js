export const getNavigation = state => state.navigation || {};

export const getCurrentRoute = state => state.navigation.routes[state.navigation.index];
