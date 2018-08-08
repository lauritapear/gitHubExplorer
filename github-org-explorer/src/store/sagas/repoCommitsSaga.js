import {put} from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions';

export function * getRepoCommitsDataSaga(action)
{
  yield put(actions.getRepoCommitsDataStart());
  const url = 'https://api.github.com/repos';
  const commits ='commits';
  try {
    const response = yield axios.get(`${url}/${action.organizationName}/${action.repoName}/${commits}`);
    yield put(actions.setRepoCommitsData(response.data));
  } catch (error) {
    yield put(actions.fetchRepoCommitsDataFailed(error));
  }
}
