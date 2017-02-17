import React from 'react';
import WallNavBar from './wall_nav_bar';
import Modal from 'react-modal';

const modalStyle = {
  overlay: {
    position          :    'fixed',
    top               :    '50%',
    left              :    '50%',
    // backgroundColor   :    'rgba(255, 255, 255, 0.75)',
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
      imageUrl: null
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.renderModal = this.renderModal.bind(this);
  }

  componentWillMount () {
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

  renderModal(type) {
    let titlebar;
    if (type === 'profModalisOpen') {
      titlebar = 'Upload a new profile picture';
    }
    else {
      titlebar = 'Upload a new cover photo';
    }
    return (
      <Modal
        className = 'image-upload'
        isOpen = {this.state[type]}
        style={modalStyle}
        contentLabel=''>
        <p>{titlebar}</p>
        <input onChange={this.updateFile} type='file'/>
        <i className="fa fa-times"
           onClick={this.closeModal(type)}
           aria-hidden="true"></i>
      </Modal>
    );
  }

  render() {

    return (
      <section className='wall'>
        <div className='cover'>
          <img id='cover-photo' src={this.coverUrl}/>
          <div onClick={this.openModal('coverModalisOpen')} id='edit-cover'>
            <i className="fa fa-camera" aria-hidden="true"></i>
          </div>

          {this.renderModal('coverModalisOpen')}

          <div id='prof-photo-container'>
            <img id='profile-photo' src={this.profileUrl}/>
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
