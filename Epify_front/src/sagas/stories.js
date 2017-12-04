import { takeEvery, put, select } from 'redux-saga/effects';
import { loadStoriesRequest, loadstories } from '../modules/stories/actions';

export function* storiesWorker() {
  try {
    console.log('getting stories...');
    try {
	    yield put(loadstories());
    } catch(error){
    	console.log('stories loading error');
    	console.log(error);
    }

  } catch (error) {
    console.log('err', error);
  } finally {
    yield alert('something wrong with getting stories');
  }
}

export function* storiesWatcher() {
  yield takeEvery(loadStoriesRequest, storiesWorker);
}

export default storiesWatcher;