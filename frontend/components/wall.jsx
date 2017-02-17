import React from 'react';
import WallNavBar from './wall_nav_bar';
import Modal from 'react-modal';

class Wall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coverModalisOpen: false,
      profModalisOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  componentWillMount() {
    Modal.setAppElement('body');
  }

  componentDidMount() {
    this.user = this.props.fetchUser(this.props.params.profile_url);
    this.ownWall = false;
    if (this.props.session.currentUser.id === this.props.user.id) {
      this.ownWall = true;
    }
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
      if (this.props.session.currentUser.id === this.props.user.id) {
        this.ownWall = true;
      }
    }
  }

  openModal (modal) {
    return (event) => {
      this.setState({[modal]: true});
    };
  }

  closeModal (modal) {
    return (event) => {
      this.setState({[modal]: false});
    };
  }

  render() {
  return (
    <section className='wall'>
      <div className='cover'>
        <img id='cover-photo' src={this.coverUrl}/>
        <div id='edit-cover'>
          <i className="fa fa-camera" aria-hidden="true"></i>
        </div>

        <div id='prof-photo-container'>
          <img id='profile-photo' src={this.profileUrl}/>
        </div>
        <div id='edit-prof'>
          <i className="fa fa-camera" aria-hidden="true"></i>
        </div>

      </div>
      <WallNavBar />
    </section>
    );
  }
}

export default Wall;
