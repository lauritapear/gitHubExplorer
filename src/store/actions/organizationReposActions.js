import * as actionTypes from './actionTypes';

export function getOrganizationReposDataStart() {
  return {type: actionTypes.GET_ORGANIZATION_REPOS_DATA_START};
}

export function setOrganizationReposData(reposData) {
  return {type: actionTypes.SET_ORGANIZATION_REPOS_DATA, reposData};
}

export function fetchOrganizationReposDataFailed(er) {
  return {type: actionTypes.FETCH_ORGANIZATION_REPOS_DATA_FAIL, er};
}

export function getOrganizationReposData(organizationName) {
  return {
    type: actionTypes.GET_ORGANIZATION_REPOS_DATA,
    organizationName: organizationName
  }
}

export function onRestartOrganizationData() {
  return {type: actionTypes.RESTART_ORGANIZATION_DATA};
}
