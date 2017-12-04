import { takeEvery, put, select } from 'redux-saga/effects';
import { initStart, initFinish } from '../modules/ui/actions';
import { navigateWithReset } from '../modules/navigation/actions';

export function* startupWorker() {
  try {
    console.log('starting up...');
  } catch (error) {
    console.log('err', error);
  } finally {
    yield put(initFinish());
  }
}

export function* applicationWatcher() {
  yield takeEvery(initStart, startupWorker);
}

export default applicationWatcher;
