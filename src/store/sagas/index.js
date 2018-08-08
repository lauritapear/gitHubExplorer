import {takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {getOrganizationReposDataSaga} from './organizationRepoSaga';
import {getRepoCommitsDataSaga} from './repoCommitsSaga';
import {handleRestartSaga} from './restartSaga';


export function * watchOrganizationRepos() {
  yield takeEvery(actionTypes.GET_ORGANIZATION_REPOS_DATA, getOrganizationReposDataSaga);
}

export function * watchRepoCommits() {
  yield takeEvery(actionTypes.GET_REPO_COMMITS_DATA, getRepoCommitsDataSaga);
}

export function * watchRestart() {
  yield takeEvery(actionTypes.RESTART_CLICK, handleRestartSaga);
}
