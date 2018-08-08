import * as actionTypes from './actionTypes';

export function getRepoCommitsDataStart() {
  return {type: actionTypes.GET_REPO_COMMITS_DATA_START};
}

export function setRepoCommitsData(reposData) {
  return {type: actionTypes.SET_REPO_COMMITS_DATA, reposData};
}

export function fetchRepoCommitsDataFailed(er) {
  return {type: actionTypes.FETCH_REPO_COMMITS_DATA_FAIL, er};
}

export function getRepoCommitsData(organizationName, repoName) {
  return {
    type: actionTypes.GET_REPO_COMMITS_DATA,
    organizationName: organizationName,
    repoName: repoName
  }
}

export function onRestartRepoCommitsData() {
  return {type: actionTypes.RESTART_REPO_COMMITS_DATA};
}
