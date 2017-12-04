import { requestAsync, mutateAsync } from 'redux-query';
import { apiRequest, apiMutation } from '../modules/api/actions';
import { getToken } from '../modules/auth/selectors';
import config from './global';

const apiRequestType = apiRequest.toString();
const apiMutationType = apiMutation.toString();

export function getDefaultHeaders(state) {
  const token = getToken(state);

  return Object.assign(
    {},
    {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    token ? { Authorization: `Bearer ${token}` } : null
  );
}

export function makeData(action, headers = {}) {
  const { url, options, meta } = action.payload;

  return {
    ...action.payload,
    url: `${config.HOST}${config.NAMESPACE}${url}`,
    options: {
      headers: {
        ...headers,
        ...(options && options.headers)
      },
      method: options && options.method
    },
    meta: {
      initiatorAction: action,
      ...meta
    }
  };
}

const apiMiddleware = store => next => action => {
  const { type } = action;
  const state = store.getState();

  if (type === apiRequestType) {
    next(action);

    const promise = new Promise((resolve, reject) => {
      const requestPromise = next(
        requestAsync(makeData(action, getDefaultHeaders(state)))
      );

      if (!requestPromise) {
        resolve({});
      }

      requestPromise.then(response => {
        if (response.status < 200 || response.status >= 300) {
          reject(response);
        } else {
          resolve(response);
        }
      });
    });

    return promise;
  }

  if (type === apiMutationType) {
    next(action);

    const promise = new Promise((resolve, reject) => {
      const mutationPromise = next(
        mutateAsync(makeData(action, getDefaultHeaders(state)))
      );

      if (!mutationPromise) {
        resolve({});
      }

      mutationPromise.then(response => {
				console.log('resp', response)
        if (response.status < 200 || response.status >= 300) {
          reject(response);
        } else {
          resolve(response);
        }
      });
    });

    return promise;
  }

  return next(action);
};

export default apiMiddleware;
