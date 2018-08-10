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
    display: 'flex'
  }
}
class SearchForm extends React.Component {
  
  handleSearchClick(orgName)
  {
    this.props.onRestartRepoCommitsData();
    this.props.onRestartOrganizationData();
    this.props.getOrganizationReposData(orgName);
  }

  render() {
    let diableCommitsButton = true;
    //Only allow users to Search commits if repos have been found
    this.props.repoData.length >0
      ? diableCommitsButton = true
      : diableCommitsButton

    return (
      <div>
        <AppBar showMenuIconButton={false}>
          <ToolbarTitle text="GitHub Organization Explorer"
          style={styles.title}/>
        </AppBar>
        <br></br>
        <TextField
          value={this.props.organizationName}
          onChange={(event) => {this.props.handleOrganizationNameChange(event.target.value)}}
          hintText="Enter Organization Name"
        />

        <RaisedButton label="Search Repos" secondary={true} style={styles.button}
          onClick ={()=>this.handleSearchClick(this.props.organizationName)}
      />
        <RaisedButton label="Restart" primary={true} style={styles.button}
          onClick={() => this.props.onRestartClick()} />
      </div>
    )
  }
}



export default SearchForm;
