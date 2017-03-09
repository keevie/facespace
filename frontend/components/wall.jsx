import React from 'react';
import WallNavBar from './wall_nav_bar';
import ImgUploadModal from './img_upload_modal_container';
import Posts from './posts_container';
import FriendRequestButton from './friend_request_button_container';
import About from './about';
import WallFriends from './wall_friends';

class Wall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coverModalisOpen: false,
      profModalisOpen: false,
      imageFile: null,
      imageUrl: null,
      loading: true
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.ownWall = this.ownWall.bind(this);
    this.profileUrl = this.profileUrl.bind(this);
    this.coverUrl = this.coverUrl.bind(this);
    this.renderChangeCoverButton = this.renderChangeCoverButton.bind(this);
    this.renderChangeProfButton = this.renderChangeProfButton.bind(this);
    this.activatePusher = this.activatePusher.bind(this);
  }



  ownWall() {
    return this.props.session.currentUser.id === this.props.user.id;
  }

  profileUrl () {
    return this.props.user.profile;
  }

  coverUrl () {
    return this.props.user.cover;
  }

  componentDidMount() {

    this.props.fetchUser(this.props.params.profile_url)
      .then(() => this.props.fetchTimelinePosts(this.props.user.id))
        .then(() => this.setState({loading: false}))
          .then(() => this.activatePusher());
  }

  activatePusher() {
    this.pusher = new Pusher('9b5a065bd2b14616be5b', {
      encrypted: true
    });
    this.channel = this.pusher.subscribe(`wall-${this.props.user.id}`);

    this.channel.bind('post-change', () => {
      this.props.fetchTimelinePosts(this.props.user.id);
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.profile_url !== this.props.params.profile_url) {
      this.props.fetchUser(nextProps.params.profile_url)
        .then(() => this.props.fetchTimelinePosts(this.props.user.id))
          .then(() => this.setState({loading: false}));
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

  renderChangeProfButton() {
    if (this.ownWall()) {
      return (
        <div onClick={this.openModal('profModalisOpen')} id='edit-prof'>
          <i className="fa fa-camera" aria-hidden="true"></i>
        </div>
      );
    }
    else {
      return null;
    }

  }

  renderChangeCoverButton() {
    if (this.ownWall()) {
      return (
        <div onClick={this.openModal('coverModalisOpen')} id='edit-cover'>
          <i className="fa fa-camera" aria-hidden="true"></i>
        </div>
      );
    }
    else {
      return null;
    }

  }

  render() {
    if (this.state.loading) {
      return <h1>loading...</h1>;
    }
    return (
      <section className='wall'>
        <div className='cover'>
          <img id='cover-photo' src={this.coverUrl()}/>
          {this.renderChangeCoverButton()}

          <ImgUploadModal
            type='coverModalisOpen'
            isOpen={this.state['coverModalisOpen']}
            loading={this.props.loading}
            closeModal={this.closeModal('coverModalisOpen')}/>

          <div id='prof-photo-container'>
            <img id='profile-photo' src={this.profileUrl()}/>
          </div>
          {this.renderChangeProfButton()}

          <div id='cover-name'>
            {this.props.user.f_name + ' ' + this.props.user.l_name}
          </div>

          <FriendRequestButton
            ownWall={this.ownWall()}
            userId={this.props.session.currentUser.id}
            friendId={this.props.user.id}
            sendFriendRequest={this.props.sendFriendRequest}
            friendState={this.props.friendState}/>



          <ImgUploadModal
            type='profModalisOpen'
            loading={this.props.loading}
            isOpen={this.state['profModalisOpen']}
            closeModal={this.closeModal('profModalisOpen')}/>

        </div>

        <WallNavBar />
        <About
          location={this.props.user.location}
          dob={this.props.user.dob}
        />
        <WallFriends
          friends={this.props.session.currentUser.friends}
        />

        <section className='timeline-posts'>
          <Posts posts={this.props.posts}
            wallId={this.props.user.id}/>
        </section>

      </section>
    );
  }
}

export default Wall;
