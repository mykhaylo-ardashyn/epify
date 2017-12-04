import { handleActions } from 'redux-actions';
import { initFinish } from './actions';

const defaultState = {
  initialized: false
};

export default handleActions(
  {
    [initFinish]: state => ({
      ...state,
      initialized: true
    })
  },
  defaultState
);
