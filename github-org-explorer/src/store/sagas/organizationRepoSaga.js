import {put} from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions';

export function * getOrganizationReposDataSaga(action)
{
  yield put(actions.getOrganizationReposDataStart());
  const url = 'https://api.github.com/orgs';
  const repos ='repos';
  try {
    const response = yield axios.get(`${url}/${action.organizationName}/${repos}`);
    yield put(actions.setOrganizationReposData(response.data));
  } catch (error) {
    yield put(actions.fetchOrganizationReposDataFailed(error));
  }
}
