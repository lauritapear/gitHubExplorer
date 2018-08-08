import * as actionTypes from './actionTypes';

export function handleOrganizationNameChange(name) {
  return {type: actionTypes.HANDLE_ORGANIZATION_NAME_CHANGE, name};
}

export function handleRepoNameChange(name) {
  return {type: actionTypes.HANDLE_REPO_NAME_CHANGE, name};
}

export function onRestartForm() {
  return {type: actionTypes.RESTART_FORM};
}

export function onRestartClick() {
  return {type: actionTypes.RESTART_CLICK, };
}

export function onSearchClick() {
  return {type: actionTypes.SEARCH_CLICK, };
}
