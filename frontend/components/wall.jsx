import React from 'react';
import WallNavBar from './wall_nav_bar';
import ImgUploadModal from './img_upload_modal_container';
import Posts from './posts_container';



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
    this.renderFriendRequestButton = this.renderFriendRequestButton.bind(this);
    this.renderChangeCoverButton = this.renderChangeCoverButton.bind(this);
    this.renderChangeProfButton = this.renderChangeProfButton.bind(this);
    this.sendFriendRequest = this.sendFriendRequest.bind(this);
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
        .then(() => this.setState({loading: false}));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.profile_url !== this.props.params.profile_url) {
      this.props.fetchUser(nextProps.params.profile_url)
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

  sendFriendRequest (e) {
    e.preventDefault();
    this.props.sendFriendRequest({
      user_id: this.props.session.currentUser.id,
      friend_id: this.props.user.id
    });
  }

  renderFriendRequestButton() {
    if (this.ownWall()) {
      return null;
    }
    //if friends already
    // else if () {
    //   return (
    //     <div id='add-friend'>
    //       <i className="fa fa-check" aria-hidden="true" />
    //     </div>
    //   );
    // }
    else if (this.props.friendState === 'pending') {
      return (
        <div className='add-friend' id='pending-friend-request'>
          <i className="fa fa-user-plus" aria-hidden="true" />
          Friend Request Sent
        </div>
      );
    }
    return (
      <div
        onClick={this.sendFriendRequest}
        className='add-friend'>
        <i className="fa fa-user-plus" aria-hidden="true"></i>
        Add Friend
      </div>
    );
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

          {this.renderFriendRequestButton()}



          <ImgUploadModal
            type='profModalisOpen'
            loading={this.props.loading}
            isOpen={this.state['profModalisOpen']}
            closeModal={this.closeModal('profModalisOpen')}/>

        </div>

        <WallNavBar />


        <Posts posts={this.props.posts}
          wallFName={this.props.user.f_name}
          wallLName={this.props.user.l_name}
          wallId={this.props.user.id}/>

      </section>
    );
  }
}

export default Wall;
