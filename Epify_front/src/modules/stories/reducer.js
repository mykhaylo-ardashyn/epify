import { handleActions } from 'redux-actions';
import {
  loadstories,
  loadStoriesFailed
} from './actions';

const defaultState = {
  stories: []
};

export default handleActions(
  {
    [loadstories]: (state, { payload }) => ({
      ...state,
      stories: payload
    }),
    [loadStoriesFailed]: (state) => ({
      ...state,
      error: true
    })
  },
  defaultState
);
