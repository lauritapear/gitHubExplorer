import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../utils/utils';

const initialState2 = {
  loadingCommits: false,
  errorCommits: false,
  commitsData: []
};

function getRepoCommitsDataStart(state) {
  return updateObject(state, {loadingCommits: true});
}

function fetchRepoCommitsDataFailed(state) {
  return updateObject(state, {
    'loadingCommits': false,
    'errorCommits':true
  });
}

function setRepoCommitsData(state, reposData) {
  return updateObject(state, {
    'commitsData': reposData,
    'loadingCommits': false});
}

function onRestartRepoCommitsData(state) {
  let theData = state.commitsData;
  theData = theData.slice(0,0);
  return updateObject(state, {
    'commitsData': theData,
    'loadingCommits': false,
    'errorCommits':false });
}

export function repoCommitsReducer(state = initialState2, action) {
  switch (action.type) {
    case actionTypes.FETCH_REPO_COMMITS_DATA_FAIL:
      return fetchRepoCommitsDataFailed(state, action.error)
    case actionTypes.SET_REPO_COMMITS_DATA:
      return setRepoCommitsData(state, action.reposData)
    case actionTypes.GET_REPO_COMMITS_DATA_START:
      return getRepoCommitsDataStart(state, action)
    case actionTypes.RESTART_REPO_COMMITS_DATA:
      return onRestartRepoCommitsData(state)
    default:
      return state
  }
}
