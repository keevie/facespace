import React from 'react';
import WallNavBar from './wall_nav_bar';


class Wall extends React.Component {

  componentDidMount() {
    this.user = this.props.fetchUser(this.props.params.profile_url);
    this.profileUrl = this.user.profile_url
      || window.facespaceAssets.defaultProfile;
    this.coverUrl = this.user.cover_url
      || window.facespaceAssets.defaultCover;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.profile_url !== this.props.params.profile_url) {
      this.user = this.props.fetchUser(this.props.params.profile_url);
      this.profileUrl = this.user.profile_url
        || window.facespaceAssets.defaultProfile;
      this.coverUrl = this.user.cover_url
        || window.facespaceAssets.defaultCover;
    }
  }

  render() {
  return (
    <section className='wall'>
      <div className='cover'>
        <img id='cover-photo' src={this.coverUrl}/>
        <div id='prof-photo-container'>
          <img id='profile-photo' src={this.profileUrl}/>
        </div>
      </div>
      <WallNavBar />
    </section>
    );
  }
}

export default Wall;
