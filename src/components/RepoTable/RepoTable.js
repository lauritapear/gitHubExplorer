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

class RepoTable extends React.Component {
  state = {
    height: '400px',
    rowIndex:''
  };

  handleRepoSelectionChange(event) {
    this.props.onRestartRepoCommitsData();
    this.props.handleRepoNameChange(this.props.repoData[event[0]].name);
    this.props.getRepoCommitsData(this.props.organizationName,this.props.repoData[event[0]].name)
  }

  render() {
    let table = null;

    if (this.props.loading) {
      table = <div>
        <Spinner/>
      </div>;
    }else if((!this.props.loading)&&(this.props.error))
    {
      table = <div>
        <br></br>
        <br></br>
        <p>Application is Unable to find repos for {this.props.organizationName}</p>
        <p>Please double check that {this.props.organizationName} is a valid organization name</p>
      </div>;
    }else {
      if(this.props.repoData.length > 0)
      {
        table =<Table
          height={this.state.height}
          fixedHeader={true}
          fixedFooter={true}
          selectable={true}
          onRowSelection ={this.handleRepoSelectionChange.bind(this)}
        >
          <TableHeader displaySelectAll={false}>
            <TableRow >
              <TableHeaderColumn colSpan="2" tooltip="Table of repos" style={{textAlign: 'left'}}>
                List of {this.props.organizationName} repos organized by ascending number of Forks
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="The Name of the repo">Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="The number of repo forks"># Forks</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
            deselectOnClickaway={true}
            showRowHover={true}
            stripedRows={true}
          >
            {this.props.repoData.map( (row, index) => (
              <TableRow selectable={true} key={index}>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.forks}</TableRowColumn>
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

export default RepoTable
