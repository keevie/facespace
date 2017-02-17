import React from 'react';
import WallNavBar from './wall_nav_bar';
import Modal from 'react-modal';

const modalStyle = {
  overlay: {
    position          :    'fixed',
    top               :    '50%',
    left              :    '50%',
    backgroundColor   :    'white',
    height            :    '500px',
    width             :    '700px',
    marginTop         :    '-250px',
    marginLeft        :    '-450px',
    zIndex            :    1000000
  },

  content: {
  }
};



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
    this.updateFile = this.updateFile.bind(this);
    this.renderModal = this.renderModal.bind(this);
    this.sendImage = this.sendImage.bind(this);
    this.user = this.user.bind(this);
    this.ownWall = this.ownWall.bind(this);
    this.profileUrl = this.profileUrl.bind(this);
    this.coverUrl = this.coverUrl.bind(this);
  }

  componentWillMount () {
    Modal.setAppElement('body');
  }

  user () {
    return this.props.user.action.user;
  }

  ownWall() {
    return this.props.session.currentUser.id === this.props.user.id;
  }

  profileUrl () {
    return this.user().profile;
  }

  coverUrl () {
    return this.user().cover;
  }

  componentDidMount() {
    this.props.fetchUser(this.props.params.profile_url)
      .then(() => this.setState({loading: false}));
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

  updateFile (event){
    const file = event.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  sendImage (imageType) {
    return (e) => {
      this.updateFile(e);
      let formData = new FormData();
      formData.append(`user[${imageType}]`, e.currentTarget.files[0]);
      this.props.updateUser(formData, this.props.params.profile_url);
    };
  }

  renderModal(type) {
    let titlebar;
    let imageType;
    if (type === 'profModalisOpen') {
      titlebar = 'Upload a new profile picture';
      imageType = 'profile';
    }
    else {
      titlebar = 'Upload a new cover photo';
      imageType = 'cover';
    }
    return (
      <Modal
        className = 'image-upload'
        isOpen = {this.state[type]}
        style={modalStyle}
        contentLabel=''>
        <p>{titlebar}</p>
        <form>
          <input onChange={this.sendImage(imageType)} type='file'/>
        </form>
        <i className="fa fa-times"
           onClick={this.closeModal(type)}
           aria-hidden="true"></i>
      </Modal>
    );
  }

  render() {
    if (this.state.loading) {
      return <h1>loading...</h1>;
    }

    return (
      <section className='wall'>
        <div className='cover'>
          <img id='cover-photo' src={this.coverUrl()}/>
          <div onClick={this.openModal('coverModalisOpen')} id='edit-cover'>
            <i className="fa fa-camera" aria-hidden="true"></i>
          </div>

          {this.renderModal('coverModalisOpen')}

          <div id='prof-photo-container'>
            <img id='profile-photo' src={this.profileUrl()}/>
          </div>
          <div onClick={this.openModal('profModalisOpen')} id='edit-prof'>
            <i className="fa fa-camera" aria-hidden="true"></i>
          </div>

          {this.renderModal('profModalisOpen')}

        </div>
        <WallNavBar />
      </section>
    );
  }
}

export default Wall;
