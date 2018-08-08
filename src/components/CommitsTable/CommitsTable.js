import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
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
        table = <List selectable= {false}
          showRowHover={false}>
          <Subheader>Recent Commits for {this.props.repoName}</Subheader>
          {this.props.commitsData.map( (commit) => (
            <div>
              <ListItem
                // leftIcon={<CommunicationCall color={indigo500} />}
                // rightIcon={<CommunicationChatBubble />}
                leftAvatar={<Avatar src={commit.author['avatar_url']} />}
                primaryText={commit.commit['message']}
                secondaryText={commit.commit.author['name']}
              />
              <Divider inset={true} />
            </div>
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
