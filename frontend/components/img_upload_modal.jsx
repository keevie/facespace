import React from 'react';
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

class ImgUploadModal extends React.Component{
  constructor (props) {
    super(props);
    this.updateFile = this.updateFile.bind(this);
    this.sendImage = this.sendImage.bind(this);
    this.renderPreview = this.renderPreview.bind(this);
    this.state = {
      imageFile: null,
      imageUrl: null,
      titlebar:   '',
      imageType:  '',
      spinner:    '',
      dot1:       '',
      dot2:       '',
      loading: false
    };
  }

  componentWillMount() {
    Modal.setAppElement('body');
    if (this.props.type === 'profModalisOpen') {
      this.setState({titlebar: 'Upload a new profile picture'});
      this.setState({imageType: 'profile'});
    }
    else {
      this.setState({titlebar: 'Upload a new cover photo'});
      this.setState({imageType: 'cover'});
    }
    if (this.props.profileData.loading) {
      this.setState({
        spinner: '.spinner',
        dot1: '.dot1',
        dot2: '.dot2',
        titlebar: ''
      });
    }
  }

  componentWillReceiveProps() {
    if (this.props.type === 'profModalisOpen') {
      this.setState({titlebar: 'Upload a new profile picture'});
      this.setState({imageType: 'profile'});
    }
    else {
      this.setState({titlebar: 'Upload a new cover photo'});
      this.setState({imageType: 'cover'});
    }
    if (this.props.profileData.loading) {
      this.setState({
        spinner: '.spinner',
        dot1: '.dot1',
        dot2: '.dot2',
        titlebar: ''
      });
    }

    if (this.state.loading) {
      this.setState({
        spinner: '.spinner',
        dot1: '.dot1',
        dot2: '.dot2'
      });
    }
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
    // debugger
    let modalType;
    if (imageType === 'profile') {
      modalType = 'profModalisOpen';
    }
    else {
      modalType = 'coverModalisOpen';
    }
    debugger
    return (e) => {
      this.updateFile(e);
      let formData = new FormData();
      formData.append(`user[${imageType}]`, e.currentTarget.files[0]);
      this.props.loadingUserInfo();
      this.setState({loading: true});
      this.props.updateUser(formData, this.props.profileData.profile_url)
        .then(() => this.setState({loading: false}));
    };
  }

  renderPreview () {
    return <img src={this.state.imageUrl}/>;
  }

  render() {

    return (
      <Modal
        className = 'image-upload'
        isOpen = {this.props.isOpen}
        style={modalStyle}
        contentLabel=''>

        <div className={this.state.spinner}>{this.state.titlebar}
          <div className={this.state.dot1}></div>
          <div className={this.state.dot2}></div>
        </div>
        <form>
          <input onChange={this.sendImage(this.state.imageType)} type='file'/>
        </form>

        { this.state.imageUrl && this.renderPreview()}

        <i className="fa fa-times"
           onClick={this.props.closeModal(this.props.type)}
           aria-hidden="true"></i>
      </Modal>
    );

  }
}

export default ImgUploadModal;
