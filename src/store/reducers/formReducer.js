import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../utils/utils';
const initialState1 = {
  organizationName: '',
  repoName: '',
  showRepos: false
};

function handleOrganizationNameChange(state, name) {
  return updateObject(state, {organizationName: name});
}

function handleRepoNameChange(state, name) {
  return updateObject(state, {repoName: name});
}

function onRestartForm(state) {
  return updateObject(state, {
    'showRepos': false,
    'organizationName': '',
    'repoName': '',
  });
}

function onSearchClick(state) {
  return updateObject(state, {'showRepos': true});
}

export function formReducer(state = initialState1, action) {
  switch (action.type) {
    case actionTypes.HANDLE_ORGANIZATION_NAME_CHANGE:
      return handleOrganizationNameChange(state, action.name)
    case actionTypes.HANDLE_REPO_NAME_CHANGE:
      return handleRepoNameChange(state, action.name)
    case actionTypes.RESTART_FORM:
      return onRestartForm(state)
    case actionTypes.SEARCH_CLICK:
      return onSearchClick(state)
    default:
      return state
  }
}
