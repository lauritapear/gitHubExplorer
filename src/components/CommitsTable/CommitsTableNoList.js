import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Spinner from '../Spinner';

class CommitsTable extends React.Component {
  state = {
    height: '80%',
    rowIndex:''
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  handleRepoSelectionChange(event) {
    this.props.handleRepoNameChange(this.props.repoData[event[0]].name);
    this.props.getRepoCommitsData(this.props.organizationName,this.props.repoName)
  }

  render() {
    let table = null;

    if (this.props.loadingCommits) {
      table = <div>
        <Spinner/>
      </div>;
    }else if((!this.props.loadingCommits)&&(this.props.errorCommits))
    {
      table = <div>
        <br></br>
        <br></br>
        <p>Application is Unable to find commits for {this.props.repoName}</p>
        <p>Please double check that {this.props.repoName} is a valid repo name</p>
      </div>;
    }else {
      if(this.props.commitsData.length > 0)
      {
        table =<Table
          height={this.state.height}
          fixedHeader={true}
          fixedFooter={true}
          selectable={false}
          // onRowSelection ={this.handleRepoSelectionChange.bind(this)}
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}
          >
            <TableRow >
              <TableHeaderColumn colSpan="2" tooltip="Super Header" style={{textAlign: 'center'}}>
                List of {this.props.repoName} commits
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="The ID of the repo">Commit Sha</TableHeaderColumn>
              <TableHeaderColumn tooltip="The Name of the repo">Developer</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
            deselectOnClickaway={false}
            showRowHover={false}
            stripedRows={true}
          >
            {this.props.commitsData.map( (row, index) => (
              <TableRow selectable={true} key={index}>
                <TableRowColumn>{row.sha}</TableRowColumn>
                <TableRowColumn>{row.commit.author['name']}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      }
    }
    return (
      <div>
        {table}
      </div>
    );
  }
}

export default CommitsTable
