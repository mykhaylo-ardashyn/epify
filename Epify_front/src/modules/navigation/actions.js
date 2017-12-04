import { NavigationActions } from 'react-navigation';

export const navigate = (routeName, params = {}) =>
  NavigationActions.navigate({ routeName, params });

export const navigateWithReset = (routeName, params = {}, routes = []) => {
  const actions = [...routes, routeName];

  return NavigationActions.reset({
    index: actions.length - 1,
    actions: actions.map(routeName => navigate(routeName, params))
  });
};

export const back = () => NavigationActions.back();
