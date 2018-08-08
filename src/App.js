import React, { Component } from 'react';
import {connect} from 'react-redux';
import Dock from 'react-dock';
import * as actionCreators from './store/actions/index';
import './App.css';
import { SearchForm } from './components';
import { RepoTable } from './components';
import { CommitsTable } from './components';

const styles = {
  root: {
    fontSize: '14px',
    color: '#546e7a',
    height: '100vh'
  },
  main: {
    width: '100%',
    height: '280%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '30vh'
  },
  dockContent: {
    // width: '150%',
    // height: '150%',
    top: '10px',
    right: '10px',
    left: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'fixed'
  },

  remove: {
    position: 'absolute',
    zIndex: 1,
    right: '10px',
    top: '10px',
    cursor: 'pointer'
  },

  title: {
    padding: "10px 20px",
    textAlign: "center",
    color: "yellow",
    fontSize: "22px"
  },

  theDock:{
    top: '9%',
    left: '10%'
  }
}

class App extends Component {
  render() {
    let visible = false;
    let sizeOfDock= 0.4;

    this.props.commitsData.length > 0
      ? visible = true
      : visible

    return (
      <div style={[styles.root]}>
        <div style={[styles.main]}>
          <SearchForm {...this.props}/>
          <RepoTable {...this.props}/>

        </div>
        <Dock position='right'  size = {sizeOfDock} isVisible={visible} zIndex={0} dimMode='none' dockStyle={{top: '8%'}}>
          <div style={[styles.dockContent]}>
              
            <CommitsTable {...this.props}/>
          </div>
        </Dock>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.organizationReducer.loading,
    error: state.organizationReducer.error,
    repoData: state.organizationReducer.repoData,

    loadingCommits: state.repoCommitsReducer.loadingCommits,
    errorCommits: state.repoCommitsReducer.errorCommits,
    commitsData: state.repoCommitsReducer.commitsData,

    organizationName: state.formReducer.organizationName,
    showRepos: state.formReducer.showRepos,
    formHasBeenRestarted: state.formReducer.formHasBeenRestarted,
    repoName: state.formReducer.repoName
  };
}


export default connect(mapStateToProps, actionCreators)(App);
