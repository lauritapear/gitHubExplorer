import {put} from 'redux-saga/effects';
import * as actions from '../actions';

export function * handleRestartSaga()
{
  yield put(actions.onRestartForm());
  yield put(actions.onRestartOrganizationData());
  yield put(actions.onRestartRepoCommitsData());

  // yield put(actions.onRestartPolyline());
}
