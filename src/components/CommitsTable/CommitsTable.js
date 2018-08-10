import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import Spinner from '../Spinner';

class CommitsTable extends React.Component {
  state = {
    height: '80%',
    rowIndex: ''
  };
  
  render() {
    let table = null;

    if (this.props.loadingCommits) {
      table = <div>
        <Spinner/>
      </div>;
    } else if ((!this.props.loadingCommits) && (this.props.errorCommits)) {
      table = <div>
        <br></br>
        <br></br>
        <p>Application is Unable to find commits for {this.props.repoName}</p>
        <p>Please double check that {this.props.repoName}
          is a valid repo name</p>
      </div>;
    } else {
      if (this.props.commitsData.length > 0) {
        table = <List >
          <Subheader>Recent Commits for {this.props.repoName}</Subheader>
          <Divider inset={true}/> {this.props.commitsData.map((commit, index) => (
            <ListItem key={index} leftAvatar={< Avatar src = {
              commit.author
                ? commit.author['avatar_url']
                : "../../../placeHolder.png"
            } />} primaryText={commit.commit['message']} secondaryText={commit.commit.author['name']}/>
          ))}

        </List>
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
