import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {ToolbarTitle} from 'material-ui/Toolbar';

const styles = {

  title: {
    display: 'flex',
    color: "white",
    fontSize: "22px",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },

  button:{
    margin: 7,
  },

  input: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}
class SearchForm extends React.Component {
  render() {
    let diableCommitsButton = true;
    //Only allow users to Search commits if repos have been found
    this.props.repoData.length >0
      ? diableCommitsButton = false
      : diableCommitsButton

    return (
      <div>
        <AppBar showMenuIconButton={false}>
          <ToolbarTitle text="GitHub Organization Explorer"
          style={styles.title}/>
        </AppBar>
        <br></br>
        <TextField
          // style={styles.input}
          value={this.props.organizationName}
          onChange={(event) => {this.props.handleOrganizationNameChange(event.target.value)}}
          hintText="Enter Organization Name"
        />


        <RaisedButton label="Search Repos" secondary={true} style={styles.button}
        onClick={() => this.props.getOrganizationReposData(this.props.organizationName)} />
        <RaisedButton label="Search Commits" secondary={true} style={styles.button}
        disabled={diableCommitsButton}
        onClick={() => this.props.getRepoCommitsData(this.props.organizationName,this.props.repoName)}
      />
        <RaisedButton label="Restart" primary={true} style={styles.button}
          onClick={() => this.props.onRestartClick()} />
      </div>
    )
  }
}



export default SearchForm;
