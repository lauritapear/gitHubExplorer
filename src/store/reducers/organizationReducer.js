import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../utils/utils';

const initialState = {
  loading: false,
  error: false,
  repoData: []
};

function getOrganizationReposDataStart(state) {
  return updateObject(state, {loading: true});
}

function fetchOrganizationReposDataFailed(state) {
  return updateObject(state, {
    'loading': false,
    'error':true
  });
}

function compareForks(a, b) {
  return b.forks_count - a.forks_count;
}

function setOrganizationReposData(state, reposData) {
  let sortedData = reposData;
  sortedData.sort(compareForks);
  return updateObject(state, {
    'repoData': sortedData,
    'loading': false});
}

function onRestartOrganizationData(state) {
  let organizationData = state.repoData;
  organizationData = organizationData.slice(0,0);
  return updateObject(state, {
    'repoData': organizationData,
    'loading': false,
    'error':false });
}

export function organizationReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_ORGANIZATION_REPOS_DATA_FAIL:
      return fetchOrganizationReposDataFailed(state, action.error)
    case actionTypes.SET_ORGANIZATION_REPOS_DATA:
      return setOrganizationReposData(state, action.reposData)
    case actionTypes.GET_ORGANIZATION_REPOS_DATA_START:
      return getOrganizationReposDataStart(state, action)
    case actionTypes.RESTART_ORGANIZATION_DATA:
      return onRestartOrganizationData(state)
    default:
      return state
  }
}
