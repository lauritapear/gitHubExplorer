import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {ToolbarTitle} from 'material-ui/Toolbar';

const styles = {

  bar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },

  button:{
    margin: 7,
  },

  title: {
    color: "white",
    fontSize: "22px",
  },

  buttons:{
    display: 'flex',
    flexFlow: 'row wrap'
  }
}
class SearchForm extends React.Component {
  state = {
    textFieldValue: ''
  };
  handleKeyDown(event)
  {
    let enterKeyCode = 13;
    if (event.keyCode === enterKeyCode) {
      this.props.onRestartRepoCommitsData();
      this.props.onRestartOrganizationData();
      this.props.handleOrganizationNameChange(this.state.textFieldValue);
      this.props.getOrganizationReposData(this.state.textFieldValue);
    }
  }

  handleSearchClick(orgName)
  {
    this.props.onRestartRepoCommitsData();
    this.props.onRestartOrganizationData();
    this.props.handleOrganizationNameChange(this.state.textFieldValue);
    this.props.getOrganizationReposData(orgName);
  }

  handleRestartClick()
  {
    this.setState({textFieldValue: ''});
    this.props.onRestartClick();
  }

  render() {
    return (
      <div>
        <AppBar showMenuIconButton={false}
          style={styles.bar}>
          <ToolbarTitle text="GitHub Organization Explorer"
            style={styles.title}/>
        </AppBar>
        <br></br>
        <TextField
          value={this.state.textFieldValue}
          onChange={(event) => {this.setState({textFieldValue: event.target.value})}}
          onKeyDown = {(event)=>this.handleKeyDown(event)}
          hintText="Enter Organization Name"
        />

        <div>
          <RaisedButton label="Search Repos" secondary={true} style={styles.button}
            onClick ={()=>this.handleSearchClick(this.state.textFieldValue)}
          />
          <RaisedButton label="Cancel" primary={true} style={styles.button}
            onClick={() => this.handleRestartClick()} />
        </div>

      </div>
    )
  }
}



export default SearchForm;
