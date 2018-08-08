import {combineReducers} from 'redux';
import {organizationReducer} from './organizationReducer';
import {repoCommitsReducer} from './repoCommitsReducer';
import {formReducer} from './formReducer';

const rootReducer = combineReducers(
  {
    organizationReducer,
    formReducer,
    repoCommitsReducer
  }
);

export default rootReducer;
